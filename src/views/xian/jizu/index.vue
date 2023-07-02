<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="xian-jizu-page">
    <h1>计算机组成与体系结构考试</h1>
    <div class="requestAdr">接口请求地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146996437</div>
    <QaList :resPropData="resData" />
  </div>
</template>

<script>
/*
 考试页面请求接口地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146996437
*/
import res from './result.json'
import QaList from '../components/question-list.vue'
export default {
  components: { QaList },
  data() {
    return {
      resData: res || null
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

