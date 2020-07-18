<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleLogin()" class="bg-white shadow-lg rounded w-128 p-6">
      <h3 class="mt-1 mb-5 font-bold text-3xl">Login</h3>

      <label class="w-full mb-3 block">
        <span class="label">E-mail</span>
        <input type="text" class="input" v-model="email" />
      </label>

      <label class="w-full mb-3 block">
        <span class="label">Senha</span>
        <input type="password" class="input" v-model="password" />
      </label>

      <AppButton :loading="loading">Fazer login</AppButton>

      <div
        v-if="message"
        class="w-full rounded border border-red-400 bg-red-100 px-4 pt-2 pb-1 font-bold text-red-500 mt-6"
      >{{ message }}</div>
    </form>
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

      console.log(response);

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
