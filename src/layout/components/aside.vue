<template>
  <div class="ma-aside">
    <div class="head-portrait">
      <el-image class="img-style" :src="require('@/assets/head.jpg')" />
      <div class="head-title">摸鱼师</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAside'
}
</script>

<style scoped lang="less">
.ma-aside{
  height: 100vh;
  background: #f8fafc;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
    .head-portrait{
      width: 100%;
      height: 100px;
      text-align: center;
      .img-style{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
      }
      .head-title{
        font-weight: bold;
        font-size: 16px;
        padding-top: 10px;
      }
    }
}
</style>
