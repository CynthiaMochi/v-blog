import api from '../../../api/request.js';
import moment from 'moment';

let articleApi = api.article
export default {
    name: 'article_list',
    data() {
        return {
            article_list: [],
            batch_id: '', // 批量删除时，用逗号隔开多个id字符
            hasSelect: false,// 是否选择了
            pagination: {
                page: 1,
                total: 0,
                limit: 10
            },
            selectedItems: []
        }
    },
    methods: {
        getList() {
          // 刷新的时候要把选中的删掉
            articleApi.getListBack({
                page: this.pagination.page,
                limit: this.pagination.limit
            })
            .then(({data: {articleList, total}}) => {
                // 为什么要setTimeout
                //console.log(articleList)
                console.log(total)
                this.article_list = articleList.map((article) => {
                    let { _id, title, content, contentToMark, tags: {name}, updatedAt, createdAt } = article;
                    return {
                      id: _id,
                      title: title,
                      content: content,
                      contentToMark: contentToMark,
                      tags: name,
                      updatedAt: moment(updatedAt).format('YYYY-MM-DD HH:mm:ss') ,
                      createdAt: moment(createdAt).format('YYYY-MM-DD HH:mm:ss')
                    }
                })
                this.pagination.total = total;
            })
        },

        onTableChange() {
          this.pagination.page++;
          this.getList();
        },
        // 选择表格项目变化时
        onSelectChange(key, value) {
            console.log(this.$data)

            // 能获取到选中的数组
            if (value.length) {
                this.hasSelect = true;
                let ids = []
                for (let i = 0, len = value.length; i < len; i++) {
                    this.selectedItems.push(value[i])
                    ids.push(value[i].id)
                }
                this.batch_id = ids.join(',')
            } else {
                this.hasSelect = false;
                this.batch_id = '';
            }
        },

        onCheck(article) {

        },

        onEdit(article) {

            if (article && article.id) {
                this.$router.push(`/admin/article/edit/${article.id}`)
            } else {
                this.$notify.warning({
                    content: 'id不见了'
                })
            }
        },

        // 删除
        onDelete(article) {
            let id;
            if (article === true) {
                // 批量删除
                id = this.batch_id;
            } else {
                id = article.id
            }
            this.$modal.confirm({
                content: '确认要删除吗?',
                onOk: this.okCb.bind(this, id)
            })
        },

        // String id
        okCb(id) {
            articleApi.remove({id: id})
                .then((result) => {
                    this.$notify.success({content: '删除成功'})
                    this.getList();
                })
                .catch((err) => {
                    this.$notify.danger({content: '删除失败'})
                })
        },

        // 分页
        // 可以添加路由变化
        pageCb(page) {
            this.page = page
            //this.getList()
        }
    },
    mounted(){
        this.getList();
    }
}
