<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-center">
          <router-link to="/home" class="nav-item is-tab is-hidden-mobile" exact>
          <span class="icon route-head"><i class="fa fa-home fa-lg"></i></span>
          <span>HOME</span>
          </router-link>
          <router-link to="/list" class="nav-item is-tab is-hidden-mobile">
          <span class="icon route-head"><i class="fa fa-list fa-lg"></i></span><span>LIST</span>
        </router-link>
        <router-link to="/about" class="nav-item is-tab is-hidden-mobile">
          <span class="icon route-head"><i class="fa fa-user fa-lg"></i></span><span>ABOUT</span>
        </router-link>
      </div>
      <span class="nav-toggle" @click="isShow= !isShow">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <b-aside :is-show="isShow" width=250 :show-footer="false" title="MENU" @close="isShow=false">
        <router-link to="/home" class="nav-item is-tab" exact>
          <span class="icon route-head"><i class="fa fa-home fa-lg"></i></span>
          <span>HOME</span>
        </router-link>
        <router-link to="/list" class="nav-item is-tab">
          <span class="icon route-head"><i class="fa fa-list fa-lg"></i></span><span>LIST</span>
        </router-link>
        <router-link to="/about" class="nav-item is-tab">
          <span class="icon route-head"><i class="fa fa-user fa-lg"></i></span><span>ABOUT</span>
        </router-link>
      </b-aside>
    </div>
  </nav>
  <!-- banner -->
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          All I am is what I am going after
        </h1>
        <h2 class="subtitle">
          Good day^^
        </h2>
      </div>
    </div>
  </section>
</div>


</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    }
  }
</script>
<style scoped>
  .route-head {
    line-height: 1.5rem;
  }
  .hero {
    background-image: url('../../assets/hero.jpeg');
    background-position: 0 -30rem;
    background-repeat: no-repeat;
  }
  .hero-body h1, h2 {
    color: #fff;
  }
</style>
