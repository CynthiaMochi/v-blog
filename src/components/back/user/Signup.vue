<template>
    <div class="box">
        <h3 class="title is-3">欢迎注册</h3>
        <form method="POST" @submit.prevent="onSubmit">
            <p class="control">
              <input name="username" class="input is-primary" type="text" placeholder="username"
              v-model.trim="username"
              v-validate
               data-vv-rules="required|min:4|max:10"
              :class="{'is-danger': errors.has('username') }" >
              <span class="help is-danger"
                v-show="errors.has('username')">{{ errors.first('username') }}</span>
            </p>
            <p class="control">
              <input name="password" class="input is-primary" type="password" placeholder="password"
              v-model.trim="password"
              v-validate
              data-vv-rules="required|min:6|max:20|alpha_dash"
              :class="{'is-danger': errors.has('password') }">
              <span class="help is-danger"
                v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </p>
            <p class="control">
              <input name="passwordCheck" class="input is-primary" type="password" placeholder="password again"
              v-model.trim="passwordCheck"
              v-validate
              data-vv-rules="required|min:6|max:20|alpha_dash|confirmed:password"
              :class="{'is-danger': errors.has('passwordCheck') }">
              <span class="help is-danger"
                v-show="errors.has('passwordCheck')">{{ errors.first('passwordCheck') }}</span>
            </p>
            <div class="control is-grouped">
              <p class="control">
                <button class="button is-primary" type="submit">注册</button>
              </p>
              <p class="control">
                <button class="button" @click="toLogin">登录</button>
              </p>
            </div>
        </form>
    </div>
</template>

<script>
import Signup from './signup.js'
export default Signup
</script>

<style>

</style>
