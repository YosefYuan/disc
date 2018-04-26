<template>
  <div>
    <p>测试结果</p>
    <div id="conclusion-wrapper" v-if="maxConclusionData.length">
      <div :key="i" v-for="(v,i) in maxConclusionData" class="conslusionPart">
        <div :key="i2" v-for="(v2,i2) in v">
          <p class="detail-title">{{conclusionDetailTitle[i2]}}:</p><p class="detail-content">{{v2}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import data from "@/data/selection";
export default {
  name: "resultPage",
  data() {
    return {
      maxConclusionData: [],
      conclusionDetailTitle: []
    };
  },
  created() {
    // this.maxConclusionData = [];
    this.maxConclusionData = store.state.maxConclusionData;
    this.conclusionDetailTitle = data.conclusionDetailTitle;
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
#conclusion-wrapper .conslusionPart {
  list-style-type: none;
  border-bottom: 1px dashed #eee;
  padding: 1em 0;
  text-align: center;
  line-height: 2;
}
#conclusion-wrapper .conslusionPart:last-child {
  border: none;
}
#conclusion-wrapper p {
  font-weight: bold;
  color: #000;
}
#conclusion-wrapper .detail-title,
#conclusion-wrapper .detail-content {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  font-size: 14px;
  color: #aaa;
}
#conclusion-wrapper .detail-title {
  text-align: right;
  padding-right: 1em;
  vertical-align: top;
}
#conclusion-wrapper .detail-content {
  text-align: left;
  color: #666;
  padding-left: 1em;
}
</style>
