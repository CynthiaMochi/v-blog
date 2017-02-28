<template>
  <div class="wrapper">
    <vheader></vheader>
    <router-view></router-view>
    <vfooter></vfooter>
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
<style>

</style>
