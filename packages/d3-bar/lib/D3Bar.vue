<template>
  <svg ref="a" />
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
  mounted() {
    this.a = new BarChart({
      element: this.$refs.a,
      barWidth: 20,
      paddingOuter: 0.3
    });
    this.a.render([
      {
        x: "Mon",
        y: 12
      },
      {
        x: "Tue",
        y: 30
      },
      {
        x: "Wed",
        y: 18
      },
      {
        x: "Thu",
        y: 110
      },
      {
        x: "Fri",
        y: 200
      },
      {
        x: "Sat",
        y: 118
      },
      {
        x: "Sun",
        y: 64
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


