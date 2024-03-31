<template>
  <el-divider content-position="left">
    <h2>其他-墨西哥商务签证</h2>
  </el-divider>
  <div style="margin-left: 50px; margin-top: 20px">
    <div class="total-price" style="text-align: left">
      <span>原价：</span>
      <span class="price">{{ ruleListDataC[0].price }}</span>
      <br />
      <span>折扣价：</span>
      <span class="price">{{ (ruleListDataC[0].price * rate) / 100 }}</span>
    </div>

    <el-button plain @click="nonUS()">联系客服</el-button>
  </div>
  <el-dialog v-model="dialogFormVisible" title="联系客服">
    <SeekAdvice :params="query"></SeekAdvice>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, ref } from 'vue'
import { ruleList, agentList, invoiceList } from '@/http/api/pub.ts'
import SeekAdvice from '@/pages/customerService/index.vue'

export default defineComponent({
  components: { SeekAdvice },
  setup(props, context) {
    let dialogFormVisible = ref(false)
    let query = reactive({})
    const nonUS = () => {
      dialogFormVisible.value = true
      if (props.orderId) {
        query.orderId = props.orderId
      }
      if (props.orderStatus) {
        query.orderStatus = props.orderStatus
      }

      // router.push({ name: 'customerService', query: query })
    }
    const couponInfo = JSON.parse(localStorage.getItem('couponInfo') || '{}')
    const rate = couponInfo.rate || 100
    const ruleListDataC = ref([{}])
    const getRuleList = () => {
      // TAX   ANNUAL_REVIEW  ACCOUNTING    REGISTER_COMPANY  SALE_TAX
      let region = 'US'
      ruleList({ page: 1, count: 20, businessType: 93, region: region, company_type: 'C' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataC.value = list
      })
    }
    onMounted(() => {
      getRuleList()
    })
    return {
      nonUS,
      dialogFormVisible,
      query,
      rate,
      ruleListDataC,
      getRuleList
    }
  }
})
</script>

<style lang="scss" scoped>
.tip {
  font-size: 12px;
  width: 100%;
  color: #ccc;
}

.desc {
  font-size: 14px;
  color: #ccc;
  line-height: 50px;
}

.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: '';
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}
</style>

<style lang="scss" scoped>
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

div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
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
