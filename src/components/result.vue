<template>
  <div>
    <p>测试结果</p>
    <div id="conclusion-wrapper" v-if="maxConclusionData.length">
      <ul :key="i2" v-for="(v2,i2) in maxConclusionData">
        <li>{{v2}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "resultPage",
  data() {
    return {
      maxConclusionData: []
    };
  },
  created() {
    this.maxConclusionData = [];
    this.maxConclusionData = store.state.maxConclusionData;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  line-height: 2;
  font-weight: bold;
  color: #000;
  font-size: 1.2em;
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
  list-style-type: none;
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
