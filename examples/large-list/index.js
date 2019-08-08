import LargeList from "../../packages/large-list/index.js"
import Vue from "vue/dist/vue.esm"
import { LoremIpsum } from "lorem-ipsum"

Vue.config.productionTip = false

new Vue({
  template: `
    <div style="width: 1000px; height: 300px; margin: 0 auto;">
      <large-list :raw-data="raw_data"></large-list>
    </div>
  `,
  components: {
    LargeList
  },
  data() {
    return {
      raw_data: []
    }
  },
  created() {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });
    for (let index = 0; index < 100; index++) {
      this.raw_data.push(lorem.generateWords() + " " + index)
    }
  }
}).$mount('#app')