<template>
    <div>
        <ul class="selection">
            <li :key="i1" v-for="(v1, i1) in select" @click="sortSelect(v1)">{{v1}}</li>
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
import data from "@/data/selection";
export default {
  name: "indexPage",
  data() {
    return {
        select: [
            "很有权威",
            "热情主动",
            "情感敏锐",
            "重视指示"
        ],
        orderSelect:[]
    };
  },
  methods: {
    sortSelect(val){
        this.orderSelect.push(val);
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
  min-width:60px;
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
</style>
