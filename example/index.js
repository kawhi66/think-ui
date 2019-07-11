import BarChart from "../packages/d3-bar/index.js"
import Vue from "vue/dist/vue"

Vue.config.productionTip = false

new Vue({
  template: `
    <bar-chart></bar-chart>
  `,
  components: {
    BarChart
  }
}).$mount('#app')