<template>
  <div></div>
</template>

<script>
//import { mapState, mapGetters  } from 'vuex';

export default {
  name: "",
  layout: "default",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {};
  },
  async fetch({ store, params }) {
    // The fetch method is used to fill the store before rendering the page, it's like the asyncData method except it doesn't set the component data
  },
  async asyncData({ params, error }) {
    // You may want to fetch data and render it on the server-side. Nuxt.js adds an asyncData method that lets you handle async operations before setting the component data.
    // return { project: 'nuxt' }
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
  methods: {},
  head() {
    return {
      title: "Page title",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>

<style></style>

<router>
  path: /_basePage
</router>