<template>
  <transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="message"
      class="fixed z-50 inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
      <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
        <div class="rounded-lg shadow-xs overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6"
                  :class="`text-${color[type]}-400`"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p
                  class="text-sm leading-5 font-bold"
                  :class="`text-${color[type]}-700`"
                >{{ title }}</p>
                <p class="mt-1 text-sm leading-5 text-gray-500">{{ message }}</p>
                <div class="mt-2">
                  <button
                    @click.prevent="handleAction()"
                    class="text-sm leading-5 font-medium focus:outline-none focus:underline transition ease-in-out duration-150"
                    :class="`text-${color[type]}-600 hover:text-${color[type]}-500`"
                  >{{ button }}</button>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button
                  @click.prevent="close()"
                  class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                >
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppNotification",
  components: {},
  filters: {},
  props: {},
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
    ...mapState({
      icon: state => state.Notification.icon,
      type: state => state.Notification.type,
      title: state => state.Notification.title,
      message: state => state.Notification.message,
      button: state => state.Notification.button,
      timeout: state => state.Notification.timeout,
      buttonAction: state => state.Notification.buttonAction
    })
  },
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    handleAction() {
      this.buttonAction();
    },

    close() {
      this.$store.dispatch("Notification/Clear");
    }
  }
};
</script>

<style></style>
