<template>
  <el-divider content-position="left">
    <h2>上传资料</h2>
  </el-divider>
  <div class="desc">上传资料</div>
  <div class="table-container">
    <table class="table-layout">
      <tbody>
        <tr v-for="(item, index) in templateList">
          <td class="table-cell">
            <Document style="width: 1.3em; color: #999; vertical-align: sub; margin-right: 8px" />
            {{ item.file_name }}
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <el-button @click="down">下载全部资料</el-button>
  </div>
  <br />
  <br />
  <el-upload class="upload-demo" :file-list="fileList" :http-request="subUploadFile" multiple action="" accept="" :on-remove="handleRemove">
    <el-button type="primary">上传资料</el-button>
  </el-upload>
</template>
<script lang="ts">
import { ref, defineProps, defineComponent, defineEmits } from 'vue'
import { uploadSingleFile, getTemplate, uploadMultipleFile } from '@/http/api/order.ts'

import type { UploadProps, UploadUserFile } from 'element-plus'

export default defineComponent({
  components: {},
  props: {
    upload: {
      type: Object
    },
    orderId: String
  },
  emits: ['update'],
  setup(props, context) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
    const fileList = ref<UploadUserFile[]>([...props.upload.list])
    const templateList = ref<any[]>([])
    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
      fileList.value = uploadFiles
      context.emits('update', fileList)
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
        let file = {
          uid: data.create_at,
          updateTime: data.updateTime,
          name: data.file_name,
          url: 'https://narcissus-me.s3.ap-northeast-1.amazonaws.com/' + data.file_name,
          account: userInfo.user_name
        }
        fileList.value.push(file)
        context.emit('update', fileList)
        return true
      })
    }
    const getTemplateList = () => {
      getTemplate({ business_type: 10, order_status: 15 }).then((res) => {
        templateList.value = res.data
        console.log(templateList)
      })
    }
    const down = () => {
      templateList.value.map((item, index) => {
        setTimeout(() => {
          downFile('https://narcissus-me.s3.ap-northeast-1.amazonaws.com/' + item.file_name, item.file_name)
        }, index * 1000)
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
    getTemplateList()
    return {
      fileList,
      handleRemove,
      templateList,
      subUploadFile,
      getTemplateList,
      downFile,
      down
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
  .desc{
    margin-top: 30px;
  }
</style>