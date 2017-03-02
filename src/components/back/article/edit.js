import api from '../../../api/request.js';
import marked from 'marked'
import hlj from 'highlight.js'
import  'highlight.js/styles/atom-one-dark.css'
import { Form } from '../../util.js'
//import $ from 'jquery'

let articleApi = api.article
let tagApi = api.tag
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
                tagsId: '',
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
            tag_list: []
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

        getTagList() {
            let vm = this;
            tagApi.getList()
                .then((res) => {

                    let data = res.data.tagList;
                    vm.tag_list = data.map((item) => {
                        return {id: item._id,
                                name: item.name}
                    }) ;
                })
                .catch(err => {
                    console.log(err)
                })
        },

        getArticle(id) {
            let vm = this;

            articleApi.findBack({id: id})
                .then((res) => {
                    let data = res.data.article;

                    vm.form.title = data.title;
                    vm.form.id = data._id;
                    vm.form.tags = data.tags.name;
                    vm.form.content = data.content;
                    // vm.form.tagsId = data.tags._id;

                })
                .catch(err => {
                    console.log(err)
                })
        },

        onSelect(e) {
            var option = e.target.options[e.target.selectedIndex]
            this.form.tagsId = option.getAttribute('tag');
            this.form.validate('tags')
        },

        onOk() {
            let {content, title, tagsId, id} = this.form,
                vm = this;

            articleApi.create({
                id: id,
                title: title,
                tags: tagsId,
                contentToMark:this.markedToHtml,
                content: content
                    })
            .then((res) => {

              if (res.status == 200) {
                vm.$notify.success({content: res.data.message})
              }

              this.$router.push(`/admin/article/list`)
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

    mounted() {
      // 创建和编辑共用
        this.getTagList()
        let id = this.$route.params.id;

        if (id) {
            this.getArticle(id);
        }
    }

}
