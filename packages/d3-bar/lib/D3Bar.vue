<template>
  <div>
    <h1>hello world</h1>
    <svg ref="a" class="chart" />
  </div>
</template>

<script>
import Chart from "./d3-bar";

const gen = n => {
  const series = [];
  for (var i = 0, variance = 0, value; i < n; i++) {
    variance += (Math.random() - 0.5) / 10;
    const value = Math.abs(Math.cos(i / 100) + variance);
    series.push({
      bin: new Date(Date.now() - i * 3600000),
      value
    });
  }
  return series;
};

export default {
  data() {
    return {};
  },
  mounted() {
    this.a = new Chart({
      target: this.$refs.a
    });

    this.a.render(gen(10));
  }
};
</script>

