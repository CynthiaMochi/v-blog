<template lang="html">
<div class="nav-right nav-menu">
          <router-link to="/" class="nav-item is-tab is-hidden-tablet">
            <span class="icon"><i class="fa fa-home fa-lg"></i></span>HOME
          </router-link>
          <router-link to="/list" class="nav-item is-tab is-hidden-tablet">
            <span class="icon"><i class="fa fa-list fa-lg"></i></span>LIST
          </router-link>
          <router-link to="/about" class="nav-item is-tab is-hidden-tablet">
            <span class="icon"><i class="fa fa-user fa-lg"></i></span>ABOUT
          </router-link>
    </div>
</template>

<script>
export default {
  data() {
    let menuList = [
      {
        name: 'HOME',
        path: '/home'
      },
      {
        name: 'LIST',
        path: '/list'
      },
      {
        name: 'ABOUT',
        path: '/about'
      }
    ]
    return {
      menuList: menuList
    }
  },
  computed: {
    show: function() {
      return this.$store.getters.leftNavState
    }
  },
  methods: {
    hideNav() {
      // 侧边栏隐藏
      this.$store.dispatch('changeLeftNavState', false)
    }
  }
}
</script>

<style lang="css">
</style>
