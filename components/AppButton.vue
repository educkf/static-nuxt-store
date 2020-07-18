<template>
  <button
    @click="clicked"
    class="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline select-none"
    :class="color"
    :type="type"
  >
    <span v-if="!loading">
      <slot></slot>
    </span>
    <DotLoading :dotColor="dotColor" v-else />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      required: false
    },
    color: {
      required: false,
      default: "bg-blue-500 hover:bg-blue-700 text-white"
    },
    loading: {
      required: true
    },
    dotColor: {
      required: false,
      default: "#fff"
    }
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    }
  }
};
</script>

<style scoped></style>
