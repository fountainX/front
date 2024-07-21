<template>
  <el-divider content-position="left">
    <h2>确认报价</h2>
  </el-divider>
  <div class="desc">
    <el-descriptions :title="'订单号：' + order_no" :column="2">
      <el-descriptions-item :span="2" label="客户名字：">{{ order.userName }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="持有公司股权超过50%公司的个数：">{{ order.number }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="每年股票交易（包括中国大陆 香港 美国等）笔数（>10）:">{{ order.transactions }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="费用：">{{ order.oldTotalPrice }}美元</el-descriptions-item>
    </el-descriptions>
    <div class="total-price">
      <span>原价：</span>
      <span class="price">{{ order.isDollar ? '$' : '￥' }}{{ order.oldTotalPrice }}</span>
      <span>折扣价：</span>
      <span class="price">{{ order.isDollar ? '$' : '￥' }}{{ order.totalPrice }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, inject } from 'vue'
export default defineComponent({
  components: {},
  props: {
    order: {
      type: Object
    },
    order_no: {
      type: String
    }
  },
  emits: ['update'],
  setup(props, context) {
    const ruleListDataC = inject('ruleListDataC') as any
    const order = ref(props.order)
    const showType = (type: any) => {
      console.log(type)
      ruleListDataC.forEach((element) => {
        if (element.vale_type == type) {
          return element.rule_content
        }
      })
    }
    return {
      order,
      order_no: props.order_no,
      ruleListDataC,
      showType
    }
  }
})
</script>

<style lang="scss" scoped>
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

.box {
  display: inline-block;
  width: 290px;
}

:deep(.el-descriptions__label) {
  display: inline-block;
  width: 390px;
  text-align: right;
}
</style>
