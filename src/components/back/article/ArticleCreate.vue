<template>
<form action="">
    <div class="columns">
        <div class="column">
            <label class="label">文章名称</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
            <label class="label">所属标签</label>
            <p class="control">
              <span class="select">
                <select>
                  <option>爱情</option>
                </select>
              </span>
            </p>
            <label class="label">Message</label>
            <p class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </p>
        </div>
        <div class="column">
            <div style="background:#fff;margin:0 0 0 20px;height:526px;overflow-y:auto;" v-html="markedToHTML">
            </div>
            <p class="control has-addons">
              <a class="button is-primary is-outlined">
                <span>确认提交</span>
              </a>
              <a class="button is-primary is-outlined" @click="cancel">
                <span>取消</span>
              </a>
            </p>
        </div>
    </div>
</form>

</template>

<script>
import marked from 'marked'
export default {
    data() {
        // 先是单标签
        return {
            article: {
                tags: '',
                title: '',
                content: ''
            }
        }
    },
    methods: {
        cancel() {
            this.$router.push({path: '/admin/article/list'})
        }
    }

}
</script>

<style>
    
</style>