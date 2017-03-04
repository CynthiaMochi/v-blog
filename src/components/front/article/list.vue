<template lang="html">
    <timeline-item :date="createdAt" type="primary">
    <h3 class="title is-5">
      <router-link :to="{path:`/article/${content._id}`}">
          {{ content.title }}
      </router-link>
     </h3>
    </timeline-item>
</template>

<script>
import moment from 'moment'
export default {
    props: ['content'],
    computed: {
        //需要把数据按照时间分类
        createdAt() {
          return moment(this.content.createdAt).format('YYYY-MM-DD HH:mm:ss')
       }
    }
}
</script>

<style lang="css">
</style>
