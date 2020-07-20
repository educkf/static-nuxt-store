<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <div>
        <h2
          class="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >Blog</h2>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p class="text-xl leading-7 text-gray-500">Listinha de post, pá</p>
        </div>
      </div>
      <div
        class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"
      >
        <div v-for="post in list" :key="post._id">
          <p class="text-sm leading-5 text-gray-500">
            <time
              :datetime="toDate(post._createDate, 'YYYY-MM-DD')"
            >{{ toDate(post._createDate, "DD/MM/YYYY hh:mm:ss") }}</time>
          </p>
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">{{ post.title }}</h3>
          <div class="mt-3">
            <nuxt-link
              :to="`/posts/${post._id}`"
              class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
            >Leia mais</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import dayjs from "dayjs";

export default {
  name: "IndexBlog",
  layout: "default",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {};
  },
  async fetch({ store, params }) {
    await store.dispatch("BlogStore/list");
  },
  async asyncData({ params, error }) {
    // You may want to fetch data and render it on the server-side. Nuxt.js adds an asyncData method that lets you handle async operations before setting the component data.
    // return { project: 'nuxt' }
  },
  computed: {
    ...mapState({
      list: state => state.BlogStore.list
    })
    // ...mapGetters({
    //   item: "namespace/item"
    // })
  },
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    toDate(date, format) {
      return dayjs(date).format(format);
    }
  },
  head() {
    return {
      title: "Hello Static Nuxt store"
    };
  }
};
</script>