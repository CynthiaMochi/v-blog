import api from '../../../api/request.js';
import marked from 'marked'
import hlj from 'highlight.js'
import  'highlight.js/styles/atom-one-dark.css'
import { Form } from '../../util.js'
//import $ from 'jquery'

let articleApi = api.article
// 可以在Edit同时解决创建和编辑问题
export default {
    name: 'article_edit',
    data() {
        var onRequired = (value) => {
            return value === '';
        };

        return {
            form: new Form ({
                id: '',
                tags: '',
                title: '',
                content: ''
                }, {
                title: [{
                    validator: onRequired,
                    message: '文章标题不能为空'
                }],
                content: [{
                    validator: onRequired,
                    message: '文章内容不能为空'
                }],
                tags: [{
                    validator: onRequired,
                    message: '请选择一个文章标签'
                }]
            }),
        }
    },
    methods: {
        // 前后端都做验证
        // 验证值是否为空

        onSubmit() {

            if (!this.form.onValidate()) {

                this.$modal.confirm({
                    content: '确认提交吗?',
                    onOk: this.onOk
                })
            }
        },
        onOk() {
            let {content, title, tags} = this.form,
                vm = this;

            articleApi.create({
                title: title,
                tags: tags,
                 contentToMark:this.markedToHtml,
                content: content
                    })
            .then((res) => {

              if (res.status == 200) {
                console.log(res)
                vm.$notify.success({content: res.data.message})
              }
            })
            .catch((err) => {
              console.log(err)
            })

        },
        onCancel() {
            this.$router.push({path: '/admin/article/list'})
        }
    },

    computed: {
        markedToHtml() {
            marked.setOptions({
                highlight: function (code) {
                    return hlj.highlightAuto(code).value;
                }
            })
            return marked(this.form.content);
        }
    },

}
