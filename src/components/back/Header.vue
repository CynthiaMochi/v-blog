<template>
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab"@click="onLogout" ><span class="icon is-small"><i class="fa fa-user"></i></span>Log out</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    onLogout() {
      this.$modal.confirm({
        content: '确认退出吗?',
        onOk: this.onOk
      })
    },

    onOk() {
      this.$store.dispatch('UserLogout')
    }
  }
}
</script>

<style>

</style>
