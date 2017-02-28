<template>
    <div class="box">
        <h3 class="title is-3">欢迎登录后台管理系统</h3>
        <form method="POST" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <p class="control">
              <input class="input is-primary" type="text" placeholder="username"
              v-model="form.username" >
              <span class="help is-danger"
                v-if="form.errors.has('username')"
                v-text="form.errors.get('username')"></span>
            </p>
            <p class="control">
              <input class="input is-primary" type="text" placeholder="password"
              v-model="form.password">
              <span class="help is-danger"
                v-if="form.errors.has('password')"
                v-text="form.errors.get('password')"></span>
            </p>
            <div class="control is-grouped">
              <p class="control">
                <button class="button is-primary" :disable="form.errors.any()">登录</button>
              </p>
              <p class="control">
                <button class="button" @click="toSignup">注册</button>
              </p>
            </div>
        </form>
    </div>
</template>

<script>
import { Form } from '../util.js'
export default {
    data() {
        return {
            form: new Form({
                username: '',
                password: ''
            }) 
        }
    },
    methods: {
        onSubmit() {
          console.log('提交')
          // this.form.post('/api/login')
          //   .then(response => alert('登陆成功'))
        },
        toSignup() {
            // this?
            this.$router.push({
                path: '/signup'
            })
        }
    }
}
</script>

<style>
    
</style>