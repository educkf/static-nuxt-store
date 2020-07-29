<template>
  <div v-if="schema && schema.type == 'shortString'" class="sm:col-span-6">
    <label
      for="post_title"
      class="block text-sm font-medium leading-5 text-gray-700"
    >{{ schema.name }}</label>
    <div class="mt-1 rounded-md shadow-sm">
      <input
        :id="`post_${name}`"
        type="text"
        :value="value"
        v-on:input="updateValue($event.target.value)"
        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />
    </div>
  </div>

  <div v-else-if="schema && schema.type == 'number'" class="sm:col-span-6">
    <label
      for="post_title"
      class="block text-sm font-medium leading-5 text-gray-700"
    >{{ schema.name }}</label>
    <div class="mt-1 rounded-md shadow-sm">
      <input
        :id="`post_${name}`"
        type="number"
        :value="value"
        v-on:input="updateValue($event.target.value)"
        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />
    </div>
  </div>

  <div v-else-if="schema && schema.type == 'longString'" class="sm:col-span-6">
    <label
      for="post-content"
      class="block text-sm font-medium leading-5 text-gray-700"
    >{{ schema.name }}</label>
    <div class="mt-1 rounded-md shadow-sm">
      <textarea
        :id="`post_${name}`"
        :value="value"
        v-on:input="updateValue($event.target.value)"
        rows="3"
        class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      ></textarea>
    </div>
  </div>

  <div v-else></div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
  name: "FormField",
  components: {},
  filters: {},
  props: {
    schema: {
      type: Object,
      required: true
    },
    value: {
      type: [String, Number]
    },
    name: {
      type: String
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
};
</script>

<style></style>
