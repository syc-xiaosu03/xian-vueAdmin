<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="xian-jizu-page">
    <h1>面向对象技术与c++</h1>
    <div class="requestAdr">接口请求地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146999315 </div>
    <div>错误答案暂记: 1, </div>
    <ul>
      <li>1: C  ---  B </li>
    </ul>
    <QaList :resPropData="resData" />
  </div>
</template>

<script>
/*
 考试页面请求接口地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/exam/paperInfo/2146999315
*/
import res from './result.json'
import QaList from '@/views/xian/components/question-list.vue'
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

