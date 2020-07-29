<template>
  <div class="pt-2 pb-6 md:py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
      <h1 class="text-2xl font-semibold text-gray-900">{{ isNew ? "Nova" : "Editando"}} Postagem</h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- MainContent -->
      <form @submit.prevent="savePost()">
        <div>
          <div>
            <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <label
                  for="post_title"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >Título da postagem</label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="post_title"
                    v-model="post.title"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="post-content"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >Conteúdo</label>
                <div class="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="post-content"
                    v-model="post.content"
                    rows="3"
                    class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
                <p
                  class="mt-2 text-sm text-gray-500"
                >Seja original, não saia copiando e colando, é feio.</p>
              </div>
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
//import { mapState, mapGetters  } from 'vuex';

export default {
  name: "BlogEdit",
  layout: "admin",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {
      isNew: true,
      loading: false,
      post: {
        title: "",
        content: ""
      }
    };
  },
  async fetch({ store, params }) {
    // The fetch method is used to fill the store before rendering the page, it's like the asyncData method except it doesn't set the component data
  },
  async asyncData({ params, store, error }) {
    if (params.id !== "New") {
      const post = await store.dispatch("BlogStore/single", params.id);

      return {
        isNew: false,
        post: post
      };
    } else {
      return {
        isNew: true,
        post: {
          title: "",
          content: ""
        }
      };
    }
  },
  computed: {
    // ...mapState({
    //   item: state => state.namespace.item
    // }),
    // ...mapGetters({
    //   item: "namespace/item"
    // })
  },
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    async savePost() {
      this.loading = true;
      let response;

      if (this.isNew)
        response = await this.$store.dispatch("BlogStore/add", this.post);
      else response = await this.$store.dispatch("BlogStore/update", this.post);

      if (response._status) {
        this.$router.push("/admin/Blog");
      } else {
        this.$store.dispatch("Notification/Set", {
          type: "error",
          title: "Problemas ao salvar seu post",
          message: "Não conseguimos salvar seu post.",
          button: "OK",
          buttonAction: () => this.$store.dispatch("Notification/Clear")
        });
      }
      this.loading = false;
    }
  },
  head() {
    return {
      title: "Edição de Post"
    };
  }
};
</script>