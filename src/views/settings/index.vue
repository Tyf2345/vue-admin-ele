<template>
  <div class="settings-container">
    <h3>换肤</h3>
    <el-row>
      <el-col :offset="1" :span="6">
        <el-col>
          <span>侧边栏背景色</span>
          <div
            class="aside-skin mt12 mb12 bd6 cur-pointer"
            :style="{backgroundColor: backgroundColor}"
            @click="handleClickColorBtn(backgroundColor,'backgroundColor')"
          ></div>
        </el-col>
        <el-col>
          <span>侧边栏文字颜色</span>
          <div
            class="aside-skin mt12 mb12 bd6 cur-pointer"
            :style="{backgroundColor: textColor}"
            @click="handleClickColorBtn(textColor,'textColor')"
          ></div>
        </el-col>
        <el-col>
          <span>侧边栏文字高亮颜色</span>
          <div
            class="aside-skin mt12 mb12 bd6 cur-pointer"
            :style="{backgroundColor: activeTextColor}"
            @click="handleClickColorBtn(activeTextColor,'activeTextColor')"
          ></div>
        </el-col>
        <el-col>
          <span>头部背景色</span>
          <div
            class="aside-skin mt12 mb12 bd6 cur-pointer"
            :style="{backgroundColor: headerBackgroundColor}"
            @click="handleClickColorBtn(headerBackgroundColor,'headerBackgroundColor')"
          ></div>
        </el-col>
      </el-col>
      <el-col :span="6">
        <div class="color-picker" v-if="active">
          <sketch-picker :value="color" @input="handleUpdateValue"></sketch-picker>
          <div class="text-right">
            <el-button type="primary" size="mini" @click="confirmUpData">确定</el-button>
            <el-button plain size="mini" @click="cancelUpData">取消</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <h3 class="mb12 mt12">导航页类型</h3>
    <el-row>
      <el-col :offset="1" :span="6">
        <el-dropdown @command="setNavType">
          <el-button type="primary" size="medium">
            {{type === 'tag'?'标签页类型导航':'面包屑类型导航'}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="tag">标签页类型导航</el-dropdown-item>
            <el-dropdown-item command="bread">面包屑类型导航</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Sketch } from "vue-color";
export default {
  components: {
    "sketch-picker": Sketch
  },
  data() {
    return {
      color: "",
      active: false,
      colorKey: "", //
      ruleObj: {},
      a: this.headerBackgroundColor
    };
  },
  computed: {
    ...mapState("settings", [
      "backgroundColor",
      "textColor",
      "activeTextColor",
      "headerBackgroundColor"
    ]),
    ...mapState("navType", ["type"])
  },
  methods: {
    // handleClickColorBtn 点击颜色选择框
    ...mapActions("settings", {
      updateValue: "getUpdateValue"
    }),
    ...mapActions("navType", ["setNavType"]),
    handleClickColorBtn(color, colorKey) {
      if (this.active) {
        if (colorKey === this.colorKey) {
          this.updateValue({ color: this.color, colorKey });

          this.active = !this.active;
        } else {
          this.updateValue({ color: this.color, colorKey: this.colorKey });
          this.active = true;
        }
      } else {
        this.active = !this.active;
      }
      this.color = color;
      this.colorKey = colorKey;
    },
    // 确定
    confirmUpData() {
      this.active = false;
    },
    // 取消
    cancelUpData() {
      const { color, colorKey } = this;
      this.updateValue({ color, colorKey });
      this.active = false;
    },
    // 拾色时触发
    handleUpdateValue(value) {
      this.updateValue({ color: value.hex, colorKey: this.colorKey });
    }
  }
};
</script>
<style lang="less" scoped>
.aside-skin {
  height: 30px;
}
.color-picker {
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);
  padding: 10px;
  /deep/.vc-sketch {
    box-shadow: none;
    padding: 0;
  }
}
</style>