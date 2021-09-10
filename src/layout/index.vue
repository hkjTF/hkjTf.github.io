<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <my-aside />
      </el-aside>
      <el-container>
        <el-header style="border-bottom: 1px solid #eaecef;">
          <my-header />
        </el-header>
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyAside from './components/aside'
import MyHeader from './components/MyHeader'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: { AppMain, MyHeader, MyAside }
}
</script>

<style scoped>
.el-main{
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
