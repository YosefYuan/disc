<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import data from "@/data/selection";
export default {
  name: "indexPage",
  data() {
    return {
      msg: `result-page`
    };
  },
  methods:{
    
  },
  mounted() {
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
</style>
