<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleLogin()" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-5 text-gray-700"
            >Endereço de email</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                type="email"
                v-model="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">Senha</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                type="password"
                v-model="password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div class="text-sm leading-5">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >Esqueceu sua senha?</a>
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <AppButton :loading="loading" type="submit">Continuar</AppButton>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters  } from 'vuex';

export default {
  name: "Login",
  filters: {},
  props: {},
  data: function() {
    return {
      loading: false,
      message: null,

      email: "",
      password: ""
    };
  },
  computed: {},
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    async handleLogin() {
      this.loading = true;
      this.message = null;

      if (!this.email || this.email == "") {
        this.message = "Por favor, insira seu e-mail.";
        this.loading = false;
        return false;
      }

      if (!this.password || this.password == "") {
        this.message = "Por favor, insira sua senha.";
        this.loading = false;
        return false;
      }

      const response = await this.$store.dispatch("User/Login", {
        email: this.email,
        password: this.password
      });

      if (response.success) {
        this.$router.push("/gerenciador/painel");
      } else {
        this.message = response.content;
      }

      this.loading = false;
    }
  }
};
</script>

<style scoped lang="scss"></style>
