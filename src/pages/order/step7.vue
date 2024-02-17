<template>
  <el-divider content-position="left">
    <h2>回传签字</h2>
  </el-divider>
  <div class="desc">以下是回传签字资料PDF文件，下载请按要求签字</div>
  <br />
  <div class="table-container">
    <FileList :list="[sign.pdf]" :size="50" :showDownload="true" />
  </div>
  <br />
  <span>提示：签字内容请参考以下示例</span>
  <br />
  <FileList :key="templateList.length" :list="transferFile(templateList)" :showDownload="true" :size="50" />

  <!-- <table class="table-layout">
    <tbody>
      <tr v-for="(item, index) in templateList">
        <td class="table-cell">
          <Document style="width: 1.3em; color: #999; vertical-align: sub; margin-right: 8px" />
          {{ item.file_name }}
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
  <br />
  <el-alert :title="mark" type="warning" />
  <br />
  <div>
    <el-upload class="upload" :http-request="subUploadFile" :show-file-list="false" action="" accept="image/*,.pdf">
      <div style="height: 100%; width: 150px">
        <el-icon>
          <Plus class="upload-text" />
        </el-icon>
      </div>
    </el-upload>
    <FileList :list="fileList" style="margin-top: 10px" @remove="remove" :showRemove="true" :size="150" />
    <!-- <el-upload :file-list="fileList" action="" :http-request="subUploadFile" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" style="width: 100%" alt="Preview Image" />
    </el-dialog> -->
  </div>
  <!-- <el-dialog v-model="dialogVisible1" title="预览">
    <embed :src="[$filePath + current]" type="application/pdf" width="100%" height="600px" />
  </el-dialog>
  <el-dialog v-model="dialogVisible2" title="预览">
    <el-image :src="$filePath + current" style="height: 400px; margin: 0 auto; display: block" fit="contain" />
  </el-dialog> -->
</template>
<script lang="ts">
import { ref, defineComponent, inject } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { uploadSingleFile, getTemplate } from '@/http/api/order.ts'
import FileList from '@/components/fileList/index.vue'
import { ElMessage } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'
export default defineComponent({
  components: { FileList },
  props: {
    sign: {
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
    const templateList = ref<any[]>([])

    const fileList = ref<UploadUserFile[]>(props.sign.imageList)
    const sign = ref(props.sign)
    console.log('sign', props)
    let mark = '注：请在'
    sign.value.mark.map((item, index) => {
      let page = item.page
      let desc = item.desc
      mark += '第' + page + '页'
      mark += desc + '处'
      if (index < sign.value.mark.length - 1) {
        mark += '、'
      }
    })

    mark += '签字后扫描复印件或手机拍照上传'
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
      console.log(param)
      const formData = new FormData()
      formData.append('file', param.file)
      console.log(formData, param.file.size)
      // 限制上传超过100M
      if (parseInt(param.file.size / 1000) > 1024 * 100) {
        ElMessage.error('文件大小不能超过100M')
        return
      }
      return uploadSingleFile({
        formData: formData,
        order_status: 17,
        order_id: props.orderId
      }).then((res) => {
        console.log('imgList', fileList.value)
        ElMessage.success('文件上传成功')
        let data = res.data
        const extension = data.file_name.split('.').pop()
        fileList.value.push({ file_name: data.file_name, extension: extension })

        // console.log(fileList.map(item=>item.url));
        context.emit('update', fileList.value)
        return true
      })
    }
    const getTemplateList = () => {
      getTemplate({ business_type: typeValue, order_status: 17 }).then((res) => {
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
    const remove = (index) => {
      fileList.value.splice(index, 1)
      context.emit('update', fileList.value)
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
      sign,
      mark,
      subUploadFile,
      getTemplateList,
      preview1,
      preview2,
      getExtension,
      remove,
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
