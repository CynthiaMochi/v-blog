<template lang="html">
    <article>
      <spinner :loading="loading" :list="article" :resultCode="resultCode"></spinner>

      <div class="content">
        <p class="title">{{article.title}}</p>
        <p class="subtitle"><span>创建于</span><span>{{createdAt}}</span></p>
        <p><span class="tag is-primary">{{tags.name}}</span></p>
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
  import Spinner from '../Spinner.vue'

  const articleApi = api.article;

  export default {
    data() {
      return {
        article: '',
        tags: {},
        loading: true,
        resultCode: -200
      }
    },
    components: { Spinner },

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
            if (result.status === 200) {
                this.article = result.data.article
                this.tags = this.article.tags

                this.resultCode = 200
            }

            this.loading = false;

          })
    }
  }
</script>

<style lang="css" scoped>
  article {
    padding: 20px;
  }
</style>
