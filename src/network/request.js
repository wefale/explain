import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    setTimeout: 5000
  })

  // 拦截发送的请求，将不必要的属性进行一些处理，之后再进行发送
  instance.interceptors.request.use(aaa => {
    console.log(aaa);
    return aaa;  // 记得这里需要将拦截到的请求进行一个返回，不然之后无法使用
  }, err => {
    console.log(err);
  })

  // 同样这里拦截，返回的响应内容，对返回来的信息进行一次过滤
  instance.interceptors.response.use(bbb => {
    return bbb.data;  //这里也不要忘了进行返回，由于这里bbb其实就是页面显示的内容，所以就不做log了
  }, err => {
    console.log(err);
  })

  // axios实例本身就是一个promise，所以不需要过多追加promise
  return instance(config)
}