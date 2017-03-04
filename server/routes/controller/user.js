const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  create: function (data) {
    // 可能用户存在
    return User.findOne({username: data.username})
        .then(result => {
          console.log('con  '+result)
          if(result) {
            return {err: true,
                    message: '用户已存在'}
          } else {
            console.log(data)
            let user = new User(data)

            return user.save()
          }
        })
        .catch(err => {
          console.log(err)
        })
  },

  login: function(data) {
    console.log(data)
    return User.findOne({username: data.username})
                .exec()
  }
}


