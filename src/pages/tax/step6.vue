<template>
  <el-divider content-position="left">
    <h2>资料审核</h2>
  </el-divider>
  <div class="desc">资料审核</div>
  <div class="table-container">
    <table class="table-layout">
      <tbody>
        <tr>
          <td class="table-cell" bgcolor="#f1f1f1" style="width: 60px">序号</td>
          <td class="table-cell" bgcolor="#f1f1f1">资料名称</td>
          <td class="table-cell" bgcolor="#f1f1f1" style="width: 80px">状态</td>
          <td class="table-cell" bgcolor="#f1f1f1">备注</td>
        </tr>
        <tr v-for="(item, index) in fileList">
          <td class="table-cell">{{ index + 1 }}</td>
          <td class="table-cell">{{ item.name }}</td>
          <td class="table-cell">{{ item.status == 1 ? '通过' : item.status == -1 ? '不通过' : '审核中' }}</td>
          <td class="table-cell">
            <span v-if="item.status == -1">{{ item.reason }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { ref, defineProps, defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {
    upload: {
      type: Object
    },
    orderId: String
  },
  setup(props, context) {
    const fileList = ref<UploadUserFile[]>([...props.upload.list])
    return {
      fileList
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
      border-bottom: 1px solid #e1e2e3;
      text-align: left;
      font-size: 14px;
    }
  }
}

div.tab-container {
}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {
}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}

div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
      text-align: center;
      font-size: 14px;
    }
  }
}

div.tab-container {
}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {
}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}
</style>
<style lang="scss" scoped>
  .desc{
    margin-top: 30px;
  }
</style>