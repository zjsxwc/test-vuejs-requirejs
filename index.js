/*
 * require.js settings
 */

requirejs.config({
  paths: {
    'vue': [
      'bower_components/vue/dist/vue.min'
    ],
    'vue-validator': [
      'bower_components/vue-validator/dist/vue-validator'
    ]
  }
})


/**
 * entry point
 */

define(['vue', 'vue-validator'], function (Vue,validator) {
  // console.log(f)
  // console.log(h)
  // var Vue = require('vue')
  // console.log(Vue)
  // var validator = require('vue-validator')
  // console.log(validator)
  Vue.use(validator)

  var form = new Vue({
    validator: {
      validates: {
        email: function (val) {
          return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
        }
      }
    },
    data: {
      name: '',
      age: 18,
      email: '',
      zip: '11112222'
    }
  }).$mount('#user-form')
})
