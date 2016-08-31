<template lang="html">
  <h1>{{txt}}</h1>
  <h2>{{name}}</h2>
</template>

<script>
export default {
  data(){
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
  ready() {
    // console.log(this.$http);
    // get
    this.$http.get('http://lixuanqi.com/api/v1/address/get_data.json').then((res)=>{
      console.dir(res.data);
    }).catch((err)=>{
      console.dir(err);
    });

    // post
    this.$http.post('http://localhost:3000/home',{name:"tom"}).then((res)=>{
      console.dir(res);
    }).catch((err)=>{
      console.dir(err);
    });

    /**
     * get post可用
     * 但是put、delete均不能使用 ...暂时没找到问题
     */
    // this.$http.put('http://localhost:3000/home/1',{age:18},{method:"PUT"}).then((res)=>{
    //   console.log(res);
    // },(err)=>{
    //   console.log(err);
    // });

    console.log('ready');
  },
  attached() {
    console.log('attached');
  },
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
