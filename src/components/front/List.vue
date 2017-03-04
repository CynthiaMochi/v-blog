<template lang="html">
    <timeline >
      <simple v-for="(article, key) in articles" :content="article" key="key"></simple>
    </timeline>
</template>

<script>
import Simple from './article/list.vue'
import api from '../../api/request.js'
import articleData from '../../api/articles.js'

const articleApi = api.article;
export default {
  data() {
    return {
      articles: [],
      page: '',
      limit: ''
    }
  },
  components: {Simple},
  methods: {
    getList() {
      articleApi.getListFront({page: this.page, limit:this.limit})
          .then(result => {
            console.log(result)
            this.articles = result.data.articleList
          })
    }
  },

  mounted() {
    this.getList()
  }
}
</script>

<style lang="css" scoped>
  .timeline {
    padding: 1rem 4rem;
  }
</style>
