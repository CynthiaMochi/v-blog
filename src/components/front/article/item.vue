<template>  
<div>
  <section class="section" v-for="data in content">
    <div class="container">
      <div class="heading">
        <h1 class="title is-4"><a href="article/:id">{{ data.title }}</a></h1>
        <p>{{ data.digest }}</p>
        <a><span>more</span></a>
        <br>
        <small>
            <span class="icon"><i class="fa fa-user"></i></span>cynthia
            <span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span>{{ data.date }}
        </small>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
    props: ['content']
}
    
</script>

<style>
    
</style>