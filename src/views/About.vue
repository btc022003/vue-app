<template lang="html">
  <h1>{{txt}}</h1>
  <h2>{{name}}</h2>
</template>

<script>
export default {
  data() {
    return {
      txt:'about me',
      name:''
    };
  },
  route:{
    data(transition){
      // 此处可以用作路由参数的获取
      // transition.to.params 路由中配置的参数
      // transition.to.query  url传统方式传递的参数
      console.dir(transition);
      console.dir(transition.to.query);
      this.name = transition.to.query.name;
    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
