<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style>
  html, body{
    width: 100%;
    height: 100%;
  }
  #app {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

</style>
