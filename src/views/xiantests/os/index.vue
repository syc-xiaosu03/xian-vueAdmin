<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="xian-jizu-page">
    <h1>操作系统</h1>

    <div class="requestAdr">接口请求地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146999315 </div>

    <QaList :qalistProp="qalist" />
  </div>
</template>

<script>
/*
 考试页面请求接口地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146999315
*/
import res from './result.json'
import QaList from '@/views/xiantests/components/question-list.vue'

// requireJsonAll(__dirname)
/* json数据要求
  [
    res1: {
      data: {
        details: [
          item: {
            questions, //问题名称
            options,  // 问题选项(是带转义符的JSON串, 需处理)
            answer,   // 答案
            question_type_name: 问题类型
          }
        ]
      }
    }
    res2
  ]
*/
export default {
  components: { QaList },
  data() {
    return {
      qalist: []
    }
  },
  computed: {
    // qalist() {
    //   return res.data?.paperContents || []
    // }
  },
  mounted() {
    console.log(this.getJsonFile())
  },
  methods: {
    getJsonFile() {
      const requireAll = (requireContext) =>
        requireContext.keys().map(requireContext)
      const req = require.context(__dirname, true, /\-qa.json$/)
      // return requireAll(req)
      const data = requireAll(req)
      const dataAll = data.reduce((pre, cur) => {
        return pre.concat(cur?.data?.details || [])
      }, [])
      console.log(data, '----------- data')
      this.qalist = dataAll.map(item => {
        console.log(item.options)
        if (item.options) {
          const options = item.options?.replace(new RegExp('\\\"', 'gm'), '"')
          // console.log(JSON.parse(options), 'options')
          item.options = JSON.parse(options)
        }
        return item
      })
      console.log(dataAll, '----------- dataAll')
      console.log(this.qalist)
    }
  }
}
</script>
<style lang="scss" scoped>
.xian-jizu-page{
    .requestAdr{
        color: #ccc;
        margin-bottom: 5px;
    }
}
</style>

