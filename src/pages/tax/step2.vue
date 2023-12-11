<template>
  <el-divider content-position="left">
    <h2>确认报价</h2>
  </el-divider>
  <div class="desc"></div>
  <el-form label-position="right" label-width="140px" size="default" @submit.prevent>
    <el-row>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="选择区域：" prop="selectArea" class="label-right-align">
          加州
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="公司类型：" prop="incType" class="label-right-align">
          LLC
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <div class="static-content-item">
          <div>报价：<span class="price">$260</span></div>
        </div>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="公司主营业务类型：" prop="businessType" class="label-right-align">
          <el-radio-group>
            <div class="table-container">
              <table class="table-layout">
                <tbody>
                  <tr>
                    <!-- <td class="table-cell" bgcolor="#f1f1f1" style="width: 80px;">选择</td> -->
                    <td class="table-cell" bgcolor="#f1f1f1">收入(美金)</td>
                    <td class="table-cell" bgcolor="#f1f1f1">报价</td>
                    <td class="table-cell" bgcolor="#f1f1f1">备注</td>
                    <td class="table-cell" bgcolor="#f1f1f1">区域</td>
                  </tr>
                  <tr v-for="(item, index) in businessTypeOptions">
                    <!-- <td class="table-cell">
                      <el-radio :key="index" :label="item.value" :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
                    </td> -->
                    <td class="table-cell">{{ item.income }}万</td>
                    <td class="table-cell"><span class="price">${{ item.price }}</span></td>
                    <td class="table-cell">{{ item.remark }}</td>
                    <td class="table-cell">{{ item.area }}</td>
                  </tr>
                  <tr>
                    <td class="table-cell" colspan="4" style="text-align: left; padding: 10px;">
                      在美有2家子公司
                      报价：<span class="price">${{ 2 * 200 }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-cell" colspan="4" style="text-align: left;padding: 10px;">
                      子公司为非美国公司有1家
                      报价：<span class="price">${{ 1 * 1000 }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="主营业务收入：" prop="businessIncome" class="required label-right-align">
          $20万美元
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="公司资产总额：" prop="total1" class="required label-right-align">
          $20万美元
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="固定资产金额：" prop="total2" class="required label-right-align">
          $20万美元
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="是否有资金往来：" prop="isFlow" class="label-right-align">
          是
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="是否有子公司：" prop="isChild" class="label-right-align">
          是
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="合计：" prop="isChild" class="label-right-align">
          <span class="price" style="font-size: 30px;">$2660</span>
        </el-form-item>
      </el-col>
    </el-row>

  </el-form>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
export default defineComponent({
  components: {},
  props: {},
  setup() {
    const state = reactive({
      businessTypeOptions: [{
        "label": "选择",
        "value": 0,
        income: '0',
        price: 260,
        remark: '0资产运营',
        area: '特拉华州 华盛顿  佛罗里达'
      }],
    })
    return {
      ...toRefs(state)
    }
  }
})

</script>

<style lang="scss">
.desc {
  font-size: 14px;
  color: #ccc;
  line-height: 50px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #67C23A;
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
  content: "";
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
</style>