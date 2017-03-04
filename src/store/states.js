export default {
    token: isLoggedIn() || null,
}

function isLoggedIn() {
    let token = localStorage.getItem('jwt');

    if (token) {
      // WindowBase64.atob() 函数用来解码一个已经被base-64编码过的数据。
        const payload = JSON.parse(window.atob(token.split('.')[1]))
      if (payload.exp > Date.now() / 1000) {
          return token;
      }
    } else {
        return false;
    }
}
