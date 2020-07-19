<template>
  <button
    @click="clicked"
    :type="type"
    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
    :class="color"
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
      required: false
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
