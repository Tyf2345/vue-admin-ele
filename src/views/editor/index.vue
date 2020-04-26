<template>
  <div>
    <mavon-editor v-model="value" @change="updata" @save="updata" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    updata(value, a) {
      console.log(value, a);
    }
  }
};
</script>