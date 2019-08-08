<template>
  <ul ref="large-list-wrapper" @scroll="scroll" class="large-list-wrapper">
    <li v-for="(item, index) in visualData" :key="index" class="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      visualData: []
    };
  },
  props: {
    rawData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    scroll(e) {
      const { scrollHeight, scrollTop } = e.target;
      const olength = Math.ceil(scrollTop / 20);
      if (olength > 0) {
        this.visualData = this.rawData.slice(0 + olength, 20 + olength);
      }
    }
  },
  mounted() {
    const { height } = this.$refs["large-list-wrapper"].getBoundingClientRect();
    const visualDataLength = Math.ceil(height / 20);
    this.visualData = this.rawData.slice(0, visualDataLength + 5);
  }
};
</script>

<style lang="less" scoped>
.large-list-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;

  .item {
    height: 20px;
    line-height: 20px;
  }
}
</style>


