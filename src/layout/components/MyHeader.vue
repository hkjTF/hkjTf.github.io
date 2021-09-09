<template>
  <div class="my-header">
    <el-button v-for="item in items" :key="item.label" size="small" :type="item.type" plain>{{ item.label }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      items: []
    }
  },
  computed: {
    routes() {
      const data = this.$router.options.routes
      return data.filter(item => {
        return !item.hidden
      })
    }
  },
  mounted() {
    // this.items =
    this.routes.forEach(item => {
      if (item.component.name === 'Layout') {
        item.children.forEach(json => {
          console.log(json)
          this.items.push({
            type: json.meta.type,
            label: json.meta.title,
            pathName: json.name
          })
        })
      }
    })
    console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
.my-header{
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
