<template>
  <el-divider content-position="left">
    <h2>签回</h2>
  </el-divider>
  <div class="desc">签回图片</div>
  <div class="demo-image__lazy">
    <el-image v-for="url in backSign" :key="url" :src="$filePath + url" lazy />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  components: {},
  props: {
    backSign: {
      type: Array
    }
  },
  setup(props, context) {
    const backSign = props.backSign
    return backSign
  }
})
</script>

<style scoped>
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}

.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
.desc {
  margin-top: 30px;
}
</style>
