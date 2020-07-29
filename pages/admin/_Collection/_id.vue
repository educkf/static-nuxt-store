<template>
  <div v-if="collection" class="pt-2 pb-6 md:py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
      <h1 class="text-2xl font-semibold text-gray-900">{{ isNew ? "Adicionar" : "Editando"}} {{ collection.single }}</h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- MainContent -->
      <form @submit.prevent="saveContent()">
        <div>
          <div>
            <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <FormField 
                v-for="(value, name) in collection.schema" 
                :key="name"
                :name="name"
                :schema="value"
                v-model="content[name]"
              />
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-5">
          <div class="flex justify-end">
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <AppButton :loading="loading" type="loading">Salvar</AppButton>
            </span>
          </div>
        </div>
      </form>
      <!-- /MainContent -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "BlogEdit",
  layout: "admin",
  filters: {},
  props: {},
  data: function() {
    return {
      isNew: true,
      loading: false,
      content: {}
    };
  },
  async fetch() {},
  async asyncData({ params, store }) {
    if (params.id !== "New") {
      const content = await store.dispatch("CollectionStore/single", [params.Collection, params.id]);

      return {
        isNew: false,
        content: content
      };
    } else {
      return {
        isNew: true,
        content: {}
      };
    }
  },
  computed: {
    ...mapState({
      collections: state => state.CollectionStore.collections
    }),

    collection() {
      if (this.collections.length > 0) return this.collections.find(item => item.name === this.$route.params.Collection);
      else return null;
    }
  },
  watch: {},
  async created() {
    if (this.collections.length === 0) this.$router.push("/admin/Panel");
    else {
      if (this.isNew) {
        for (let [key, value] of Object.entries(this.collection.default)) {
          this.$set(this.content, key, value);
        }
      }
    }
  },
  async mounted() {},
  methods: {
    async saveContent() {
      this.loading = true;
      let response;

      if (this.isNew)
        response = await this.$store.dispatch("CollectionStore/add", [this.collection.name, this.content]);
      else response = await this.$store.dispatch("CollectionStore/update", [this.collection.name, this.content]);

      if (response._status) {
        this.$router.push(`/admin/${this.collection.name}`);

      } else {
        this.$store.dispatch("Notification/Set", {
          type: "error",
          title: `Problemas ao salvar seu ${this.collection.single}`,
          message: `Não conseguimos salvar seu ${this.collection.single}.`,
          button: "OK",
          buttonAction: () => this.$store.dispatch("Notification/Clear")
        });
      }
      this.loading = false;
    }
  },
  head() {
    return {
      title: this.collection ? "Edição de " + this.collection.single : "Aguarde..."
    };
  }
};
</script>