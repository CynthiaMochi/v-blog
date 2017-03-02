<template lang="html">
  <div>
    <div class="block">
      <a class="button" v-for="tag in tags" @click="onFilter(tag)">{{tag.name}}</a>
      <span>more</span>
    </div>
    <full v-for="item in articles" :content="item"></full>
  </div>
</template>

<script>
  import api from '../../api/request.js'
  import Full from './article/item.vue'

  const articleApi = api.article;
  const tagApi = api.tag;

  export default {
    data() {
      return {
        articles: [],
        page: 1,
        limit: 6,
        tags: [],
        tagLimit: 10,
        chosen: []
      }
    } ,
    components: {Full},
    methods: {
      getList() {
        articleApi.getListFront({page: this.page, limit:this.limit, tags: chosen.join('')})
            .then(result => {
                this.articles =  result.data.articleList
            })
      },
      // 先全获取
      getTagList() {
        tagApi.getList()
            .then(result => {
              console.log(result)
              this.tags = result.data.tagList
            })
      },

      onFilter(tag) {
        let id = tag._id
        if (chosen.includes(id)) {
          chosen.splice(chosen.indexOf(id))
        } else {
          chosen.push(id)
        }

        this.getList();

      }
    },
    mounted() {
      this.getList();
      this.getTagList()
    }
  }
</script>

<style lang="css">
</style>
