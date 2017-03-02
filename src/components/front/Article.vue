<template lang="html">
    <article class="tile is-child">
      <div class="content">
        <p class="title">{{article.title}}</p>
        <p class="subtitle">{{article.createdAt}}</p>
        <section class="content" v-html="article.contentToMark"></section>
      </div>
    </article>
</template>

<script>
  import api from '../../api/request.js'

  const articleApi = api.article;
  export default {
    data() {
      return {
        article: ''
      }
    },

    mounted() {
      articleApi.findFront({id: this.$route.params.id})
              .then(result => {
                this.article = result.data.article
              })
    }
  }
</script>

<style lang="css">
</style>
