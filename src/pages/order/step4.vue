<template>
  <el-divider content-position="left">
    <h2>付款</h2>
  </el-divider>
  <div>
    <!-- {{fileList}} -->
    <span>提示：付款凭证请参考以下示例</span>

    <FileList style="margin-top: 10px" :key="templateList.length" :list="transferFile(templateList)" :showRemove="false" :size="100" />
    <!-- <table class="table-layout">

      <tbody>
        <tr v-for="(item, index) in templateList">
          <td class="table-cell">
            <el-image :src="$filePath + item.file_name" :preview-src-list="[$filePath + item.file_name]" style="width: 50px; height: 50px"></el-image>
          </td>
          <td>
            <el-button size="small" v-if="getExtension(item.file_name) == 'pdf'" @click="preview1(item.file_name)">查看</el-button>
            <el-button size="small" v-else-if="getExtension(item.file_name) == 'image'" @click="preview2(item.file_name)">查看</el-button>
            <a v-else download="" :href="$filePath + item.file_name">
              <el-button size="small">查看</el-button>
            </a>
          </td>
        </tr>
      </tbody>
    </table> -->
    <el-upload class="upload" :http-request="subUploadFile" action="" accept="image/*,.pdf">
      <div style="height: 100%; width: 150px">
        <el-icon>
          <Plus class="upload-text" />
        </el-icon>
      </div>
    </el-upload>
    <FileList :list="fileList" style="margin-top: 10px" @remove="remove" :showRemove="true" :size="150" />
    <el-dialog v-model="dialogVisible">
      <img style="width: 100%" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
  <el-dialog v-model="dialogVisible1" title="预览">
    <embed :src="[$filePath + current]" type="application/pdf" width="100%" height="600px" />
  </el-dialog>
  <el-dialog v-model="dialogVisible2" title="预览">
    <el-image :src="$filePath + current" style="height: 400px; margin: 0 auto; display: block" fit="contain" />
  </el-dialog>
</template>

<script lang="ts">
import { ref, defineProps, defineComponent, defineEmits,inject } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { uploadSingleFile, getTemplate } from '@/http/api/order.ts'
import type { UploadProps, UploadUserFile } from 'element-plus'
import FileList from '@/components/fileList/index.vue'
import pdfImage from './pdf.png'

export default defineComponent({
  components: { FileList },
  props: {
    pay: {
      type: Object
    },
    orderId: String
  },
  emits: ['update'],
  setup(props, context) {
    const typeValue = inject('typeValue')
    const dialogVisible1 = ref(false)
    const dialogVisible2 = ref(false)
    const current = ref(null)
    const fileList = ref<UploadUserFile[]>(props.pay.voucher)
    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)
    const templateList = ref<any[]>([])

    const remove = (index) => {
      fileList.value.splice(index, 1)
      context.emit('update', fileList.value)
    }
    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
      fileList.value = uploadFiles
      context.emit(
        'update',
        fileList.value.map((item) => item.url)
      )
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
        const extension = data.file_name.split('.').pop()
        fileList.value.push({ file_name: data.file_name, extension: extension })
        // console.log(fileList.map(item=>item.url));
        context.emit('update', fileList.value)
        return true
      })
    }
    const getTemplateList = () => {
      getTemplate({ business_type: typeValue, order_status: 13 }).then((res) => {
        templateList.value = res.data
        console.log(templateList)
      })
    }
    const preview1 = (file_name) => {
      current.value = file_name
      dialogVisible1.value = true
    }
    const preview2 = (file_name) => {
      current.value = file_name
      dialogVisible2.value = true
    }
    const getExtension = (file_name) => {
      const extension = file_name.split('.').pop()
      if (extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'bmp') {
        return 'image'
      } else {
        return extension
      }
    }
    const transferFile = (list) => {
      return list.map((item) => {
        const extension = item.file_name.split('.').pop()
        // debugger;
        return {
          ...item,
          extension: extension
        }
      })
    }
    getTemplateList()
    return {
      fileList,
      dialogImageUrl,
      dialogVisible,
      handleRemove,
      handlePictureCardPreview,
      subUploadFile,
      remove,
      getTemplateList,
      preview1,
      preview2,
      getExtension,
      transferFile,
      templateList,
      dialogVisible1,
      dialogVisible2,
      current
    }
  }
})
</script>
<style lang="scss" scoped>
.desc {
  margin-top: 30px;
}
.upload {
  height: 150px;
  width: 150px;
  border: 1px dashed #ccc;
  font-size: 36px;
  color: #ccc;
  text-align: center;
  line-height: 150px;
  font-weight: bold;
  .upload-text {
    color: #ccc !important;
  }
}
</style>
