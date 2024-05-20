<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="xian-jizu-page">
    <h1>信息检索-第5学期</h1>
    <div>* {{ remark }}</div> <br>
    <div class="requestAdr">接口请求地址: https://[防误点,用到删此文本]xatu.168wangxiao.com/cjapi/exam/paperInfo/2148348676 </div>
    <!-- <div>错误答案暂记: 1, </div>
    <ul>
      <li>1: C  ---  B </li>
    </ul> -->
    <QaList :qalistProp="qalist" />
  </div>
</template>

<script>
/*
 考试页面请求接口地址: https://[防误点,用到删此文本]https://xatu.168wangxiao.com/cjapi/exam/paperInfo/2147553365
 考试页面请求接口地址(新接口,无答案):
https://xatu.168wangxiao.com/cjapi/exam/paperInfo/2147553365
*/

/*
  *提交试卷接口： https://xatu.168wangxiao.com/cjapi/exam/paperAnswer/commitByHand
  * 在提交之前发送了一个now当前时间确认接口(收录在当前目录./now.json)： https://xatu.168wangxiao.com/cjapi/exam/utils/now
  * 以下为提交接口的 Request Headeers， Request body请求参数保存在当前目录下selfAnswers.json里 (记录提交证据)
    PUT /cjapi/exam/paperAnswer/commitByHand HTTP/1.1
    Accept: application/json, text/plain, *\/*
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjozOTI3MCwibmFtZSI6IuiLj-mYs-aYpSIsInNjaG9vbF9pZCI6MjgsInN0YXRpb25faWQiOjEzOSwic3R1ZGVudF9jYXJkIjoiNDEwNzIxMTk4NzAzMTM5NzE1IiwiZ3JhZGVfaWQiOjkzLCJpZGNhcmQiOiI0MTA3MjExOTg3MDMxMzk3MTUiLCJsZXZlbF9pZCI6MzIsImxlYXJuX3dheSI6IuWHveaOiCIsImxlYXJuX3dheV9pZCI6NzYsIm1ham9yc19pZCI6MzAzLCJwaG9uZV9udW1iZXIiOiIxMzc4MzUyMTYxMyIsInNjaF9yb2xsX3N0YXR1cyI6IuWcqOexjSIsImlzQXBwIjpmYWxzZSwiaWF0IjoxNjg4Mjg3MDQzLCJleHAiOjE2ODk1ODMwNDN9.f-HTLtxpn9XdpDrMejFhXkWkbxk9IOEATbEamqz8njo|0
    Connection: keep-alive
    Content-Language: zh_CN
    Content-Length: 5204
    Content-Type: application/json;charset=UTF-8
    Cookie: one_points=-1; fpv=20021cf1ab201cf3f35774e587462679; yd_captcha_token=ycrn5U5Gpy46Ta6xmQdkdqeZBPwDkbaLbQEakXVkGjHq3lxZPUHazlLUkHC6a3ZRGo+4flSN9Xaxd0L46sJuPA%3D%3D
    Host: xatu.168wangxiao.com
    Origin: https://xatu.168wangxiao.com
    Referer: https://xatu.168wangxiao.com/web/examination/answer
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: same-origin
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36
    sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"
    sec-ch-ua-mobile: ?0
    sec-ch-ua-platform: "Windows"
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
      this.qalist = res?.data?.paperContents.map(pap => {
        return {
          ...pap,
          answersNumber: selfData[pap.questionId]
        }
      })
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

