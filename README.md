# v-blog

> 想做一个博客很久了。寒假心血来潮想学Vue,还想看看一知半解的Node,可惜node的书不好找，对mongodb的操作也不熟。过程中借鉴了很多别人的代码，算是走了一遍基本的前后端流程。

###前端工具
* Vue2.0
* Vue-Router
* Vuex
* axios
* Vul-Blu (好看的UI组件库）

###后端工具
* express
* mongoose

###功能
* 文章和标签的增删改
* 支持markdown格式
* 标签分类筛选
* 基本的注册登录

### 环境
* Node.js v6
* mongoDB

###安装
``` bash
# 克隆仓库到本地
git clone

# 安装依赖
npm install

#全局安装supervisor
npm install -g supervisor
```
###启动
```
#启动mongodb
#在安装mongodb的bin文件夹下启动
mongod

# 启动后端服务器
#进入server文件夹
cd server
supervisor server

# 启动前端项目
#回到根目录
npm run dev
```

###收获
熟悉了框架的用法，尤其是数据库的操作（果然还是stackoverflow好用）。了解了jwt，前端拦截等概念。还有很多要学呐~

###todo
* 访问速度的优化
* 用户管理和权限
* 更多功能







