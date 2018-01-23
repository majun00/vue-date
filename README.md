# vue-date

> 一个极简的日期时间格式化过滤器插件

## Build Setup

``` bash
# 下载
`npm install vue-date-simple`

# 引入
`import vueDate from 'vue-date-simple'`
`Vue.use(vueDate)`

# 使用
即vue过滤器使用方法,用在双花括号中`{{ message | capitalize }}`或`<div v-bind:id="rawId | formatId"></div>`

#参数
`toDate` : 将时间戳(s)转换为常用时间格式'xxxx年xx月xx日 xx:xx'
`toBefore` : 判断时间戳与当前时间时间差,分别输出'xx分钟前','xx小时前','xx天前',若时间差大于三天则直接输出'xxxx年xx月xx日 xx:xx'
```


