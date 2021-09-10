## html中引用自定义vue组件

组件示例

关键：`module.exports`

```javascript

<template>
    <div class="hello">
        Hello {{who}}
    </div>
</template>
 
<script>
    module.exports={
        data: function () {
            return {
                who: 'world'
            }
        }
    }
</script>
 
<style scoped>
    .hello {
        padding: .5em;
        font-size: 2em;
        background-color: #fcf;
    }
</style>
```

引用示例

关键点：httpVueLoader：https://unpkg.com/http-vue-loader    

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue File</title>
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.js"></script>
    <script src="https://unpkg.com/http-vue-loader"></script>
    <style>
        #app{
            margin: 1em;
            font-size: 1.5em;
        }
    </style>
</head>
<body>
<div id="my-app">
    <my-component></my-component>
</div>
<script>
    new Vue({
        el:"#my-app",
        components:{
            'my-component':httpVueLoader('hello.vue')
        }
    })
</script>
</body>
</html>
```

