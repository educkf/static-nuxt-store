<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <div>
        <h2
          class="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >{{ post.title }}</h2>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p
            class="text-xl leading-7 text-gray-500"
          >{{ toDate(post._createDate, "DD/MM/YYYY hh:mm:ss")}}</p>
        </div>
      </div>
      <div
        class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"
      >
        <article class="prose lg:prose-xl" v-html="post.content"></article>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "SingleBlog",
  layout: "default",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {
      post: {
        title: "",
        content: "",
        _createDate: ""
      }
    };
  },
  async fetch({ store, params }) {},
  async asyncData({ store, params, error }) {
    const post = await store.dispatch("BlogStore/single", params.id);
    return { post };
  },
  computed: {},
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
      title: this.post.title
    };
  }
};
</script>