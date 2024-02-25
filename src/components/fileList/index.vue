<!-- 图片和PDF -->
<template lang="">
  <div>
    <!-- <el-image class="item" :src="pdfImage" style="width: 100px; height: 100px"></el-image>
    <embed :src="testPDF + '#toolbar=0'" type="application/pdf" width="100%" height="600px" /> -->

    <div class="file-container">
      <div class="sub-container" v-for="(item, index) in list" :key="item.file_name">
        <el-icon v-if="props.showRemove" size="16" class="remove" @click.stop="remove(index)"><Delete /></el-icon>
        <el-image :style="{ width: props.size + 'px'}" class="item" v-if="item.extension == 'pdf'" :src="pdfImage" @click="showPDF(item)"></el-image>
        <el-image :style="{ width: props.size + 'px'}" class="item" v-else-if="item.extension == 'jpg' || item.extension == 'png' || item.extension == 'jpeg'" :src="$filePath +  encodeURIComponent(item.file_name)" :preview-src-list="[$filePath + encodeURIComponent(item.file_name)]" fit="contain" />
        <el-image :style="{ width: props.size + 'px'}" class="item" v-else-if="item.extension == 'doc' || item.extension == 'docx'" :src="docImage" @click="down(item)"></el-image>
        <el-image :style="{ width: props.size + 'px'}" class="item" v-else-if="item.extension == 'xls' || item.extension == 'xlsx'" :src="xlsImage" @click="down(item)"></el-image>
        <el-image :style="{ width: props.size + 'px'}" class="item" v-else-if="item.extension == 'ppt' || item.extension == 'pptx'" :src="ppfImage" @click="down(item)"></el-image>
        <el-image :style="{ width: 60 + 'px'}" class="item" v-else-if="item.extension == 'zip' || item.extension == 'rar'" :src="rarImage" @click="down(item)"></el-image>
        <el-image :style="{ width: props.size + 'px'}" class="item" v-else :src="otherImage" @click="down(item)"></el-image>

        <div style="display: flex">
          <div class="title" :title="item.file_name">{{ decodeURIComponent(item.file_name) }}</div>
          <a class="dw" v-if="props.showDownload" :href="$filePath + encodeURIComponent(item.file_name)" download>下载</a>
        </div>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="预览">
      <embed :src="[$filePath + encodeURIComponent(currentPDF.file_name)]" type="application/pdf" width="100%" height="600px" />
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import pdfImage from './pdf.png'
import docImage from './word.png'
import xlsImage from './excel.png'
import ppfImage from './ppt.png'
import otherImage from './other.png'
import rarImage from './rar.png'
export default defineComponent({
  components: {},
  props: {
    list: {
      type: Array
    },
    showRemove: {
      type: Boolean
    },
    showDownload: {
      type: Boolean
    },
    size: {
      type: Number
    }
  },
  emits: ['remove'],
  setup(props, context) {
    const list = ref(props.list)
    const dialogVisible = ref(false)
    const currentPDF = ref()
    const instance = getCurrentInstance()
    const showPDF = (item) => {
      currentPDF.value = item
      dialogVisible.value = true
    }
    const remove = (index) => {
      context.emit('remove', index)
    }
    const down = async (item) => {
      // 创建一个虚拟的链接
      const a = document.createElement('a')
      a.href = instance.appContext.config.globalProperties.$filePath + item.file_name
      // debugger
      a.download = item.file_name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      // 现在您可以使用生成的图像数据进行其他操作，比如展示在页面上或者发送到服务器
    }
    onMounted(() => {
      // console.log(this.$filePath)
    })
    return {
      list,
      pdfImage,
      otherImage,
      rarImage,
      docImage,
      ppfImage,
      xlsImage,
      currentPDF,
      dialogVisible,
      showPDF,
      remove,
      down,
      props
    }
  }
})
</script>
<style lang="scss" scoped>
.title {
  // max-width: 100px;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}

.el-image__inner {
  background: #FFF;
}

.pdf {}

.dw {
  padding: 0 10px;
  margin: 0 10px;
  border: 1px solid #409eff;
  border-radius: 3px;
  color: #409eff;
  background: #f3f7fb;
  font-size: 12px;
}

.file-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sub-container {
  word-break: break-all;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px dotted #ccc;
  padding: 10px;
  width: 100%;
  background: #FFF;

  .remove {
    display: none;
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: 99;
  }

  &:hover {
    .remove {
      display: inline-block;
    }
  }
}

.item {
  position: relative;
  border: 1px dashed #ccc;
  cursor: pointer;
  margin-right: 10px;
}

.el-upload-list__item .el-upload-list__item-info {
  opacity: 0;
}
</style>
