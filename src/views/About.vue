<script src="../../config/index.js"></script>
<template lang="html">
    <h1>{{txt}}</h1>
    <h2>{{name}}</h2>
</template>
<script>
export default {
    data() {
            return {
                txt: 'about me',
                name: ''
            };
        },
        route: {
            data(transition) {
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

            /**
             *
             * 此问题以解决
             * 原因:
             * W3C规范这样要求在跨域请求中，分为简单请求（get和部分post，post时content-type属于application/x-www-form-urlencoded，multipart/form-data，text/plain中的一种）和复杂请求。而复杂请求发出之前，就会出现一次options请求。
             *
             * 解决办法：在服务器端多做一次options方式提交的响应处理
             */

            // var resource = this.$resource('http://localhost:3000/home{/id}');
            // resource.delete({id: 1}).then((response) => {
            //       // success callback
            //   }, (response) => {
            //       // error callback
            //   });

            // console.log(this.$http);
            // get
            // this.$http.get('http://lixuanqi.com/api/v1/address/get_data.json').then((res)=>{
            //   console.dir(res.data);
            // }).catch((err)=>{
            //   console.dir(err);
            // });
            //
            // // post
            // this.$http.post('http://localhost:3000/home',{name:"tom"}).then((res)=>{
            //   console.dir(res);
            // }).catch((err)=>{
            //   console.dir(err);
            // });

            /**
             * get post可用
             * 但是put、delete均不能使用 ...暂时没找到问题
             */
            // this.$http.put('http://localhost:3000/home/1',{age:18},{method:"PUT"}).then((res)=>{
            //   console.log(res);
            // },(err)=>{
            //   console.log(err);
            // });
            //

            /**
             * 使用jQuery测试ajax请求
             * 依然无法解决put delete的问题
             */
            // $.ajax({
            //   type:"get",
            //   url:"http://lixuanqi.com/api/v1/address/get_data.json",
            //   success:function(res){
            //     console.log(res);
            //   },
            //   erroe:function(err){
            //     console.log(err);
            //   }
            // })
            //
            // $.ajax({
            //   type:"post",
            //   url:"http://localhost:3000/home",
            //   data:{name:"Jerry"},
            //   success:function(res){
            //     console.log(res);
            //   },
            //   erroe:function(err){
            //     console.log(err);
            //   }
            // })
            //
            // $.ajax({
            //   type:"put",
            //   url:"http://localhost:3000/home/1",
            //   data:{name:"Jerry"},
            //   success:function(res){
            //     console.log(res);
            //   },
            //   erroe:function(err){
            //     console.log(err);
            //   }
            // })

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
