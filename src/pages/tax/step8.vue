<template>
  <el-divider content-position="left">
    <h2>签回</h2>
  </el-divider>
  <div class="desc">签回图片</div>
  <div class="demo-image__lazy">
    <el-image v-for="url in urls" :key="url" :src="url" lazy />
  </div>
</template>
<script lang="ts" setup>
const urls = [
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
]
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
</style>