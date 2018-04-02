<template>
    <div>
        <ul class="selection">
            <li :key="i1" v-for="(v1, i1) in select" @click="sortSelect(v1)" :class="{added: v1.initSelect}">{{v1.val}}</li>
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
            {
                initSelect:false,
                val:"很有权威",
            },
            {
                initSelect:false,
                val:"热情主动",
            },
            {
                initSelect:false,
                val:"情感敏锐",
            },
            {
                initSelect:false,
                val:"重视指示",
            }
        ],
        orderSelect:[]
    };
  },
  methods: {
    sortSelect(item){
        if(!item.initSelect){
            this.orderSelect.push(item.val);
        }else{
            const index = this.orderSelect.indexOf(item.val);
            if(index > -1) this.orderSelect.splice(index,1);
        } 
        item.initSelect = !item.initSelect;
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
li.added {
  background: #888;
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
