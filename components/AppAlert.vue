<template>
  <div class="rounded-md p-4" :class="`bg-${color[type]}-50 `">
    <h3 class="text-sm leading-5 font-bold" :class="`text-${color[type]}-800`">
      <slot name="header"></slot>
    </h3>
    <div class="mt-2 text-sm leading-5" :class="`text-${color[type]}-700`">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
  name: "AppAlert",
  components: {},
  filters: {},
  props: {
    type: {
      type: String,
      required: true,
      default: "error"
    }
  },
  data: function() {
    return {
      color: {
        error: "red",
        alert: "yellow",
        success: "green",
        default: "blue"
      }
    };
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
