<template>
  <div>
    <div class="columns">
      <div class="column">
        <vheader></vheader>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <router-view></router-view>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <vfooter></vfooter>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      'vheader': Header,
      'vfooter': Footer
    }
  }
</script>
<style scoped>
    .fade-enter-active,.fade-leave-active{
      transition: all .3s ;
    }
    .fade-enter{
      transform: translateY(2rem);
      opacity:0;
    }
    .fade-leave-active{
      transform: translateX(2rem);
      opacity:0;
    }
</style>
