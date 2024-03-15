<template>
  <div class="xian-note-page">
    <h1>笔记</h1>
    <h3>xatu.168wangxiao.com平台考前注意事项</h3>
    <ul>
      <li> <strong>注意:</strong> 进入考试页面, 尽量另开新屏或开半屏<strong>打开独立的标签页进行操作</strong>, 因为切换标签页或窗口会发起上报请求,接口为: `https://xatu.168wangxiao.com/exam/utils/now`</li>
      <li>1. <strong>!!!考前重要准备</strong>: 进入考试前先打开控制台(清空network前期记录)</li>
      <li>2. 请求中携带的考题数据处理: 进入后观察大概第二个很长的请求的返回, 将其复制下来, 转成json对象格式方便查看(paperContent内容为转义后的字符串, 需删除两头的引号,再批量替换删除`\`转义符)
        <ul>
          <li>2.1: 复制Response下的返回数据</li>
          <li> 2.2: json.cn上转换格式 </li>
          <li> 2.3: paperContent内容为转义后的字符串, 需删除两头的引号,再批量替换删除`\`转义符 </li>
        </ul>
      </li>
      <li>3. <strike>找答案: 返回数据的数据列表中,有个字段`answersNumber`, 即是答案</strike>  此方法在23年系统迭代后失效</li>
      <li>4. 去除水印: 源代码中,script脚本下方一个设置了巨长行内的样式的div, 其背景图为base64, 去掉即可</li>
      <li>5. 复制粘贴等功能恢复: 去除body和类名为`quill-editor editor`的元素上的: `oncontextmenu`, 'copy', 'cut', 'paste'等事件, </li>
      <li>6. 部分综合题的题目高度超出出滚动条: 找到`contentView`元素删除其`max-height`</li>
    </ul>

    <!-- <el-descriptions title="期末考试提醒">
      <el-descriptions-item label="考前准备">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions> -->
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="180" />
      <el-table-column prop="text" label="备注" width="180" />
    </el-table> -->
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
