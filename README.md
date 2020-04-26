# vue-admin-ele 

### 前言
  一个以Nodejs为后台的开箱即用的Vue+Element后台管理系统，这个系统一共有十六个页面， 包括登录/登出、首页、图表，个性化设置、个人中心、富文本等，技术的话，涉及到了Vue的方方面面，是一个完整的流程。目前这个项目前端部分已经写完了，正在进行一些性能的优化和代码的详细注释。
### demo: [传送阵](http://114.215.147.221:8087)
### 技术栈
  ```js
    Vue + Element + Axios  + vue-router + Vuex + vuex-persistedstate + ES6/7 + Vue-color + Less + Echarts + mavon-editor
  ```

  ### 项目运行
  ```js
  git clone https://github.com/Tyf2345/vue-admin-ele.git
  cd vue-admin-ele
  yarn install
  yarn dev
  ```

  ### 关于接口数据

   - 此项目的所有接口数据都来源于配套的后台系统，[后台项目传送地址](https://github.com/Tyf2345/vue-ele-back)

   - 如果想体验前后台同时开发，可以下载后台系统

### 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提

### 目标功能
- [x] 登录/登出 -- 完成
- [x] 首页 -- 完成
- [x] icon -- 完成
- [x] table -- 完成
- [x] 图表 -- 完成
- [x] 富文本 -- 完成
- [x] 设置 -- 完成
- [x] 个人中心 -- 完成

### 结构目录

├── build                                     // webpack配置文件 <br/>
├── config                                      // 项目打包路径 <br/>
├── src                                         // 源码目录 <br/>
│   ├── api                                     // 请求后台api路径 <br/>
│   ├── assets                                  // 公共资源， 公共css <br/>
│   ├── components                              // 公共组件 <br/>
│   ├── vuex                                    // vuex状态管理 <br/>
│   ├── router                                  // 路由相关 <br/>
│   ├── utils                                   // 工具类， axios封装 <br/>
│   ├── views                                   // 页面相关 <br/>
│   ├── App.vue                                 // 页面入口文件 <br/>
│   ├── main.js                                 // 程序入口文件，加载各种公共组件 <br/>
├── index.html                                  // 入口html文件 <br/>

