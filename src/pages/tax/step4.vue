<template>
  <el-divider content-position="left">
    <h2>付款</h2>
  </el-divider>
  <div class="desc">付款</div>
  <div>
    <el-upload :file-list="fileList" :http-request="subUploadFile" action="" accept="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img style="width: 100%;" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineProps, defineComponent, defineEmits } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { uploadSingleFile } from '@/http/api/order.ts'
import type { UploadProps, UploadUserFile } from 'element-plus'

export default defineComponent({
  components: {},
  props: {
    pay: {
      type: Object
    },
    orderId: String
  },
  emits: ['update'],
  setup(props, context) {
    const fileList = ref<UploadUserFile[]>([])
    fileList.value = props.pay.voucher.map((item) => {
      return {
        url: item,
        name: item
      }
    })
    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)

    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
      fileList.value = uploadFiles
      context.emit('update', fileList.value.map(item=>item.url))
    }

    const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url!
      dialogVisible.value = true
    }

    const subUploadFile = (param) => {
      console.log(param)
      const formData = new FormData()
      formData.append('file', param.file)
      console.log(formData, param.file.size)
      // 限制上传超过100M
      if (parseInt(param.file.size / 1000) > 1024 * 100) {
        ElMessage.error('文件大小不能超过100M')
        return
      }
      return uploadSingleFile({ formData: formData, order_status: 12, order_id: props.orderId }).then((res) => {
        console.log('imgList', fileList.value)
        let data = res.data
        fileList.value.push({url:'https://narcissus-me.s3.ap-northeast-1.amazonaws.com/' + data.file_name,name:""})
        // console.log(fileList.map(item=>item.url));
        context.emit('update', fileList.value.map(item=>item.url))
        return true
      })
    }
    return {
      fileList,
      dialogImageUrl,
      dialogVisible,
      handleRemove,
      handlePictureCardPreview,
      subUploadFile
    }
  }
})
</script>
<style lang="scss" scoped>
  .desc{
    margin-top: 30px;
  }
</style>
