<template>
  <div>
    <a v-bind:href="url">baidu</a>
    <img :src="imgUrl" />
    <img :src="localImg">
  </div>
</template>

  <script>
  import imgObj from '../assets/logo.png'
  export default {
  
    data() {
      return {
        url: 'http://www.baidu.com',
        imgUrl: "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
        localImg: imgObj
      }
    }
  }
  </script>