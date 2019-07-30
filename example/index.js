import BarChart from "../packages/d3-bar/index.js"
import Vue from "vue/dist/vue"

Vue.config.productionTip = false

new Vue({
  template: `
    <div>
      <header>
        <h1>hello world</h1>
        <button @click="test">test</button>
      </header>
      <bar-chart ref="bar-chart"></bar-chart>
    </div>
  `,
  components: {
    BarChart
  },
  methods: {
    test() {
      this.$refs["bar-chart"]["a"].update(
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(item => ({
          x: item,
          y: Math.ceil(Math.random() * 100)
        }))
      );
    }
  }
}).$mount('#app')