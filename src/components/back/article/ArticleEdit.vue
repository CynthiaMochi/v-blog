<template>
<form @submit.prevent="onSubmit"
        @change="form.error.clear($event.target.name)"
        @keydown="form.error.clear($event.target.name)">
    <div class="columns">
      <div class="column">
        <p class="control">
          <label class="label">文章名称</label>
          <input class="input" type="text" placeholder="Text input"
          v-model="form.title"
          v-on:blur="form.validate('title')">
          <span class="help is-danger"
            v-text="form.error.get('title')"></span>
        </p>
        <p class="control">
          <label class="label">所属标签</label>
          <span class="select" >
            <select v-model="form.tags"
              @change="onSelect">
                <option v-for="opt in tag_list" v-model="opt.name" :tag="opt.id">{{ opt.name }}</option>
            </select>
          </span>
          <span class="help is-danger"
            v-text="form.error.get('tags')"></span>
        </p>
        <p class="control">
          <label class="label">Message</label>
            <textarea class="textarea" placeholder="请在此处编辑文章"
            v-model="form.content"
            @blur="form.validate('content')"></textarea>
            <span class="help is-danger"
            v-text="form.error.get('content')"></span>
        </p>
      </div>
      <div class="column">
          <div style="background:#fff;margin:0 0 0 20px;height:526px;overflow-y:auto;" v-html="markedToHtml">
          </div>
          <p class="control has-addons">
            <a class="button is-primary is-outlined"
            :disabled="form.error.any()"
            @click.prevent="onSubmit">
              <span>确认提交</span>
            </a>
            <a class="button is-primary is-outlined" @click="onCancel">
              <span>取消</span>
            </a>
          </p>
      </div>
  </div>
</form>
</template>

<script>
    import Edit from './edit.js';
    export default Edit;
</script>

<style scoped>
  .textarea {
    height: 500px;
  }
</style>
