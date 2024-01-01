<template>
  <el-divider content-position="left">
    <h2>付款</h2>
  </el-divider>
  <div class="desc">付款</div>
  <div>
    <el-upload
      v-model:file-list="fileList"
      :http-request="subUploadFile"
      action=""
      accept=""
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { uploadSingleFile } from '@/http/api/order.ts'

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://img2.baidu.com/it/u=1570247328,458070796&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=410',
  },
  {
    name: 'food.jpeg',
    url: 'https://img2.baidu.com/it/u=4236181049,2598982592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083',
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

const subUploadFile = (param) => {
  const formData = new FormData()
  formData.append('file', param.file)
  console.log(formData, param.file.size)
  // 限制上传超过100M
  if (parseInt(param.file.size / 1000) > 1024 * 100) {
    ElMessage.error('文件大小不能超过100M')
    return
  }
  uploadSingleFile({ formData: formData, order_status: 'PAID', order_id: 1 })
    .then(res => {
      console.log('imgList', fileList.value)
    })
    .catch(err => {
      console.log(err)
    })
}
</script>