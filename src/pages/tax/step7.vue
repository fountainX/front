<template>
  <el-divider content-position="left">
    <h2>回传签字</h2>
  </el-divider>
  <div class="desc">以下是回传签字资料PDF文件，下载请按要求签字</div>
  <div class="table-container">
    <table class="table-layout">
      <tbody>
        <tr>
          <td class="table-cell">
            <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />回传签字资料.pdf
          </td>
        </tr>
        <tr>
          <td class="table-cell">
            <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />回传签字资料.pdf
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <br />
  <el-alert title="注：请在第4页、第5页右下角签字后扫描复印件或手机拍照上传" type="info" />
  <br />
  <div>
    <el-upload
      v-model:file-list="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" style="width:100%" alt="Preview Image" />
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://img1.baidu.com/it/u=3246450563,2285289250&fm=253&fmt=auto&app=138&f=JPEG?w=540&h=360',
  },

])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
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