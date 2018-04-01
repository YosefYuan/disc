<template>
  <div>
    <p>{{ msg }}</p>
    <template v-for="(v, i) in selectionData">
      <p class="quesNum">第{{i + 1}}题</p>
      <div :key="i">
        <ul class="selection">
          <li v-for="(v1, i1) in selectionData[i]">{{v1}}</li>
        </ul>
        <table class="result">
          <tr class="title">
            <td class="faintTxt">选项</td>
            <td v-for="(v1, i1) in selectionData[i]">{{v1}}</td>
          </tr>
          <tr class="score">
            <td class="faintTxt">得分</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </template>
    <a @click="submitFn" class="submitBtn">提交</a>
  </div>
</template>

<script>
import data from "@/data/selection";
export default {
  name: "indexPage",
  data() {
    return {
      msg: `1、以下共有10题，每一题有四项选择。在这四项选择中，给你认为最能描述你的词句填上4分；给下一个3分；再次一个2分；给最不像你的描述填上1分。每一题中，分数不能相同，只能各为4，3，2，或1。`,
      selectionData: []
    };
  },
  methods:{
    submitFn(){
      console.log(123);
      this.$router.push({ path: '/result'});
    }
  },
  mounted() {
    this.selectionData = data.selectionData;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
.selection li {
  background: #42b983;
  padding: 2px 5px;
  color: #fff;
}
p {
  text-align: center;
}
.result {
  margin: 0 auto;
}
.result td {
  padding: 0 3px;
}
.score td,
.title td{font-size:.8em;}
.faintTxt {
  color: #888;
}
.submitBtn{
  display:block;
  text-align:center;
  background: #42b983;
  color:#fff;
  width:30%;
  max-width:100px;
  margin: 20px auto;
  padding: 3px;
  font-weight:bold;
}
.quesNum{
  padding:.2em 0;
  background:#eee;
}
</style>
