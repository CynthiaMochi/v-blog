<template>
  <div>
    <data-table :data="tag_list" :change="onTableChange" :on-select-change="onSelectChange" checkable rowKey="name" show-index :pagination="pagination" bordered>
      <table-toolbar has-refresh has-columns-control>
        <template slot="left">
          <div class="level-item">
            <a class="button is-primary is-outlined"
              @click="onDelete(true)"
              :class="{'is-disabled': !hasSelect}">
              <span class="icon is-small"><i class="fa fa-edit"></i></span><span>批量删除</span>
            </a>
            <a class="button is-primary" @click="onCreate"><span class="icon is-small"><i class="fa fa-edit"></i></span><span>创建标签</span></a>
          </div>
        </template>

      </table-toolbar>
      <column label="标签名">
        <template scope="row">
          <span>{{ row.name }}</span>
        </template>
      </column>
      <column label="更新时间" field="updatedAt"></column>
      <column label="创建时间" field="createdAt"></column>
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
            @click="onDelete(row)" :class="{'is-disabled': !row.isDeletable}">
            <span>删除</span>
          </a>
        </template>
      </column>
    </data-table>
    <modal title="创建标签" :on-ok="onOkEdit"
    transition="fadeDown"
    :on-cancel="onCancel" :is-show="modal.isShowCreate" @close="modal.isShowCreate=false">
      <div class="control is-horizontal">
        <div class="control-label">
          <label class="label">标签名</label>
        </div>
        <div class="control is-grouped">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="请在此输入标签名"
            ref="editInput" :value="modal.editing.name">
          </p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import List from './list.js'

export default List
</script>

<style>

</style>
