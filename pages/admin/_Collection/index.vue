<template>
  <div v-if="collection" class="pt-2 pb-6 md:py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
      <h1 class="text-2xl font-semibold text-gray-900">{{ collection.label }}</h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- MainContent -->
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Seus {{ collection.label }}</h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <nuxt-link
                :to="`/admin/${collection.name}/New`"
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
              >Criar novo</nuxt-link>
            </span>
          </div>
        </div>
      </div>

      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          <li v-for="item in list" :key="item._id">
            <nuxt-link
              :to="`/admin/${collection.name}/${item._id}`"
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div class="px-4 py-4 flex items-center sm:px-6">
                <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                      {{ item.title }}
                      <span class="ml-1 font-normal text-gray-500">Publicado</span>
                    </div>
                    <div class="mt-2 flex">
                      <div class="flex items-center text-sm leading-5 text-gray-500">
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>{{ toDate(item._createDate) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ml-5 flex-shrink-0">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- /MainContent -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import dayjs from "dayjs";

export default {
  name: "BlogIndex",
  layout: "admin",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {};
  },
  async fetch({ store, params }) {
    await store.dispatch("BlogStore/list");
  },
  async asyncData({ params, error }) {
    // You may want to fetch data and render it on the server-side. Nuxt.js adds an asyncData method that lets you handle async operations before setting the component data.
    // return { project: 'nuxt' }
  },
  computed: {
    ...mapState({
      collections: state => state.CollectionStore.collections
    }),

    collection() {
      if (this.collections.length > 0) return this.collections.find(item => item.name === this.$route.params.Collection);
      else return null;
    },

    list() {
      return this.$store.state.CollectionStore[this.collection.name]
    }
  },
  watch: {},
  async created() {
    if (this.collections.length === 0) this.$router.push("/admin/Panel");
    else this.$store.dispatch('CollectionStore/list', [this.collection.name])
  },
  async mounted() {},
  methods: {
    toDate(date) {
      return dayjs(date).format("DD/MM/YYYY hh:mm:ss");
    }
  },
  head() {
    return {
      title: this.collection ? this.collection.label : "Aguarde..."
    };
  }
};
</script>