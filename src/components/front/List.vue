<template lang="html">
    <tabs>
      <tab title="FULL" :selected="true" >
        <full :content="articles"></full>
      </tab>
      <tab title="SIMPLE">
        <simple :content="articles"></simple>
      </tab>
    </tabs>
</template>

<script>
import Tabs from './article/tabs.vue'
import Tab from './article/tab.vue'
import Full from './article/item.vue'
import Simple from './article/list.vue'

import articleData from '../../api/articles.js'

export default {
  data() {
    return {
      articles: []
    }
  },
  components: {Tabs, Tab, Full, Simple},
  created () {
    articleData.getArticles(articles => {
      this.articles = articles;
    })
  }
}
</script>

<style lang="css">
</style>
