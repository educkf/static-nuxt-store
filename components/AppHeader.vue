<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-2">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="lg:w-0 lg:flex-1">
          <nuxt-link to="/" class="flex">
            <h1 class="text-2xl font-semibold text-blue-600">Website do futuro</h1>
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            @click.prevent="showMenu = true"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
        <nav class="hidden md:flex space-x-10">
          <nuxt-link
            to="/blog"
            href="#"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >Blog</nuxt-link>
          <nuxt-link
            to="sobre"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >Quem Somos</nuxt-link>
        </nav>
        <!-- <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <a
            href="#"
            class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >Logar</a>
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >Cadastrar</a>
          </span>
        </div>-->
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div
      v-if="showMenu"
      class="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  @click.prevent="showMenu = false"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 row-gap-4 col-gap-8">
              <nuxt-link
                to="/blog"
                class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >Blog</nuxt-link>
              <nuxt-link
                to="/sobre"
                class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >Sobre</nuxt-link>
            </div>
            <!-- <div class="space-y-6">
              <span class="w-full flex rounded-md shadow-sm">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >Sign up</a>
              </span>
              <p class="text-center text-base leading-6 font-medium text-gray-500">
                Existing customer?
                <a
                  href="#"
                  class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >Sign in</a>
              </p>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
  name: "AppHeader",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {
      showMenu: false
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
