import uni_request from './uni_request.js'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

const request = (options) => {
  const {
    url,
    header,
    ...options
  } = options
  const defHeader = {
    'content-type': 'application/x-www-form-urlencoded'
  }
  header && Object.assign(defHeader, header)
  return uni_request({
    url,
    defHeader,
    timeout: 30000,
    ...options
  })
}

request.interceptors.request.use(async (config, ...args) => {
  const token = uni.getStorageSync('token');
  if (token) {
    config.header.Authorization = 'Bearer ' + token // 修改请求头
  }
  // config.body.test = 'test' // 修改请求体
  return config
})

request.interceptors.response.use((response, ...args) => { // 响应拦截器（可以设置多个, 同时可以也可以使用异步方法）
  const {
    data: res,
    url
  } = response // args[0] method args[1] url args[3] data
  const { data: resData} = res
  if (res.status === 401 || resData.code === '401') {
    const isGetToken = url.indexOf('getToken') !== -1;
    const res = !isGetToken &&
      (await getToken({
        headers: {
          Authorization: getStore({
            name: 'refresh_token'
          }),
        },
      }));
    if (resData.success) {
      const {
        data: info
      } = res
      setStore({
        name: 'access_token',
        content: info.access_token,
      });
      setStore({
        name: 'refresh_token',
        content: info.refresh_token,
      });
      message.warning('请重新操作');
    } else {
      message.warning('token已经过期了，请重新登录');
      removeStore({
        name: 'access_token'
      });
      removeStore({
        name: 'refresh_token'
      });
      history.replace({
        pathname: '/login',
      });
    }
    return false;
  }
  if (!data.success) {
    message.warning(data.message);
  }
  return response
})

request. = async (...args) => { // 请求失败统一处理方法（可以也可以使用异步方法）
  const res = args[3]
  // console.log('网络请求失败了', `url为${args[1]}`)
  uni.showToast({
    title: codeMessage[res.code]
  })
}

export default request
