<template>
  <div class="icon-wrapper cur-pointer">
    <div class="icon-item bdr6 mb12" v-for=" (item,i) of iconArr" :key='i'>
      <i :class="'icon-i '+item.icon"></i>
      <span>{{item.icon}}</span>
    </div>

  </div>
</template>
<script>
import { icon} from '../../api'
export default {
  data() {
    return {
      iconArr: []
    }
  },
  created() {
    this.getCardData()
  },
  methods:{
    async getCardData() {
      let {data} = await this.$http.GET(icon.index)
      this.iconArr = data.data
    }
  }
}
</script>
<style lang="less" scoped>
.icon-wrapper{
  display: flex;
   flex-wrap: wrap;
}
.icon-item{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 15.4%;
  height: 128px;
  margin-right: 3px;
  box-sizing: border-box;
  border:1px solid #b3c0d1;
   transition: width .3s ease;
  &:hover{
    width: 27%;
    color: royalblue;
   
  }
  .icon-i{
    font-size: 32px;
  }
}
</style>