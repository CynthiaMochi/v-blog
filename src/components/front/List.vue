<template lang="html">
    <div>
        <simple :content="articles"></simple>
    </div>

</template>

<script>
import Simple from './article/list.vue'
import api from '../../api/request.js'
import articleData from '../../api/articles.js'

export default {
  data() {
    return {
      articles: []
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

<style lang="css">
</style>
