<template>
  <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
    <div @click.prevent="SignOut()" class="flex-shrink-0 group block cursor-pointer">
      <div class="flex items-center">
        <div @click.prevent="SignOut()">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
          >
            <path
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </div>
        <div class="ml-3">
          <p
            class="text-sm leading-4 font-medium text-gray-500 group-hover:text-gray-700 transition ease-in-out duration-150"
          >Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
  name: "SidebarSignout",
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
  methods: {
    async SignOut() {
      const response = await this.$store.dispatch("User/SignOut");
      if (response) {
        this.$router.push("/admin/Login");
      } else {
        this.$store.dispatch("Notification/Set", {
          type: "error",
          title: "Ops!",
          message: "Aconteceu um erro, tente novamente",
          button: "OK",
          buttonAction: () => this.$store.dispatch("Notification/Clear")
        });
      }
    }
  }
};
</script>

<style></style>
