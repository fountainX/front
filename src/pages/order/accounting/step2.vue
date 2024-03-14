<template>
  <el-divider content-position="left">
    <h2>确认报价</h2>
  </el-divider>
  <div class="desc">
    <el-descriptions :title="'订单号：' + order_no" :column="2">
      <el-descriptions-item :span="2" label="所在州：">{{ order.regionText }}</el-descriptions-item>
      <!-- <el-descriptions-item :span="2" label="公司类型：">{{ order.companyType == 1 ? 'C' : 'LLC' }}</el-descriptions-item> -->

      <template v-if="order.companyType == 1">
        <el-descriptions-item label="是否电商：">{{ order.is_e_commerce ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item v-if="order.is_e_commerce" label="电商类型：">
          {{ order.e_type == 1 ? '有固定资产/存货' : '无固定资产/存货' }}
        </el-descriptions-item>

        <el-descriptions-item v-if="order.is_e_commerce" label="报价类型：">
          {{ getItemFromC(order.e_price_type).rule_content }}
          <!-- 查找报价类型 -->
        </el-descriptions-item>
        <el-descriptions-item v-if="order.is_e_commerce" label="费用：">
          {{ getItemFromC(order.e_price_type).price }}
          <!-- 查找报价类型的费用 -->
        </el-descriptions-item>
        <el-descriptions-item v-if="!order.is_e_commerce" label="银行流水笔数：">
          {{ getItemFromC(order.bank_count).rule_content }}
          <!-- 查找银行流水笔数 -->
        </el-descriptions-item>
        <el-descriptions-item v-if="!order.is_e_commerce" label="费用：">
          {{ getItemFromC(order.bank_count).price }}
          <!-- 查找银行流水笔数对应的费用 -->
        </el-descriptions-item>
      </template>

      <template v-if="order.companyType == 2">
        <el-descriptions-item label="是否电商：">{{ order.is_e_commerce ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item v-if="order.is_e_commerce" label="电商类型：">
          {{ order.e_type == 1 ? '有固定资产/存货' : '无固定资产/存货' }}
        </el-descriptions-item>

        <el-descriptions-item v-if="order.is_e_commerce" label="报价类型：">
          {{ getItemFromLLC(order.e_price_type).rule_content }}
          <!-- 查找报价类型 -->
        </el-descriptions-item>
        <el-descriptions-item v-if="order.is_e_commerce" label="费用：">
          {{ getItemFromLLC(order.e_price_type).price }}
          <!-- 查找报价类型的费用 -->
        </el-descriptions-item>
        <el-descriptions-item v-if="!order.is_e_commerce" label="银行流水笔数：">
          {{ getItemFromLLC(order.bank_count).rule_content }}
          <!-- 查找银行流水笔数 -->
        </el-descriptions-item>
        <el-descriptions-item v-if="!order.is_e_commerce" label="费用：">
          {{ getItemFromLLC(order.bank_count).price }}
          <!-- 查找银行流水笔数对应的费用 -->
        </el-descriptions-item>
      </template>
    </el-descriptions>
    <div class="total-price">
      <span>原价：</span>
      <span class="price">{{ order.isDollar ? "$" : "￥" }}{{ order.oldTotalPrice }}</span>
      <span>折扣价：</span>
      <span class="price">{{ order.isDollar ? "$" : "￥" }}{{ order.totalPrice }}</span>
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
    const ruleListDataC = inject('ruleListDataC')
    const ruleListDataLLC = inject('ruleListDataLLC')
    const order = ref(props.order)
    const getItemFromC = (id) => {
      let item = ruleListDataC.value.find((item) => {
        return item.id == id
      })
      if (item) {
        return item
      } else {
        return {}
      }
    }
    const getItemFromLLC = (id) => {
      let item = ruleListDataLLC.value.find((item) => {
        return item.id == id
      })
      if (item) {
        return item
      } else {
        return {}
      }
    }
    return {
      order,
      order_no: props.order_no,
      ruleListDataC,
      ruleListDataLLC,
      getItemFromC,
      getItemFromLLC
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

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}

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

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}

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
</style>
