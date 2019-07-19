<template>
  <div>
    <header>
      <h1>hello world</h1>
      <button @click="test">test</button>
    </header>
    <svg ref="a" class="chart" />
  </div>
</template>

<script lang="ts">
import * as d3 from "d3";
import BarChart from "./d3-bar";
import Vue from "vue";
export default Vue.extend({
  data() {
    let a: any;
    return {
      a
    };
  },
  methods: {
    test() {
      console.log(this.a);
    }
  },
  mounted() {
    this.a = new BarChart({
      element: this.$refs.a
    });
    this.a.render([
      {
        x: 10,
        y: 12
      },
      {
        x: 20,
        y: 30
      },
      {
        x: 30,
        y: 18
      },
      {
        x: 40,
        y: 110
      },
      {
        x: 50,
        y: 110
      }
    ]);
  }
});
</script>

<style lang="less">
svg.wrapper {
  // fill: aqua;
  // g.inner {
  // }
}
.axis path,
.axis line {
  fill: none;
  stroke: black;
  shape-rendering: crispEdges;
}
.axis text {
  font-family: sans-serif;
  font-size: 11px;
}
</style>


