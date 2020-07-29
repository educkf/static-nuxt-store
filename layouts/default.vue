<template>
  <div>
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "BaseDefault",
  components: {},
  filters: {},
  props: {},

  data: function() {
    return {};
  },

  async fetch() {},
  async asyncData() {},
  computed: {},
  watch: {},

  async mounted() {
    this.$store.dispatch('CollectionStore/setupCollections');
  },
};
</script>
