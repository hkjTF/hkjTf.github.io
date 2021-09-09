<template>
  <div class="cover-page" @click="clickBg">
    <vue-particles
      color="#dedede"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="circle"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    />
    <div class="title">
      <h1>摸鱼师</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  methods: {
    clickBg() {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped lang="less">
.cover-page{
    width: 100%;
    height: 100%;
  /*background-image: url("../assets/cover.jpg") ;*/
}
.title{
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 300px;
}
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes caret {
  from {
    border-color: transparent;
  }
}

h1 {
  font: bold 200% Consolas, Monaco, monospace;
  color: #000;
  width: 6ch;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 2s steps(3),
  caret 1s steps(2) infinite;
}
</style>
