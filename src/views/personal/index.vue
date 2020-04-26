<template>
  <div>
    <h3>用户信息</h3>
    <el-row>
      <el-col :offset="1" :span="8">
        <el-col class="user-item bd6 mt12">
          <el-col :offset="1" :span="5">用户名 :</el-col>
          <el-col :offset="1" :span="9">{{userInfo.userName}}</el-col>
        </el-col>
        <el-col class="user-item bd6 mt12">
          <el-col :offset="1" :span="5">密码 :</el-col>
          <el-col :offset="1" :span="9">{{userInfo.pwd}}</el-col>
        </el-col>
        <el-col class="user-item bd6 mt12">
          <el-col :offset="1" :span="5">登陆时间 :</el-col>
          <el-col :offset="1" :span="9">{{userInfo.loginTime}}</el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
  data() {
    return {
      value: ''
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },

};
</script>
<style lang="less" scoped>
.user-item {
  background: #fff;
  padding-left: 20px;
  line-height: 3.5;
}
</style>