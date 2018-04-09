<template>
  <div>
    <p>{{ msg }}</p>
    <template v-for="(v, i) in selectionData">
      <div :key="i">
        <p :key="i" class="quesNum">第{{i + 1}}题</p>
        <!-- <div class="rightState" v-if="completeSelectFlag[i]">填写完毕</div> -->
        <my-select :item="v" @get-score="pushScore"></my-select>
        <div class="errorState" v-if="!completeSelectFlag[i]">请继续选择</div>
      </div>
    </template>
    <a @click="submitFn" class="submitBtn">提交</a>
    <ul id="conclusion-wrapper" v-for="(v2,i2) in maxConclusionData">
      <li>{{v2}}</li>
    </ul>
  </div>
</template>

<script>
import data from "@/data/selection";
import MySelect from "@/components/base/select";

export default {
  name: "indexPage",
  components: {
    MySelect
  },
  data() {
    return {
      msg: `1、以下共有10题，每一题有四项选择。在这四项选择中，给你认为最能描述你的词句填上4分；给下一个3分；再次一个2分；给最不像你的描述填上1分。每一题中，分数不能相同，只能各为4，3，2，或1。`,
      selectionData: [],
      maxConclusionData:[],
      scoreArr: [],
      completeSelectFlag: {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true
      }
    };
  },
  methods: {
    submitFn() {
      // this.$router.push({ path: "/result" });
      const flag = this.checkAll();
      if (flag) {
        this.getFourScores();
        this.getConclusion();
      }
    },
    getFourScores() {
      console.log("getFourScores");
      this.fourItemScores = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
      };
      this.scoreArr.forEach((v, i) => {
        this.fourItemScores[0] += v.eachScore[0];
        this.fourItemScores[1] += v.eachScore[1];
        this.fourItemScores[2] += v.eachScore[2];
        this.fourItemScores[3] += v.eachScore[3];
      });
      console.log(this.fourItemScores);
    },
    getConclusion() {
      console.log("getConclusion");
      const ScoresArr = Object.values(this.fourItemScores);
      this.maxScore = Math.max.apply(null, ScoresArr);
      this.maxScoreArr = [];
      for(var key in this.fourItemScores){
        if(this.fourItemScores[key] === this.maxScore){
          this.maxScoreArr.push(key);
        }
      }
      // console.log(this.maxScoreArr);
      this.maxScoreArr.map((v,i) => {
        this.maxConclusionData.splice(i,1,this.conclusionData[i].join('; '));
      });
      // console.log(this.maxConclusionData);
    },
    checkAll() {
      this.scoreArr.forEach((v, i) => {
        if (v.eachScore === null) {
          this.completeSelectFlag[i] = false;
        }
      });
      const allFlags = Object.values(this.completeSelectFlag);
      for (var i = 0; i < allFlags.length; i++) {
        if (allFlags[i] === false) {
          alert("请完成所有题目");
          return false;
        }
      }
      return true;
    },
    getIndex(itemObj) {
      for (let i = this.scoreArr.length - 1; i >= 0; i--) {
        if (this.scoreArr[i].indexNum === itemObj.indexNum) {
          return i;
        }
      }
    },
    pushScore(scoreObj) {
      var index = this.getIndex(scoreObj);
      if (scoreObj.eachScore !== null) {
        this.completeSelectFlag[index] = true;
      } else {
        this.completeSelectFlag[index] = false;
      }
      this.scoreArr[index].eachScore = scoreObj.eachScore;
      console.dir(this.scoreArr);
    },
    initState() {
      this.selectionData.forEach((v, i) => {
        this.scoreArr[i] = { indexNum: i };
        this.scoreArr[i].eachScore = null;
      });
    }
  },
  created() {
    this.selectionData = data.selectionData;
    this.conclusionData = data.conclusionData;
    this.initState();
    console.log(this.conclusionData);
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

#conclusion-wrapper{
    width: 80%;
    margin: 0 auto;
    text-align: left;
    background: #42B983;
    color: #fff;
    padding: 3% 5%;
}
</style>
