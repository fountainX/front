<template>
  <el-divider content-position="left">
    <h2>确认报价</h2>
  </el-divider>
  <div class="desc">
    <el-descriptions :title="'订单号：' + order_no" :column="2">
      <el-descriptions-item :span="2" label="所在地区：">{{ order.regionText }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="公司类型：">{{ order.companyType == 1 ? 'C' : 'LLC' }}</el-descriptions-item>

      <template v-if="order.companyType == 1">
        <template v-for="item in ruleListDataC" :key="item.field_name">
          <template v-if="item.field_name == 'registration'">
            <el-descriptions-item :span="2" label="注册费用：">{{ item.price }}</el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'is_apply_ssn_ein'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.isApplySsnEin ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.isApplySsnEin ? item.price : 0 }}
            </el-descriptions-item>
          </template>
        </template>
      </template>
      <template v-if="order.companyType == 2">
        <template v-for="item in ruleListDataLLC" :key="item.field_name">
          <template v-if="item.field_name == 'registration'">
            <el-descriptions-item :span="2" label="注册费用：">{{ item.price }}</el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'is_apply_ssn_ein'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.isApplySsnEin ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.isApplySsnEin ? item.price : 0 }}
            </el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'is_chinese_name'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.is_chinese_name ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.is_chinese_name ? item.price : 0 }}
            </el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'shareholders'">
            <el-descriptions-item label="股东数大于5的个数：">{{ order.shareholders }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.shareholders * item.price }}
            </el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'certificate_of_incumbency'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.certificate_of_incumbency ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.certificate_of_incumbency ? item.price : 0 }}
            </el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'certificate_of_incumbency_num'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.certificate_of_incumbency_num }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.certificate_of_incumbency_num * item.price }}
            </el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'certificate_of_good_standing'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.certificate_of_good_standing ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.certificate_of_good_standing ? item.price : 0 }}
            </el-descriptions-item>
          </template>

          <template v-if="item.field_name == 'express_service'">
            <el-descriptions-item :label="item.rule_content + '：'">{{ order.express_service ? '是' : '否' }}</el-descriptions-item>
            <el-descriptions-item label="费用：">
              {{ order.express_service ? item.price : 0 }}
            </el-descriptions-item>
          </template>

        </template>
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
