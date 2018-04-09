<template>
  <div>
    <p>{{ msg }}</p>
    <template v-for="(v, i) in selectionData">
      <div :key="i">
        <p :key="i" class="quesNum">第{{i + 1}}题</p>
        <div class="errorState" v-if="scoreArr[i].selectSuccess === 0">请继续填写</div>
        <div class="rightState" v-if="scoreArr[i].selectSuccess === 1">填写完毕</div>
        <my-select :item="v" @get-score="pushScore"></my-select>
      </div>
    </template>
    <a @click="submitFn" class="submitBtn">提交</a>
  </div>
</template>

<script>
import data from "@/data/selection";
import MySelect from "@/components/base/select";
import Vue from 'vue';

export default {
  name: "indexPage",
  components: {
    MySelect
  },
  data() {
    return {
      msg: `1、以下共有10题，每一题有四项选择。在这四项选择中，给你认为最能描述你的词句填上4分；给下一个3分；再次一个2分；给最不像你的描述填上1分。每一题中，分数不能相同，只能各为4，3，2，或1。`,
      selectionData: [],
      scoreArr: []
    };
  },
  methods: {
    submitFn() {
      this.$router.push({ path: "/result" });
    },
    pushScore(scoreObj) {
      console.dir(scoreObj);
      var flag = false;
      var index = 0;

      for (let i = this.scoreArr.length - 1; i >= 0; i--) {
        if (this.scoreArr[i].indexNum === scoreObj.indexNum) {
          index = i;
          break;
        }
      }
      if (scoreObj.eachScore !== null) {
        Vue.set(this.scoreArr[index], "eachScore", scoreObj.eachScore);
        Vue.set(this.scoreArr[index], "selectSuccess", 1);
      } else {
        Vue.set(this.scoreArr[index], "eachScore", null);
        Vue.set(this.scoreArr[index], "selectSuccess", 0);
      }
      this.$router.replace('/back');
      this.$router.replace('/');
      console.dir(this.scoreArr);
    },
    initState() {
      this.selectionData.forEach((v, i) => {
        this.scoreArr[i] = { indexNum: i };
        this.scoreArr[i].eachScore = null;
        this.scoreArr[i].selectSuccess = 0;
      });
    }
  },
  created() {
    this.selectionData = data.selectionData;
    this.initState();
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
.title td {
  font-size: 0.8em;
}
.faintTxt {
  color: #888;
}
.submitBtn {
  display: block;
  text-align: center;
  background: #42b983;
  color: #fff;
  width: 30%;
  max-width: 100px;
  margin: 20px auto;
  padding: 3px;
  font-weight: bold;
}
.quesNum {
  padding: 0.2em 0;
  background: #eee;
}
.errorState {
  color: rgb(238, 124, 72);
}
.rightState {
  color: #42b983;
}
</style>
