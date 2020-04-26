<template>
  <div class="login-container">
    <div class="login-wrapper">
      <h3 class="title">用户登录</h3>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名 随便填"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="form.pwd" placeholder="请输入用户名 随便填"></el-input>
        </el-form-item>
        <el-form-item prop="captcha" class="captcha-wrapper">
          <el-input v-model="form.captcha" placeholder="请输入验证码" class="catpcha-text"></el-input>
          <div v-html="captcha" class="catpcha-btn" @click="getCaptcha()"></div>
        </el-form-item>
        <div class="submit-wrapper">
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { login } from "../../api/index";
export default {
  data() {
    return {
      form: {
        userName: "",
        pwd: "",
        captcha: ""
      },
      rules: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        pwd: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
      },
      captcha: ""
    };
  },
  watch: {
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo"
    }),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.setUserInfo({
            ...this.form,
            loginTime: new Date().toLocaleString()
          });
          let { data } = await this.$http.GET(login.index, this.form);
          if(data.status===0) {
          window.localStorage.setItem("token", data.text);
           this.$router.push("/");
          }
         
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async getCaptcha() {
      let { data } = await this.$http.GET(
        login.captcha + "?time=" + new Date()
      );
      this.captcha = data.text;
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  height: 100%;
  // background-color: #2d3a4b;
  background-color: #e7e7e7;
  .login-wrapper {
    position: fixed;
    top: 20%;
    left: 50%;
    width: 380px;
    transform: translateX(-50%);
    .title {
      text-align: center;
      color: #18c7dd;
      padding-bottom: 58px;
    }
    .captcha-wrapper {
      /deep/ .el-form-item__content {
        display: flex;
        .catpcha-text {
          flex: 1;
        }
        .catpcha-btn {
          display: flex;
          svg {
            height: 40px;
          }
        }
      }
    }
    .submit-wrapper {
      button {
        width: 100%;
      }
    }
    .tips {
      margin-top: 100px;
      color: red;
    }
  }
}
</style>