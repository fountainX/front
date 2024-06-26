<template>
  <el-divider content-position="left">
    <h2>确认报价</h2>
  </el-divider>
  <div class="desc">
    <el-descriptions :title="'订单号：' + order_no" :column="2">
      <el-descriptions-item :span="2" label="所在州：">{{ order.regionText }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="公司类型：">{{ order.companyType == 1 ? 'C' : 'LLC' }}</el-descriptions-item>

      <template v-if="order.companyType == 2">
        <template v-for="item in ruleListDataLLC" ::key="item.field_name">
          <el-descriptions-item v-if="item.field_name == 'is_c_rule'" label="是否按照C公司方式纳税：" :span="2">{{ order.is_c_rule ? '是' : '否' }}</el-descriptions-item>

          <template v-if="order.is_c_rule">
            <el-descriptions-item v-if="item.field_name == 'first_year'" label="是否第一年纳税：">{{ order.first_year ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item v-if="item.field_name == 'first_year'" label="费用：">
              <span v-if="order.first_year">
                {{ item.price }}
              </span>
              <span v-else>0</span>
            </el-descriptions-item>
          </template>

          <template v-else>
            <el-descriptions-item :span="2" v-if="item.field_name == 'has_us_tax_no'" label="是否有美国税号：">{{ order.has_us_tax_no ? '是' : '否' }}</el-descriptions-item>

            <template v-if="!order.has_us_tax_no">
              <el-descriptions-item v-if="item.field_name == 'apply_individual' && order.taxType == 'apply_individual'" label="申请税号类型：">个人股东</el-descriptions-item>
              <el-descriptions-item v-if="item.field_name == 'apply_individual' && order.taxType == 'apply_individual'" label="费用：">{{ item.price }}</el-descriptions-item>
              <el-descriptions-item v-if="item.field_name == 'apply_company' && order.taxType == 'apply_company'" label="申请税号类型：">公司股东</el-descriptions-item>
              <el-descriptions-item v-if="item.field_name == 'apply_company' && order.taxType == 'apply_company'" label="费用：">{{ item.price }}美元</el-descriptions-item>
            </template>
          </template>
        </template>
      </template>

      <el-descriptions-item label="主营业务收入：">{{ order.companyMainIncome.rule_content }}万美元</el-descriptions-item>
      <el-descriptions-item label="费用：">{{ order.companyMainIncome.price || 0 }}美元</el-descriptions-item>

      <el-descriptions-item :span="2" label="主营业务类型：">{{ order.main_business_type }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="公司资产总额：">{{ order.total_asset }}</el-descriptions-item>

      <template v-for="item in ruleListDataC" :key="item.field_name">
        <el-descriptions-item v-if="item.field_name == 'amount_fixed_asset'" label="固定资产金额：">{{ order.amount_fixed_asset || 0 }}万美元</el-descriptions-item>
        <el-descriptions-item v-if="item.field_name == 'amount_fixed_asset'" label="费用：">{{ order.amount_fixed_asset > 0 ? item.price : 0 }}美元</el-descriptions-item>

        <el-descriptions-item v-if="item.field_name == 'exchange_fund_com_number'" label="有资金往来的关联公司数量：">{{ order.exchange_fund_com_number }}</el-descriptions-item>
        <el-descriptions-item v-if="item.field_name == 'exchange_fund_com_number'" label="费用：">{{ (order.exchange_fund_com_number || 0) * item.price }}美元</el-descriptions-item>

        <el-descriptions-item v-if="item.field_name == 'subsidiary_us'" label="在美子公司数：">{{ order.subsidiary_us }}</el-descriptions-item>
        <el-descriptions-item v-if="item.field_name == 'subsidiary_us'" label="费用：">{{ (order.subsidiary_us || 0) * item.price || 0 }}美元</el-descriptions-item>

        <el-descriptions-item v-if="item.field_name == 'subsidiary_non_us_number'" label="非美子公司：">{{ order.subsidiary_non_us_number }}</el-descriptions-item>
        <el-descriptions-item v-if="item.field_name == 'subsidiary_non_us_number'" label="费用：">{{ (order.subsidiary_non_us_number || 0) * item.price || 0 }}美元</el-descriptions-item>
      </template>
    </el-descriptions>
    <div class="total-price">
      <span>原价：</span>
      <span class="price">${{ order.oldTotalPrice }}</span>
      <span>折扣价：</span>
      <span class="price">${{ order.totalPrice }}</span>
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
    return {
      order,
      order_no: props.order_no,
      ruleListDataC,
      ruleListDataLLC
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
