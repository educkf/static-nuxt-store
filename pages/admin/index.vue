<template></template>

<script>
export default {
  created() {
    const isAuth = this.$store.dispatch("User/IsAuth");
    if (isAuth) {
      this.$router.push("/admin/Panel");
    } else {
      this.$router.push("/admin/Login");
    }
  }
};
</script>