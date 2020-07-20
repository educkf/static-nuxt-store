<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <SideBar :showSidebar="showSidebar" @closeSidebar="toggleSidebar()" />
    <AppNotification />

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          @click.prevent="toggleSidebar()"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          aria-label="Open sidebar"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters  } from 'vuex';
import { Auth } from "~/services/firebase.js";

export default {
  name: "BaseAdmin",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {
      showSidebar: false
    };
  },
  async fetch({ store, params }) {
    // The fetch method is used to fill the store before rendering the page, it's like the asyncData method except it doesn't set the component data
  },
  async asyncData({ params, error }) {
    // You may want to fetch data and render it on the server-side. Nuxt.js adds an asyncData method that lets you handle async operations before setting the component data.
    // return { project: 'nuxt' }
  },
  computed: {},
  watch: {},
  async created() {
    Auth.onAuthStateChanged(user => {
      if (!user) {
        this.$router.push("/admin/Login");
      }
    });
  },
  async mounted() {},
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
};
</script>