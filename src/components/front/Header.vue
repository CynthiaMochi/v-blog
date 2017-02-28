<template>
    <header>   
      <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-center">
            <router-link to="/home" class="nav-item is-tab is-hidden-mobile" exact>
              <span class="icon"><i class="fa fa-home fa-lg"></i></span>HOME
            </router-link>
            <router-link to="/list" class="nav-item is-tab is-hidden-mobile">
              <span class="icon"><i class="fa fa-list fa-lg"></i></span>LIST
            </router-link>
            <router-link to="/about" class="nav-item is-tab is-hidden-mobile">
              <span class="icon"><i class="fa fa-user fa-lg"></i></span>ABOUT
            </router-link>
          </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        </div>
      </nav>
    </header>

</template>

<script>
  export default {

  }
</script>
<style>

</style>
