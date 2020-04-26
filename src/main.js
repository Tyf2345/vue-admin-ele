// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from './store'
import animate from 'animate.css'
import echarts from 'echarts';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import $http from './utils/require'
import {
  Button,
  Form,
  FormItem,
  Input,
  Switch,
  Container,
  Aside,
  Menu,
  Main,
  Tag,
  Row,
  Col,
  Table,
  TableColumn,
  Pagination,
  Submenu,
  MenuItem,
  Header,
  Collapse,
  CollapseItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MenuItemGroup,
  Breadcrumb,
  InfiniteScroll,
  BreadcrumbItem
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(Tag);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Switch);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Header);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(TableColumn);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(MenuItemGroup);
Vue.use(InfiniteScroll);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem)

Vue.use(mavonEditor)
Vue.use(animate)
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = $http
/* eslint-disable no-new */


new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
