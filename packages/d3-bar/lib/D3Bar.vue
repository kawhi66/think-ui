<template>
  <svg ref="chart" />
</template>

<script>
import BarChart from "./d3-bar";
import Vue from "vue/dist/vue.esm";
import { Atom, Axis, Margin, Config, defaults } from "./config";
const { width, height, barWidth, axis, xAxis, paddingOuter, margin } = defaults;
export default {
  data() {
    return {
      chart: new BarChart({
        element: this.$refs.chart
      })
    };
  },
  props: {
    width: {
      type: Number,
      default: width
    },
    height: {
      type: Number,
      default: height
    },
    barWidth: {
      type: Number,
      default: barWidth
    },
    axis: {
      type: Boolean,
      default: axis
    },
    xAxis: {
      type: Object,
      default() {
        return xAxis;
      }
    },
    paddingOuter: {
      type: Number,
      default: paddingOuter
    },
    margin: {
      type: Object,
      default() {
        return margin;
      }
    },
    barSeries: {
      type: [Array, Object], // TODO TS2345
      default() {
        return xAxis.data.map(item => ({
          x: item,
          y: Math.ceil(Math.random() * 100)
        }));
      }
    }
  },
  watch: {
    barSeries(newVal) {
      this.chart.update(newVal);
    }
  },
  mounted() {
    this.chart = new BarChart({
      element: this.$refs.chart,
      width: this.width,
      height: this.height,
      barWidth: this.barWidth,
      axis: this.axis,
      xAxis: this.xAxis,
      paddingOuter: this.paddingOuter,
      margin: this.margin
    });
    this.chart.render(this.barSeries);
  }
};
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


