<template>
  <section class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title is-4">
          <router-link :to="{path:`/article/${content._id}`}">
            {{ content.title }}
          </router-link>
        </h1>
        <p class="content">{{ subContent}}</p>
        <p><span class="tag is-success">{{ content.tags.name }}</span></p>

        <router-link style="float: right" :to="{path:`/article/${content._id}`}">
          <span>阅读原文</span>
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
      subContent() {
        let maxWidth = 140;
        return this.content.content.substring(0, maxWidth)+'...'
      },

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
  .icon {
    line-height: 1.2rem;
  }

  small {
    color: #888;
  }
</style>
