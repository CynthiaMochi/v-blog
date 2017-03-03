<template>
    <div class="box">
        <h3 class="title is-3">欢迎登录</h3>
        <form method="POST" @submit.prevent="onSubmit">
            <p class="control">
              <input name="username"
                class="input is-primary" type="text" placeholder="username"
                v-validate
                data-vv-rules="required"
                v-model.trim="username" >
              <span class="help is-danger"
                v-show="errors.has('username')"
                v-text="errors.first('username')"></span>
            </p>
            <p class="control">
              <input name="password"
                class="input is-primary" type="password" placeholder="password"
                v-validate
                data-vv-rules="required"
                v-model.trim="password">
              <span class="help is-danger"
                v-show="errors.has('password')"
                v-text="errors.first('password')"></span>
            </p>
            <div class="control is-grouped">
              <p class="control">
                <button class="button is-primary" :disable="errors.any()">登录</button>
              </p>
              <p class="control">
                <button class="button" @click="toSignup">注册</button>
              </p>
            </div>
        </form>
    </div>
</template>

<script>
import Login from './login.js'
export default Login
</script>

<style>

</style>
