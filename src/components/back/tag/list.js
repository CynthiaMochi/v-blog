import api from '../../../api/request.js';

let tagApi = api.tag
export default {
    name: 'tag_list',
    data() {
        return {
            tag_list: [],
            batch_id: '', // 批量删除时，用逗号隔开多个id字符
             hasSelect: false,// 是否选择了
            pagination: {
                page: 1,
                total: 0,
                limit: 10
            },
            modal: {
                isShowCreate: false,
            },
            editing: ''

        }
    },
    methods: {

        onCreate() {
            // 怎么把数据给弹框
            // ，用ref
            this.modal.isShowCreate = true;

        },

        onOkEdit() {

            let name = this.$refs.editInput.value,
                data = this.editing,
                tag = {},
                vm = this;
            if (name) {
                tag = data
                    ? {id: data._id, name: name}
                    : {name: name}

                tagApi.create(tag)
                    .then((res) => {

                      if (res.status == 200) {
                        console.log(res)
                        vm.$notify.success({content: res.data.message})
                      }
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                this.editing = ''
                this.getList()

            } else {
                this.editing = ''
                vm.$notify.warning({content: '输入不能为空'})
            }


        },

        onCancel() {
            this.editing = ''
        },

        onEdit(tag) {
            this.editing = Object.assign({}, tag);
            this.modal.isShowCreate = true;
        },

        onCheck(tag) {
            let content = `标签名'${tag.name}'的文章数为 ${tag.articles.length}篇`
            let m = this.$modal.open({
                content: content,
                onOk: () => {
                    m.close()
                }
            })
        },

        getList() {
            tagApi.getListBack({
                page: this.pagination.page,
                limit: this.pagination.limit
            })
            .then(({data: {tagList, total}}) => {
                // 为什么要setTimeout
                let vm = this;
                this.tag_list = tagList.map(tag => {
                    return {isDeletable: vm.isDeletable(tag),
                            ...tag}
                })

                this.pagination.total = total;
            })
        },

        onTableChange(page) {
          console.log(page)
          this.pagination.page = page.pagination.current;
          this.getList();
        },
        // 选择表格项目变化时
        onSelectChange(key, value) {

            if (value.length) {
                this.hasSelect = true;
                let ids = []
                for (let i = 0, len = value.length; i < len; i++) {
                    if (value[i].isDeletable) {
                        ids.push(value[i]._id)
                    } else {
                        this.$notify.warning({content: `标签'${value[i].name}'文章数不为0，不能删除`})
                      }
                }
                this.batch_id = ids.join(',')
            } else {
                this.hasSelect = false;
                this.batch_id = '';
            }
        },

        // 删除
        // 如果文章数不为0就不能删除
        onDelete(tag) {
            let id;
            if (tag === true) {
                // 批量删除
                if (this.batch_id) {
                    id = this.batch_id;
                } else {
                    return;
                }
            } else {
                id = tag._id
            }
            this.$modal.confirm({
                content: '确认要删除吗?',
                onOk: this.okCb.bind(this, id)
            })

        },

        isDeletable(tag) {
            return tag.articles.length === 0;
        },

        okCb(id) {
            tagApi.remove({id: id})
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
