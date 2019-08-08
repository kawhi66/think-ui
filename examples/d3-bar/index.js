import BarChart from "../../packages/d3-bar/index.js"
import Vue from "vue/dist/vue.esm"

Vue.config.productionTip = false

new Vue({
  template: `
    <div>
      <header class="header">
        <p class="title">Think UI d3 bar component</p>
        <button @click="test">Animate</button>
      </header>
      <article class="main">
        <section>
          <p class="title">Custom Config</p>
          <bar-chart :width="640" :height="320" :bar-width="32" :bar-padding="15" :x-axis="xAxis" :bar-series="barSeries"></bar-chart>
        </section>
      </article>
    </div>
  `,
  components: {
    BarChart
  },
  data() {
    return {
      xAxis: {
        type: "category",
        data: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
      },
      series: []
    }
  },
  computed: {
    barSeries() {
      return this.xAxis.data.map((item, index) => ({
        x: item,
        y: this.series[index] || 100
      }))
    }
  },
  methods: {
    test() {
      this.series = this.xAxis.data.map(item => Math.ceil(Math.random() * 100))
    }
  }
}).$mount('#app')