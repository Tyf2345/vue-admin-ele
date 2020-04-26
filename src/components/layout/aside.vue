<template>
  <el-aside :width="settings.isCollapse?'54px':'200px'" :style="{backgroundColor: backgroundColor}">
    <el-menu
      router
      unique-opened
      :collapse="settings.isCollapse"
      :collapse-transition="false"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
    >
      <div v-for="item of routerArr" :key="item.path">
        <el-submenu v-if="item.child" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="subItem of item.child" :index="subItem.path" :key="subItem.path">
              <i class="el-icon-setting"></i>
              <span slot="title">{{subItem.name}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :route="item.path" :index="item.path">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    routerArr: Array,
    settings: Object
  },
  computed: {
    ...mapState("settings",['backgroundColor','textColor','activeTextColor'])
  }
};
</script>
<style lang="less" scoped>
/deep/.el-aside {
  line-height: 200px;
  transition: width .3s linear;
}
/deep/.el-menu{
  border-right:none;
}
</style>