<template lang="html">
    <article>
      <div class="content">
        <p class="title">{{article.title}}</p>
        <p class="subtitle"><span>创建于</span><span>{{createdAt}}</span></p>
        <p><span class="tag is-primary">{{article.tags.name}}</span></p>
        <section class="content" v-html="article.contentToMark"></section>
      </div>
      <scroll-to target="top">
        <span class="icon is-small"><i class="fa fa-arrow-up"></i></span>
      </scroll-to>
    </article>
</template>

<script>
  import moment from 'moment'
  import api from '../../api/request.js'

  const articleApi = api.article;
  export default {
    data() {
      return {
        article: ''
      }
    },
    computed: {
      updatedAt() {
        return moment(this.article.updatedAt).format('YYYY-MM-DD HH:mm:ss')
      },
      createdAt() {
        return moment(this.article.createdAt).format('YYYY-MM-DD HH:mm:ss')
      }
    },

    mounted() {
      articleApi.findFront({id: this.$route.params.id})
          .then(result => {
            this.article = result.data.article
            console.log(this.article)
          })
    }
  }
</script>

<style lang="css" scoped>
  article {
    padding: 20px;
  }
</style>
