<template>
  <div class="markdown-body">
    <readme />
  </div>
</template>

<script>
import readme from '../markdownFile/html中引用自定义vue组件.md'
// const componentsContext = require.context('../markdownFile', true, /\.md$/)
// const myCom = {}
// componentsContext.keys().forEach(component => {
//   const componentConfig = componentsContext(component)
//   // 兼容 import export 和 require module.export 两种规范
//   const ctrl = componentConfig.default || componentConfig
//   console.log(ctrl)
//   myCom.mayVueMd = ctrl
//   // Vue.component(ctrl.name, ctrl);
// })
// console.log(myCom)
// console.log(componentsContext)
export default {
  name: 'MdTemplate',
  components: {
    readme
  }
}
</script>

<style scoped>

</style>
