<template>
  <section class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title is-4">
          <router-link :to="{path:`/article/${content._id}`}">
            {{ content.title }}
          </router-link>
        </h1>
        <p>{{ content.content}}</p>
          <router-link :to="{path:`/article/${content._id}`}">
            <span>more</span>
          </router-link>
        <br>
        <small>
            <span class="icon"><i class="fa fa-user"></i></span>cynthia
            <span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span>{{ updatedAt }}
        </small>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
export default {
    props: ['content'],
    computed: {
      updatedAt() {
        return moment(this.content.updatedAt).format('YYYY-MM-DD HH:mm:ss')
      }
    }
}

</script>

<style scoped>
  a.head {
    border: 0px;
    color: #00d1b2;
    cursor: pointer;
  }
  a.more {
    border: 0px;
    display: inline-block;
    color: #00d1b2;
    cursor: pointer;
    text-decoration: none;
    -webkit-transition: none 86ms ease-out;
    transition: none 86ms ease-out;
  }
</style>
