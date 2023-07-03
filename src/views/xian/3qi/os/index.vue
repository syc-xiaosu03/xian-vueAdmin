<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="xian-jizu-page">
    <h1>操作系统</h1>
    <div>* {{ remark }}</div>
    <div class="requestAdr">接口请求地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146999315 </div>
    <!-- <div>错误答案暂记: 1, </div>
    <ul>
      <li>1: C  ---  B </li>
    </ul> -->
    <QaList :qalistProp="qalist" />
  </div>
</template>

<script>
/*
 考试页面请求接口地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146999315
 考试页面请求接口地址(新接口,无答案): https://xatu.168wangxiao.com/cjapi/exam/paperInfo/2147720516
*/
import res from './result.json'
import resAnssers from './selfAnswers.json' // 自答答案提交数据
import QaList from '@/views/xian/components/question-list.vue'
export default {
  components: { QaList },
  data() {
    return {
      qalist: [],
      remark: '本页答案为自答答案, 接口并未返回'
    }
  },
  mounted() {
    this.formatData()
  },
  methods: {
    formatData() {
      /* 无答案题目数据 与 自答答案数据 结合处理 */
      const selfData = {}
      resAnssers?.paperAnswers.forEach(item => {
        selfData[item.paperQuestionId] = item.answer
      })
      const paplist = res?.data?.paperContents.map(pap => {
        return {
          ...pap,
          answersNumber: selfData[pap.questionId]
        }
      })
      this.qalist = paplist
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

