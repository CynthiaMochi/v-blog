<template lang="html">
<!-- 文章按照时间排序 -->
<!--     <div>
        <ul v-for="(data, year) in yearsData">
          <h3 class="title">{{ year }}</h3>
          <li v-for="item in data">
            <span>{{item.date}}</span>
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
    </div> -->
  <timeline>
    <timeline-item date="2 minutes ago" type="primary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.
    </timeline-item>
    <timeline-item date="Sat, 5 Mar" type="primary">
      <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </timeline-item>
    <timeline-item date="Sun, 11 Feb" type="success">
      Call to customer Jacob and discuss the detail.
    </timeline-item>
  </timeline>
</template>

<script>

function getYear (str) {
    return str.split('-')[0];
}
function getYearData (data) {
    let hash = {}
    data.forEach((item) => {
        let year = getYear(item.date)
        if (!hash[year]) {
            hash[year] = []
        } else {
            hash[year].push(item)
        }

    })
    return hash;
}
export default {
    props: ['content'],
    computed: {
        //需要把数据按照时间分类
        yearsData() {
            return getYearData(this.content);
        }
    }
}
</script>

<style lang="css">
</style>
