<template>
  <div class="question-list-comp">
    <el-card v-if="resData.length===0">
      暂无数据{{ resData.length }}
    </el-card>
    <template v-else>
      <el-card v-for="(qa, idx) in resData" :key="idx" class="question-item">
        <!-- <div class="qqq">{{ qa.questionType.explain }}</div> -->
        <div class="qa-title">
          <span>{{ idx + 1 }}</span>
          <div v-html="qa.title" />
        </div>
        <ul class="qa-options">
          <!-- <li v-for="(op, subIdx) in qa.options" :key="subIdx" v-html="op" /> -->
          <li v-for="(op, subIdx) in qa.options" :key="subIdx" v-html="optionItem(op, subIdx)" />
        </ul>
        <div class="qa-answer">
          <span>答: </span>
          <div v-html="qa.answersNumber.join(',')" />
        </div>
      </el-card>
    </template>
  </div>
</template>

<script>
// import res from '../json/shujujiegou.json'
const letter = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D'
}
export default {
  props: {
    resPropData: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  data() {
    return {
    //   resData: this.resPropData?.data?.paperContents || res?.data?.paperContents || []
      resData: this.resPropData?.data?.paperContents || []
    }
  },
  computed: {

  },
  methods: {
    optionItem(op, idx) {
      return `<strong>${letter[idx]}: </strong> ${op}`
    }
  }
}
</script>
<style lang="scss" scoped>
.question-list-comp {
  .question-item {
    .qqq {
      font-size: 12px;
      transform: scale(0.9);
      color:gray;
    }
    .qa-title {
      font-size: 16px;
      font-weight: 700;
      display: flex;
      min-height: 40px;
      line-height: 40px;
      ::v-deep p {
        margin: 0;
      }
      span {
        padding-right: 10px;
      }
    }
    .qa-options {
      font-size: 16px;
      margin-top: 0;
      li{
        display: flex;
        align-items: center;
        ::v-deep strong{
          margin-right: 10px;
        }
      }
    }
    .qa-answer {
      font-size: 18px;
      color: red;
      font-weight: 700;
      // background-color: lavender;
      padding: 1px 0 2px 50px;

      display: flex;
      // height: 50px;
      // line-height: 50px;
      ::v-deep p {
        margin: 0;
      }
      span {
        padding-right: 10px;
      }
    }
  }
}
</style>

