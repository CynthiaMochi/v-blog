<template>
    <div>
        <p class="control has-addons">
          <a class="button is-primary is-outlined">
            <span>创建标签</span>
          </a>
        </p>
        <data-table :data="dataSource" >
          <column label="标签名" field="title"></column>
          <column label="更新时间" field="updateAt"></column>
          <column label="创建时间" field="createAt"></column>
          <column label="操作">
            <template scope="row">
                  <a class="button is-info">
                    <span>编辑</span>
                  </a>
                  <a class="button is-danger">
                    <span>删除</span>
                  </a>
            </template>
          </column>          
        </data-table>
        <pagination :total="1" ></pagination>
    </div>

</template>

<script>
export default {
    data() {
        return {
            dataSource: [{
                title: '爱情',
                updateAt: '2017-2-14',
                createAt: '2017-2-14',
            },{
                title: '爱情',
                updateAt: '2017-2-14',
                createAt: '2017-2-14',
            },{
                title: '爱情',
                updateAt: '2017-2-14',
                createAt: '2017-2-14',
            },{
                title: '爱情',
                updateAt: '2017-2-14',
                createAt: '2017-2-14',
            },{
                title: '爱情',
                updateAt: '2017-2-14',
                createAt: '2017-2-14',
            },]
        }
    },

}
</script>

<style>
    
</style>