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
  computed: {},
  watch: {},
  async mounted() {
    await this.$store.dispatch('CollectionStore/setupCollections');
  },
};
</script>
