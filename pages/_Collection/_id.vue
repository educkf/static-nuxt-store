<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div v-if="content" class="relative max-w-lg mx-auto lg:max-w-7xl">
      <div class="mb-14">
        <h2
          class="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        ><nuxt-link :to="`/${collection.name}`">{{ collection.label }}</nuxt-link></h2>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p class="text-xl leading-7 text-gray-500">{{ collection.description }}</p>
        </div>
      </div>
      <div>
        <h2
          class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl sm:leading-10"
        >{{ content.fields.title.stringValue }}</h2>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p
            class="text-xl leading-7 text-gray-500"
          >{{ toDate(content.fields._createDate.stringValue, "DD/MM/YYYY hh:mm:ss")}}</p>
        </div>
      </div>
      <div
        class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"
      >
        <article class="prose lg:prose-xl" v-html="content.fields.description.stringValue"></article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import dayjs from "dayjs";

export default {
  name: "SingleCollection",
  layout: "default",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {
      content: null
    };
  },
  async fetch({ store, params }) {},
  async asyncData({ store, $axios, params, error }) {
    await store.dispatch('CollectionStore/setupCollections');

    try {
      const content = await $axios.$get(
        (process.env.firestoreUrl || process.env.FIRESTORE_URL) + params.Collection + "/" + params.id
      );
      if (content) {
        return {
          content
        };
      }
    } catch (err) {
      return {
        content: null
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
  async created() {},
  async mounted() {},
  methods: {
    toDate(date, format) {
      return dayjs(date).format(format);
    }
  }
};
</script>