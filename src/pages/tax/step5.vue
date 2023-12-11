<template>
  <el-divider content-position="left">
    <h2>上传资料</h2>
  </el-divider>
  <div class="desc">上传资料</div>
  <div class="table-container">
    <table class="table-layout">
      <tbody>
        <tr>
          <td class="table-cell">
            <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />公司注册资料.doc
          </td>
        </tr>
        <tr>
          <td class="table-cell">
            <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />公司注册资料.doc
          </td>
        </tr>
        <tr>
          <td class="table-cell">
            <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />公司注册资料.doc
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <el-button>下载全部资料</el-button>
  </div>
  <br />
  <br />
  <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :on-change="handleChange">
    <el-button type="primary">上传资料</el-button>
    <template #tip>
      <div class="el-upload__tip">
        files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = fileList.value.slice(-3)
}
</script>

<style lang="scss" scoped>
div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      line-height: 36px;
      padding: 5px;
      border-bottom: 1px dotted #e1e2e3;
      text-align: left;
      font-size: 14px;
    }
  }
}
</style>