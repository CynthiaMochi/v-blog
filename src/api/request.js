import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const back_instance = axios.create()
const front_instance = axios.create()


back_instance.defaults.headers.post['Content-Type'] = 'application/json'

//front_instance.interceptors.request

export default {
    user: {
        // 关于token处理后面添加
        // 注册
        signin(data) {
            return axios.post('/api/signin', data)
        },
        //
        login(data) {
            return axios.post('/api/login', data)
        },

        select(data) {
            back_instance.get('/api/user/select', data)
        }
    },
    article: {
        //获取文章要分前端和后端获取
        //后端有分页，前端无限滚动
        // 获取文章列表
        // 如果有参数需要再获取数量
        getListBack(data) {
            console.log(data)
            return back_instance.post('/api/article/lists/back', data)
        },

        getListFront(data) {
            return front_instance.get('/api/article/lists/front', data)
        },

        //需要标签名
        getByTag(params) {
            return front_instance.post('/api/article/tags', params)
        },

        // 是否真的需要这么多？？
        create(data) {
            return back_instance.post('/api/article/create', data)
        },

        remove(data) {
            return back_instance.post('/api/article/delete', data)
        },

        find(data) {
            return front_instance.get('/api/article/find', data)
        }
    },
    tag: {
        create(data) {
            return back_instance.post('/api/tags/create', data)
        },

        remove(data) {
            return back_instance.post('/api/tags/delete', data)
        }
    }
}
