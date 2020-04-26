<template>
  <div class="home-container">
    <el-container style="height: 100%;">
      <Aside :routerArr="routerArr" :settings="settings"></Aside>
      <el-container>
        <el-header :style="{backgroundColor:bgc}">
          <i
            :class="settings.isCollapse?'collapse-icon el-icon-s-unfold':'collapse-icon el-icon-s-fold'"
            @click="settings.isCollapse = !settings.isCollapse"
          >后台管理系统</i>
          <div class="settings-wrapper">
            <el-dropdown @command="handleClickSettings">
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="personal">个人中心</el-dropdown-item>
                <!-- <router-link to='' tag='el-dropdown-item'>设置</router-link> -->
                <el-dropdown-item command="settings">设置</el-dropdown-item>
                <el-dropdown-item command="loginOut">登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <img
              class="user-img"
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3439301883,4183231930&fm=26&gp=0.jpg"
              alt
            />
          </div>
        </el-header>
        <el-main>
          <div class="tag-wrapper mb12">
            <template v-if="navType === 'tag'">
              <el-tag
                v-for="(tag,i) in tags"
                :key="tag.name"
                closable
                :type="tag.type"
                class="tag-item"
                @click="handleClickTag(tag,i)"
                @close="handleCloseTag(i)"
              >{{tag.name}}</el-tag>
            </template>
            <template v-else>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item of newRouter" :key="item.id">{{item.name}}</el-breadcrumb-item>
              </el-breadcrumb>
            </template>
          </div>
          <transition enter-active-class="animated bounceInRight">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { MockRouterArr } from "../../router";
import { login } from '../../api'
import Aside from "../../components/layout/aside";
export default {
  components: {
    Aside
  },
  data() {
    return {
      routerArr: MockRouterArr,
      settings: {
        isCollapse: false
      },
      tags: []
    };
  },
  computed: {
    newRouter() {
      let matchedRoute = this.$route.matched;
      let newRouter = matchedRoute.filter(item => item.path !== "/layout/home");
      return newRouter;
    },
    ...mapState("settings", {
      bgc: "headerBackgroundColor"
    }),
    ...mapState("navType", {
      navType: "type"
    })
  },
  created() {
    const { name, path } = this.$route;
    this.tags = [{ name, path, type: "success" }];
  },
  beforeUpdate() {
    let { $route } = this;
    const { name, path } = $route;
    let newTags = [];
    var flag = false;
    newTags = this.tags.map((item, i) => {
      let type = "info";
      if (item.path === path) {
        type = "success";
        flag = true;
      }
      return {
        name: item.name,
        path: item.path,
        type
      };
    });
    flag === false ? newTags.push({ name, path, type: "success" }) : "";
    this.tags = newTags;
    // this.$router.push(path)
  },
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo"
    }),
    // 点击tag
    handleClickTag(tag, idx) {
      let newPath;
      this.tags = this.tags.map((item, i) => {
        const { name, path, type } = item;
        let newType;
        if (idx === i) {
          newPath = path;
          newType = "success";
        } else {
          newType = "info";
        }
        return {
          name,
          path,
          type: newType
        };
      });
      this.$router.push(newPath);
    },
    // 关闭 tag
    handleCloseTag(i) {
      let newTag = [...this.tags];

      newTag.splice(i, 1);

      if (newTag.length === 0) {
        newTag = [{ name: "首页", path: "/layout/home", type: "success" }];
      }

      this.tags = newTag;
      this.$router.push(newTag[newTag.length - 1].path);
    },
    // 点击设置
   async handleClickSettings(value) {
      switch (value) {
        case "settings":
          this.$router.push("/layout/settings");
          break;
        case "personal":
          this.$router.push("/layput/personal");
          break;
        case "loginOut":
          this.setUserInfo({});
          await this.$http.GET(login.loginOut)
          this.$router.push("/login");
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang='less'>
@curPit: pointer;
.home-container {
  height: 100%;
}
.el-header {
  text-align: right;
  font-size: 12px;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  .collapse-icon {
    align-items: center;
    display: flex;
    font-size: 20px;
    &:hover {
      cursor: @curPit;
    }
  }
  .el-icon-setting {
    font-size: 22px;
    vertical-align: middle;
  }
  .settings-wrapper {
    flex: 1;
  }
  .user-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    vertical-align: middle;
    animation: myrotate 8s linear infinite;
  }
}
@keyframes myrotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.el-aside {
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  .tag-wrapper {
    display: flex;
    padding-bottom: 15px;
    border-bottom: 2px solid #b3c0d1;
    .tag-item {
      margin-right: 15px;

      &:hover {
        cursor: @curPit;
      }
    }
  }
}
</style>