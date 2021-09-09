<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <my-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyAside from './components/aside'
export default {
  name: 'Layout',
  components: { MyAside }
}
</script>

<style scoped>

</style>
