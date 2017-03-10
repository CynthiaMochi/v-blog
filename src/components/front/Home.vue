<template lang="html">
  <div>
    <section class="tags">
      <a class="button" v-for="tag in tags" @click="onFilter(tag)" :class="{'is-success': tag.isChosen}">{{tag.tagName}}</a>
    </section>

    <spinner :loading="loading" :list="articles.length" :resultCode="resultCode"></spinner>

    <full v-for="item in articles" :content="item" :key="item._id"></full>

    <footer class="load-more" v-if="loadMoreShow">
      <a class="button is-primary is-outlined" :class="{'is-loading': loadMoreFlag}" @click="loadMore">{{ loadMoreText }}</a>
    </footer>

    <scroll-to target="top">
      <span class="icon is-small"><i class="fa fa-arrow-up"></i></span>
    </scroll-to>
  </div>
</template>

<script>
  import Spinner from '../Spinner.vue'
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
        chosen: [],
        loadMoreShow: false,
        loadMoreText: '加载更多',
        loadMoreFlag: false,
        resultCode: -200,
        loading: true
      }
    } ,
    components: {Full, Spinner},
    methods: {
      loadMore() {
        this.loadMoreText = "加载中"
        this.loadMoreFlag = true
        this.page++
        this.getList()
      },

      getList(isTag) {
        // 如果是因为点击标签触发
        if(isTag) {
          this.page = 1
        }

        articleApi.getListFront({page: this.page, limit:this.limit, tags: this.chosen.join(',')})
            .then(result => {

              if (result.status === 200) {
                let data = result.data

                this.articles = isTag ? data.articleList : this.articles.concat(data.articleList)

                this.resultCode = 200;

                if (data.hasNext) {
                    this.loadMoreShow = true
                    this.loadMoreFlag = false
                    this.loadMoreText = '加载更多'
                } else {
                    this.loadMoreShow = false
                }
              }

              this.loading = false;

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
                    tagName: tag.name + "("+ tag.articles.length + ")",
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

        this.getList(true);

      }
    },

    mounted() {
      this.getList();
      this.getTagList()
    }
  }
</script>

<style lang="css" scoped>
  .section {
    border-bottom: 1px solid #ddd;
  }
  .tags {
    padding: 0 1.5rem;
  }
  .tags a {
    margin-bottom: 0.5rem;
    margin-right: 0.8rem;
  }
  footer {
    padding: 2rem;
    text-align: center;
  }
</style>
