<template lang="html">
    <div>
        <ul v-for="(data, year) in yearsData">
          <h3 class="title">{{ year }}</h3>
          <li v-for="item in data">
            <span>{{item.date}}</span>
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
    </div>
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
