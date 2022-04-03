<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

import storage from './storage/index'
// import axios from 'axios'
//import jsonp from 'jsonp'
export default {
  name: 'App',
  data(){
    return{
      age:30,
      data:''
    }
  },
  mounted(){
    //storage.setItem('a',1);
    //storage.setItem('abc',{a:1},'user');
   //storage.clear('a');
//    let url='/search/hotwords';
//    jsonp(url,(err,res)=>{
// let result=res;
// this.data=result;
//    })
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
