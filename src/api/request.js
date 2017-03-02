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
          return back_instance.get('/api/user/select', data)
        }
      },
      article: {
        //获取文章要分前端和后端获取
        //后端有分页，前端无限滚动
        // 获取文章列表
        // 如果有参数需要再获取数量
        getListBack(data) {
          console.log(data)
          return back_instance.post('/api/article/list/back', data)
        },

        // 可以根据Tag筛选
        getListFront(data) {
          return front_instance.post('/api/article/list/front', data)
        },

        // 是否真的需要这么多？？
        create(data) {
          return back_instance.post('/api/article/create', data)
        },

        remove(data) {
          console.log(data)
          return back_instance.post('/api/article/remove', data)
        },

        findFront(data) {
          return front_instance.get('/api/article/', {
            params: data
          })
        },

        findBack(data) {
          console.log(data)
          return back_instance.get('/api/article/', {
            params: data
          })
        }

      },
      tag: {
        create(data) {
          return back_instance.post('/api/tag/create', data)
        },

        remove(data) {
          console.log(data)
          return back_instance.post('/api/tag/remove', data)
        },

        getListBack(data) {
          return back_instance.post('/api/tag/list/back', data)
        },

        // 应该是一次性获取标签
        getListFront(data) {
          return back_instance.post('/api/tag/list/front')
        },

        getList() {
          return back_instance.post('/api/tag/list')
        }

    }
}
