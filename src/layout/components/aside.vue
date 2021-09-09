<template>
  <div class="ma-aside">
    <div class="head-portrait">
      <el-image style="width: 100%;height: 100%" :src="require('@/assets/head.jpg')" />
    </div>
    <div>摸鱼师</div>
  </div>
</template>

<script>
export default {
  name: 'MyAside'
}
</script>

<style scoped lang="less">
.ma-aside{
  text-align: center;
    .head-portrait{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
    }
}
</style>
