```
filters过滤器的使用
```

过滤器顾名思义就是需要将后端传过来的数据 “过滤”一哈显示在网页上

场景一：后端传的时间：2019-11-19T04:32:46Z
前端显示在页面上肯定要处理（过滤）

```
 filters: {

  format(val) {

   return moment(val).format("YYYY-MM-DD HH:SS");

  }

 },

 methods:{ },
```

在页面中调用 format 

 

  <div>{{this.detailList.update_time|format}}</div>

说明：this.detailList.update_time是参数。

总结：filters里面的函数会调用两次，一次是在mounted之前，传值undefined，页面显示当前时间。另一次是在mounted之后，传值2019-11-19T04:32:46Z，显示处理过的时间。

所以在页面上会看到时间一下子就渲染了，比其他数据快。过了1秒后，数据会更新为需要的时间。

 

场景二：后端一次传来相互关联两个数组，前端需要自己el-select对应的数据

 

```
  methods:{

​    //change所属服务 获得事件类型

​    serviceChange(selected) {

​     const filter = this.$options.filters["serviceChange"];

​     const data = filter(selected);

​    },

  },

 filters:{

  serviceChange(selected){

   ... ...

  },

 },
```

![image-20210315111815948](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210315111815948.png)

![image-20210315111832117](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210315111832117.png)





### filter  Js方法

1. filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
2. 不会改变原数组
3. return后面判断结果，取布尔值，true的话就添入新的filter数组中，false的话，不会添进filter的数组中

```javascript
    var arr = [1,2,'',3,' '];



    var arr2=arr.filter(function (item) {



        return item;



    });          //[1,2,3,' ']
```

例：筛选不包含'b'的字符串

```javascript
    var arr = ['aa','cb','cc', 'bd','rf']



    var newArr = arr.filter(item => item.indexOf('b')<0)   //["aa", "cc", "rf"]
```



axios取消请求方法

https://www.kancloud.cn/yunye/axios/234845/

cancelToken

![image-20210713112938033](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210713112938033.png)



前端导出Excel

```javascript
function tableToExcel(){
      //要导出的json数据
      const jsonData = [
        {
          name:'路人甲',
          phone:'123456789',
          email:'000@123456.com'
        },
        {
          name:'炮灰乙',
          phone:'123456789',
          email:'000@123456.com'
        },
        {
          name:'土匪丙',
          phone:'123456789',
          email:'000@123456.com'
        },
        {
          name:'流氓丁',
          phone:'123456789',
          email:'000@123456.com'
        },
      ]
      //列标题，逗号隔开，每一个逗号就是隔开一个单元格
      let str = `姓名,电话,邮箱\n`;
      //增加\t为了不让表格显示科学计数法或者其他格式
      for(let i = 0 ; i < jsonData.length ; i++ ){
        for(let item in jsonData[i]){
            str+=`${jsonData[i][item] + '\t'},`;     
        }
        str+='\n';
      }
      //encodeURIComponent解决中文乱码
      let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
      //通过创建a标签实现
      let link = document.createElement("a");
      link.href = uri;
      //对下载的文件命名
      link.download =  "json数据表.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

原文链接：https://blog.csdn.net/qaakd/article/details/108105564
```

