import BarChart from "../packages/d3-bar/index.js"
import Vue from "vue/dist/vue.esm"

Vue.config.productionTip = false

new Vue({
  template: `
    <div>
      <header class="header">
        <p>Think UI</p>
        <button @click="test">Animate</button>
      </header>
      <bar-chart ref="bar-chart" :width="640" :height="320" :bar-width="24" :padding-outer="0.5" :bar-series="barSeries"></bar-chart>
    </div>
  `,
  components: {
    BarChart
  },
  data() {
    return {
      barSeries: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(item => ({
        x: item,
        y: 100
      }))
    }
  },
  methods: {
    test() {
      this.barSeries = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(item => ({
        x: item,
        y: Math.ceil(Math.random() * 100)
      }))
    }
  }
}).$mount('#app')