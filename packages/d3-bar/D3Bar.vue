<template>
  <svg ref="chart" />
</template>

<script>
import BarChart from "./lib/d3-bar";
import { defaults } from "./lib/config";
const {
  width,
  height,
  barWidth,
  barPadding,
  axis,
  xAxis,
  margin,
  barSeries
} = defaults;
export default {
  data() {
    return {
      chart: null
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
    barPadding: {
      type: Number,
      default: barPadding
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
    margin: {
      type: Object,
      default() {
        return margin;
      }
    },
    barSeries: {
      type: [Array, Object],
      default() {
        return xAxis.data.map(item => ({
          x: item,
          y: Math.ceil(Math.random() * 100)
        }));
      }
    }
  },
  watch: {
    barSeries(data) {
      this.chart.update(data);
    }
  },
  mounted() {
    this.chart = new BarChart({
      element: this.$refs.chart,
      width: this.width,
      height: this.height,
      barWidth: this.barWidth,
      barPadding: this.barPadding,
      axis: this.axis,
      xAxis: this.xAxis,
      paddingOuter: this.paddingOuter,
      margin: this.margin
    });
    this.chart.render(this.barSeries);
  }
};
</script>


