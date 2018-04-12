<template>
    <div>
        <ul class="selection">
            <li :key="i1" v-for="(v1, i1) in item.select" @click="sortSelect(v1)" :class="{added: v1.initSelect}">{{v1.val}}</li>
        </ul>
        <ul class="selection selection-result">
            <li :key="i2" v-for="(v2, i2) in orderSelectScores">{{v2}}</li>
        </ul>
        <!-- <table class="result">
            <tr class="title">
              <td class="faintTxt">选项</td>
              <td :key="i3" v-for="(v3, i3) in orderSelect">{{v3}}</td>
            </tr>
            <tr class="score">
              <td class="faintTxt">得分</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
        </table> -->
    </div>
</template>

<script>
export default {
  name: "indexPage",
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      orderSelect: [],
      orderSelectScores: []
    };
  },
  methods: {
    sortSelect(item) {
      if (!item.initSelect) {
        this.orderSelect.push(item.val);
      } else {
        const index = this.orderSelect.indexOf(item.val);
        if (index > -1) this.orderSelect.splice(index, 1);
      }
      if (this.orderSelect.length === this.item.select.length) {
        const scoreObj = this.getScore();
        this.orderSelectScores = Object.values(scoreObj.eachScore);
        // console.log(this.orderSelectScores);
        this.$emit("get-score", scoreObj);
      } else {
        const scoreNullObj = {
          indexNum: this.item.indexNum,
          eachScore: null
        };
        this.orderSelectScores = [];
        // console.log(scoreNullObj);
        this.$emit("get-score", scoreNullObj);
      }
      item.initSelect = !item.initSelect;
    },
    getScore() {
      const scoreDetailsObj = {};
      this.item.select.forEach((v, i) => {
        this.orderSelect.forEach((v1, i1, arr) => {
          if (v1 === v.val) {
            scoreDetailsObj[i] = arr.length - i1;
          }
        });
      });
      const scoreObj = {
        indexNum: this.item.indexNum,
        eachScore: scoreDetailsObj
      };
      return scoreObj;
    }
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
  margin: 0px 1%;
  width: 23%;
}
.selection li {
  background: #42b982;
  padding: 0.5% 1%;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-height: 50px;
  cursor: pointer;
}
.selection-result li {
  background: #dd95b6;
}
li.added {
  background: #888;
}
/* .result {
  margin: 0 auto;
  width: 80%;
}
.result td {
  min-width: 60px;
}
.score td,
.title td {
  font-size: 0.8em;
}
.faintTxt {
  color: #888;
} */
</style>
