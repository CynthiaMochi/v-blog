<template>
  <div class="wrapper ">
    <vheader></vheader>
    <div class="columns is-gapless">
      <div class="column is-2">
        <sidebar></sidebar>
      </div>
      <div class="column is-10">
        <router-view></router-view>
      </div>
    </div>
  </div>


</template>

<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default {
    data() {
        return {

        }
    },
    components: {
      'sidebar': Sidebar,
      'vheader': Header
    }

}
</script>

<style scoped>

</style>
