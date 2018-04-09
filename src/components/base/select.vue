<template>
    <div>
        <ul class="selection">
            <li :key="i1" v-for="(v1, i1) in item.select" @click="sortSelect(v1)" :class="{added: v1.initSelect}">{{v1.val}}</li>
        </ul>
        <table class="result">
            <tr class="title">
              <td class="faintTxt">选项</td>
              <td :key="i1" v-for="(v1, i1) in orderSelect">{{v1}}</td>
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
      orderSelect: []
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
        // console.log(scoreObj);
        this.$emit("get-score", scoreObj);
      } else {
        const scoreNullObj = {
          indexNum: this.item.indexNum,
          eachScore: null
        };
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
  width: 20%;
}
.selection li {
  background: #42b982;
  padding: 0.5% 1%;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-height: 50px;
}
li.added {
  background: #888;
}
p {
  text-align: center;
}
.result {
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
}
.submitBtn {
  display: block;
  text-align: center;
  background: #42b983;
  color: #fff;
  width: 30%;
  max-width: 200px;
  margin: 20px auto;
  padding: 3px;
  font-weight: bold;
}
.quesNum {
  padding: 0.2em 0;
  background: #eee;
}
</style>
