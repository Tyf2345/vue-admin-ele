<template>
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      this.count += 1;
    }
  }
};
</script>
<style lang="less" scoped>
li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #fff;
  margin: 10px;
  color: #7dbcfc;
}
</style>