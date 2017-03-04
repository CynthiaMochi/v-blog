<template>
  <div class="system-back">
    <div class="box login">
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
                <button type="button" class="button" @click="toSignup">注册</button>
              </p>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import Login from './login.js'
export default Login
</script>

<style scoped>

  .system-back {
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/loginback.jpg);
    background-size: cover;
  }
  .login {
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 30rem;
    max-height: 20rem;
  }
</style>
