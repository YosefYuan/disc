<template>
  <div>
    <p class="ques-title">{{ title }}</p>
    <template v-for="(v, i) in selectionData">
      <div :key="i" class="content">
        <p :key="i" class="quesNum">第{{i + 1}}题</p>
        <my-select :item="v" @get-score="pushScore"></my-select>
        <div class="errorState" v-if="!completeSelectFlag[i]">请继续选择</div>
      </div>
    </template>
    <a @click="submitFn" class="submitBtn">提交</a>
    <div id="conclusion-wrapper" v-if="maxConclusionData.length">
      <!-- <p>测试结果</p> -->
      <ul :key="i2" v-for="(v2,i2) in maxConclusionData">
        <li>{{v2}}</li>
      </ul>
    </div>
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
      title: "",
      selectionData: [],
      maxConclusionData: [],
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
      const flag = this.checkAll();
      if (flag) {
        this.getFourScores();
        this.getConclusion();
        // this.$router.push({ path: "/result" });
        // console.log(this.maxConclusionData);
        // this.$bus.$emit("my-event", this.maxConclusionData);
      } else {
        alert("请完成所有题目");
      }
    },
    getFourScores() {
      // console.log("getFourScores");
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
      // console.log(this.fourItemScores);
    },
    getConclusion() {
      // console.log("getConclusion");
      const ScoresArr = Object.values(this.fourItemScores);
      this.maxScore = Math.max.apply(null, ScoresArr);
      this.maxScoreArr = [];
      for (var key in this.fourItemScores) {
        if (this.fourItemScores[key] === this.maxScore) {
          this.maxScoreArr.push(key);
        }
      }
      // console.log(this.maxScoreArr);
      this.maxConclusionData = [];
      this.maxScoreArr.map((v, i) => {
        this.maxConclusionData.splice(i, 1, this.conclusionData[v].join("; "));
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
      // console.dir(this.scoreArr);
    },
    initState() {
      this.selectionData = data.selectionData;
      this.conclusionData = data.conclusionData;
      this.title = data.title;
      this.selectionData.forEach((v, i) => {
        this.scoreArr[i] = {
          indexNum: i,
          eachScore: null
        };
      });
    }
  },
  created() {
    this.initState();
    // console.log(this.conclusionData);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ques-title {
  text-align: left;
  font-size: 0.9em;
  color: #888;
}
.content {
  background: #fff;
  margin: 10px 0;
  padding: 5px 0 10px;
  border-radius: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.submitBtn {
  display: block;
  text-align: center;
  background: #42b983;
  color: #fff;
  width: 30%;
  max-width: 200px;
  margin: 20px auto;
  font-weight: bold;
  height: 1.8em;
  line-height: 1.8;
  padding: 0.2em 0;
  border-radius: 5px;
  cursor: pointer;
}
.quesNum {
  margin: 0 auto;
  padding: 0.2em 0;
}
.errorState {
  color: rgb(238, 124, 72);
}
#conclusion-wrapper {
  margin: 0 auto 20px;
  text-align: left;
  background: #fff;
  color: #888;
  padding: 3% 5%;
  border-radius: 5px;
  font-weight: bold;
}
#conclusion-wrapper li {
  border-bottom: 1px dashed #eee;
  padding: 0.5em 0;
}
#conclusion-wrapper ul:last-child li {
  border: none;
}
#conclusion-wrapper p {
  font-weight: bold;
  color: #000;
}
</style>
