<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "resultPage",
  data() {
    return {
      msg: `result-page`
    };
  },
  // created() {
  //   this.$bus.$on("my-event", this.handleMyEvent);
  // },
  // methods: {
  //   handleMyEvent(eventData) {
  //     console.log(eventData);
  //   }
  // },
  // beforeDestroy() {
  //   this.$bus.$off("my-event", this.handleMyEvent);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
