<template>
  <div class="xian-note-page">
    <h1>测试题汇总笔记</h1>
    <h3>??</h3>
    <ul>
      <li>果断去除转义符工具: https://c.runoob.com/front-end/7683/</li>
      <li>接口返回文件命名规则为: *-qa.json</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        text: '1'
      }, {
        date: '2016-05-04',
        text: '2'
      }, {
        date: '2016-05-01',
        text: '3'
      }, {
        date: '2016-05-03',
        text: '4'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.xian-note-page{
    ul{
        li{
            padding-bottom: 10px;
            strong{
              color:crimson;
            }
        }
    }
}
</style>
