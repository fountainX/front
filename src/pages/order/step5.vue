<template>
  <el-divider content-position="left">
    <h2>上传资料</h2>
  </el-divider>
  <div class="table-container">
    <FileList :key="templateList.length" :showDownload="true" :list="transferFile(templateList)" :size="100" />

    <!-- <table class="table-layout">
      <tbody>
        <tr v-for="(item, index) in templateList">
          <td class="table-cell">
            <Document style="width: 1.3em; color: #999; vertical-align: sub; margin-right: 8px" />
            {{ item.file_name }}
            <el-button size="small" @click="downFile(item, item.file_name)">下载</el-button>
          </td>
        </tr>
      </tbody>
    </table> -->
    <br />
    <el-button type="primary" plain @click="down">下载全部资料</el-button>
  </div>
  <br />
  <br />
  <!-- <el-upload class="upload-demo" :file-list="fileList" :http-request="subUploadFile" multiple action="" accept="" :on-remove="handleRemove">
    <el-button type="primary">上传资料</el-button>
  </el-upload> -->
  <el-upload class="upload" :http-request="subUploadFile" action="" accept="image/*,.pdf,.zip,.rar">
    <div style="height: 100%; width: 150px">
      <el-icon>
        <Plus class="upload-text" />
      </el-icon>
    </div>
  </el-upload>
  <FileList :list="fileList" :size="150" :showRemove="true" @remove="remove" />
</template>
<script lang="ts">
import { ref, defineProps, defineComponent, defineEmits, reactive, inject } from 'vue'
import { uploadSingleFile, getTemplate, uploadMultipleFile, downloadZip } from '@/http/api/order.ts'
import FileList from '@/components/fileList/index.vue'
import { useRouter, useRoute } from 'vue-router'
import type { ElMessage, UploadProps, UploadUserFile } from 'element-plus'
// import { saveAs } from 'file-saver'
// import FileDownload from 'js-file-download'
// import { debug } from 'console'
export default defineComponent({
  components: { FileList },
  props: {
    upload: {
      type: Object
    },
    orderId: String
  },
  emits: ['update'],
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()
    const typeValue = inject('typeValue')
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
    const fileList = ref<UploadUserFile[]>([...props.upload.list])
    const templateList = ref<any[]>([])
    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
      fileList.value = uploadFiles
      context.emits('update', fileList)
    }
    const remove = (index) => {
      fileList.value.splice(index, 1)
      context.emit('update', fileList.value)
    }

    const subUploadFile = (param) => {
      const formData = new FormData()
      console.log(param)
      formData.append('files', param.file)
      // 限制上传超过100M
      if (parseInt(param.file.size / 1000) > 1024 * 100) {
        ElMessage.error('文件大小不能超过100M')
        return
      }
      return uploadMultipleFile({ formData: formData, order_status: 15, order_id: props.orderId }).then((res) => {
        let data = res.data[0]
        // let file = {
        //   uid: data.create_at,
        //   updateTime: data.updateTime,
        //   name: data.file_name,
        //   url: data.file_name,
        //   account: userInfo.user_name
        // }

        const extension = data.file_name.split('.').pop()
        fileList.value.push({ file_name: data.file_name, extension: extension, account: userInfo.user_name, updateTime: data.updateTime })
        // fileList.value.push(file)
        context.emit('update', fileList)
        return true
      })
    }
    const getTemplateList = () => {
      getTemplate({ business_type: typeValue, order_status: 15 }).then((res) => {
        templateList.value = res.data
        console.log(templateList)
      })
    }
    const down = () => {
      let filenames = ''
      let list = templateList.value.map((item) => {
        filenames += '&fileNames=' + encodeURIComponent(item.file_name)
      })

      downloadZip(props.orderId, filenames)
        .then((response) => {
          // 将响应转换为可下载的格式（例如 Blob 或 ArrayBuffer）
          return response.blob()
        })
        .then((blob) => {
          let type = route.query.type
          let fileName = ''
          switch (type) {
            case 'TAX':
              fileName = '报税_'
              break
            case 'ANNUAL_REVIEW':
              fileName = '年审_'
              break
            case 'ACCOUNTING':
              fileName = '做账_'
              break
            case 'REGISTER_COMPANY':
              fileName = '注册公司_'
              break
            default:
              fileName = '其它'
          }

          // 创建一个下载链接
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = fileName + '上传资料.zip' // 替换为文件名
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
        })
    }
    const downFile = (url, fileName) => {
      const link = document.createElement('a')
      link.href = url
      link.download = 'download'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
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
      handleRemove,
      templateList,
      subUploadFile,
      getTemplateList,
      downFile,
      down,
      remove,
      transferFile
    }
  }
})

// const fileList = ref<UploadUserFile[]>([...props.upload.list])
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
  margin-bottom: 20px;
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
