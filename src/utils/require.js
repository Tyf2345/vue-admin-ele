import axios from 'axios'
import Vue from 'vue'
import {
 Message
} from "element-ui";
// Vue.use(Message)
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://127.0.0.1:3001'
axios.defaults.baseURL = 'http://114.215.147.221:3001'
axios.interceptors.request.use(
  function(config) {
    var token = window.localStorage.getItem('token')
    if(token){
      config.headers.token = token
    }

      return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    const {status, msg } = response.data

    if(status === 1){
       Message.error(msg);
       return  response
    }
    if(status === 2){
      Message.error(msg);
      const { origin } = window.location
      window.location.href = `${origin}/#/login`
   }
   Message({
     type:'success',
     message:msg
   })
    // Do something with response data
    return response;

  },
  function(error) {
    // Notify({
    //   message: '网络不给力，请稍后再试',
    //   type:'danger',
    //   duration: '3000'
    // });
    // Do something with response error
    return Promise.reject(error);
  }
);

function $http() {}
$http.GET = function(url, params = {}) {
  return axios({
    method: "GET",
    url: url,
    params
  })
    .then(res => res)
    .catch(err => err);
};

$http.POST = function(url, data = {}) {
  return axios({
    method: "POST",
    url: url,
    data: data
  })
    .then(res => res)
    .catch(err => err);
};

$http.PUT = function(url, data = {}) {
  return axios({
    method: "PUT",
    url: url,
    data: data
  })
    .then(res => res)
    .catch(err => err);
};

$http.DELETE = function(url, data = {}) {
  return axios({
    method: "DELETE",
    url: url,
    data: data
  })
    .then(res => res)
    .catch(err => err);
};
export default $http;