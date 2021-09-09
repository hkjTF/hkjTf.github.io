<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.fixed-header+.app-main {
  height: calc(100vh - 50px);
  margin-top: 50px;
}
</style>
