import Vue from "vue";
import Router from "vue-router";

import RouterConfig from "./config";
Vue.use(Router);

var MockRouterArr = [
  {
    path: "/layout/home",
    name: "首页",
    child: null
  },
  {
    path: "/layout/icon",
    name: "图标",
    child: null
  },
  {path:'/layput/editor', name:'富文本', child: null},
  {
    path: "/layout/table",
    name: "表格",
    child: null
  },

  { path: "/layout/collapse", name: "折叠面板", child: null },
  { path: "/layout/InfiniteScroll", name: "无限滚动", child: null },
  {
    path: "/charts",
    name: "图表",
    child: [
      {
        path: "/charts/line",
        name: "折线图",
        child: null
      },
      {
        path: "/charts/bar",
        name: "柱状图",
        child: null
      },
      {
        path: "/charts/pie",
        name: "饼图",
        child: null
      },
      {
        path: "/charts/scatter",
        name: "散点图",
        child: null
      },
      {
        path: "/charts/radar",
        name: "雷达图",
        child: null
      },
      {
        path: "/charts/heatmap",
        name: "热力图",
        child: null
      }
    ]
  },
  {
    path: "/layout/settings",
    name: "设置",
    child: null
  },
  {
    path: "*",
    name: "404",
    child: null
  },
  { path: "/layput/personal", name: "个人中心", child: null }
];
export { MockRouterArr };
const router = new Router({
  routes: [...RouterConfig]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next();
  }
  const vuex = JSON.parse(localStorage.getItem("vuex"));
  if (vuex && vuex.userInfo && Object.keys(vuex.userInfo)) {
    return next();
  }
  next("/login");
});
export default router;
