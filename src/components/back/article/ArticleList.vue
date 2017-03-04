<template>
    <div class="article-pane">
      <data-table :data="article_list" :change="onTableChange" :on-select-change="onSelectChange" checkable show-index :pagination="pagination" bordered rowKey="title">
          <table-toolbar>
            <template slot="left">
              <div class="level-item">
                <a class="button is-primary is-outlined"
                  @click="onDelete(true)"
                  :class="{'is-disabled': !hasSelect}">
                  <span class="icon is-small"><i class="fa fa-edit"></i></span><span>批量删除</span>
                </a>
              </div>
            </template>
          </table-toolbar>

          <column label="文章名">
            <template scope="row">
              <span>{{ row.title }}</span>
            </template>
          </column>
          <column label="标签">
            <template scope="row">
              <tag type="primary">{{ row.tags }}</tag>
            </template>
          </column>
          <column label="更新时间" field="updatedAt" sorter="custom"></column>
          <column label="创建时间" field="createdAt" sorter="custom"></column>
          <column label="操作">
            <template scope="row">
              <a class="button is-primary is-outlined"
                @click="onCheck(row)">
                <span>查看</span>
              </a>
              <a class="button is-info"
                @click="onEdit(row)">
                <span>编辑</span>
              </a>
              <a class="button is-danger"
                @click="onDelete(row)">
                <span>删除</span>
              </a>
            </template>
          </column>
        </data-table>
    </div>
</template>

<script>
import List from './list.js'

export default List
</script>

<style>
  .article-pane {
    padding: 2rem;
  }
</style>
