<template>
  <nuxt-link to="/admin/Panel" class="flex-shrink-0 flex items-center px-4">
    <h1 class="text-2xl font-semibold text-blue-600">Dashboard</h1>
  </nuxt-link>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
  name: "SidebarLogo",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {};
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
  methods: {}
};
</script>

<style></style>
