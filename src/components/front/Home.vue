<template lang="html">
  <div>
    <div class="block">
      <a class="button" v-for="tag in tags" @click="onFilter(tag)" :class="{'is-success': tag.isChosen}">{{tag.name}}</a>
      <span>more</span>
    </div>
    <full v-for="item in articles" :content="item" :key="item._id"></full>
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
        articleApi.getListFront({page: this.page, limit:this.limit, tags: this.chosen.join(',')})
            .then(result => {
                this.articles =  result.data.articleList
            })
      },
      // 先全获取
      getTagList() {
        tagApi.getList()
            .then(result => {
              result.data
              this.tags = result.data.tagList.map(tag => {
                  return {
                    isChosen: false,
                    ...tag
                  }
              })
              console.log(this.tags)
            })
      },

      onFilter(tag) {
        let id = tag._id;
        tag.isChosen = !tag.isChosen;

        if (!tag.isChosen) {
          this.chosen.splice(this.chosen.indexOf(id))
        } else {
          this.chosen.push(id)
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
