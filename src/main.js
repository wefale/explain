import Vue from 'vue'
import App from './App'
import router from './router'

// 引用axios框架，因为他不是vue自带的
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// 1.axios的基本使用
/*axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接，而post请求不使用params，而是请求体 data
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res.data);
})*/

// 2.axios的并发请求 
/*axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }),
  axios({
    url: 'http://123.207.32.32:8000/home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })
]).then(
  // results => { console.log(results) }
  axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  })
)*/

// 3.使用全局的axios及其相应的配置在进行网络请求
/*axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([
  axios({
    url: '/home/multidata'
  }),
  axios({
    url: '/home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })
]).then(
  // results => { console.log(results) }
  axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  })
)*/