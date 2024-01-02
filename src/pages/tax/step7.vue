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
            <Document style="width: 1.3em; color: #999; vertical-align: sub; margin-right: 8px" />
            {{ sign.pdfPath }}
            <a :href="'https://narcissus-me.s3.ap-northeast-1.amazonaws.com/' + sign.pdfPath" download="download">下载</a>
          </td>
        </tr>
        <!-- <tr>
          <td class="table-cell">
            <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />回传签字资料.pdf
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
  <br />
  <br />
  <el-alert :title="mark" type="info" />
  <br />
  <div>
    <el-upload :file-list="fileList" action="" :http-request="subUploadFile" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" style="width: 100%" alt="Preview Image" />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { uploadSingleFile } from '@/http/api/order.ts'

import type { UploadProps, UploadUserFile } from 'element-plus'
export default defineComponent({
  components: {},
  props: {
    sign: {
      type: Object
    },
    orderId: String
  },
  emits: ['update'],
  setup(props, context) {
    const fileList = ref<UploadUserFile[]>([])
    if (props.sign.imageList) {
      props.sign.imageList.map((item: any) => {
        fileList.value.push({
          url: item
        })
      })
    }
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
        let data = res.data
        fileList.value.push({
          url: 'https://narcissus-me.s3.ap-northeast-1.amazonaws.com/' + data.file_name,
          name: ''
        })
        // console.log(fileList.map(item=>item.url));
        context.emit(
          'update',
          fileList.value.map((item) => item.url)
        )
        return true
      })
    }
    return {
      fileList,
      sign,
      mark,
      subUploadFile
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
  .desc{
    margin-top: 30px;
  }
</style>