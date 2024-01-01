<template>
  <el-divider content-position="left">
    <h2>报价</h2>
  </el-divider>
  <div class="desc">选择您想要的州和业务类型，然后选择您的附加组件以开始您的订单</div>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="140px"
    size="default" @submit.prevent>
    <el-row>
      <el-col :span="8" class="grid-cell">
        <el-form-item label="选择区域：" prop="selectArea" class="label-right-align">
          <el-select v-model="formData.selectArea" class="full-width-input" placeholder="请选择" clearable>
            <el-option v-for="(item, index) in selectAreaOptions" :key="index" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="16" class="grid-cell">
        <el-form-item label="" prop="noUSA">
          <el-radio-group v-model="formData.noUSA">
            <el-radio v-for="(item, index) in noUSAOptions" :key="index" :label="item.value"
              :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="公司类型：" prop="incType" class="label-right-align">
          <el-radio-group v-model="formData.incType">
            <el-radio v-for="(item, index) in incTypeOptions" :key="index" :label="item.value"
              :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <div class="static-content-item">
          <div>报价：<span class="price">$260</span></div>
        </div>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="公司主营业务类型：" prop="businessType" class="label-right-align">
          <el-radio-group v-model="formData.businessType">
            <div class="table-container">
              <table class="table-layout">
                <tbody>
                  <tr>
                    <td class="table-cell" bgcolor="#f1f1f1" style="width: 80px;">选项</td>
                    <td class="table-cell" bgcolor="#f1f1f1" style="width: 100px;">收入(美金)</td>
                    <td class="table-cell" bgcolor="#f1f1f1" style="width: 100px;">报价</td>
                    <td class="table-cell" bgcolor="#f1f1f1">备注</td>
                    <td class="table-cell" bgcolor="#f1f1f1">区域</td>
                  </tr>
                  <tr v-for="(item, index) in businessTypeOptions">
                    <td class="table-cell">
                      <el-radio :key="index" :label="item.value" :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
                    </td>
                    <td class="table-cell">{{ item.income }}万</td>
                    <td class="table-cell"><span class="price">${{ item.price }}</span></td>
                    <td class="table-cell">{{ item.remark }}</td>
                    <td class="table-cell">{{ item.area }}</td>
                  </tr>
                  <tr>
                    <td class="table-cell" colspan="5" style="text-align: left; padding: 10px;">
                      在美有<el-input size="small" v-model="formData.input1" placeholder="" style="width: 50px;" />家子公司
                      报价：<span class="price">${{ formData.input1 * 200 }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-cell" colspan="5" style="text-align: left;padding: 10px;">
                      子公司为非美国公司有<el-input size="small" v-model="formData.input2" placeholder="" style="width: 50px;" />家
                      报价：<span class="price">${{ formData.input2 * 1000 }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="主营业务收入：" prop="businessIncome" class="required label-right-align">
          <el-input v-model="formData.businessIncome" type="text" style="width:160px" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="公司资产总额：" prop="total1" class="required label-right-align">
          <el-input v-model="formData.total1" type="text" style="width:160px" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="固定资产金额：" prop="total2" class="required label-right-align">
          <el-input v-model="formData.total2" type="text" style="width:160px" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="grid-cell">
        <el-form-item label="是否有资金往来：" prop="isFlow" class="label-right-align">
          <el-radio-group v-model="formData.isFlow">
            <el-radio v-for="(item, index) in isFlowOptions" :key="index" :label="item.value"
              :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="16" class="grid-cell">
        <div class="static-content-item">
          <el-alert title="注：关联方包括母公司、子公司或同一控制人下的其他兄弟公司" type=info :closable="true" :center="true"
            :show-icon="false" effect="light">
          </el-alert>
        </div>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="是否有子公司：" prop="isChild" class="label-right-align">
          <el-radio-group v-model="formData.isChild">
            <el-radio v-for="(item, index) in isChildOptions" :key="index" :label="item.value"
              :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

  </el-form>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance, onMounted } from 'vue'
import { regionList } from '@/http/api/pub.ts'
export default defineComponent({
  components: {},
  props: {},
  setup() {
    const state = reactive({
      formData: {
        selectArea: "",
        noUSA: '',
        incType: null,
        businessType: null,
        businessIncome: "",
        total1: "",
        total2: "",
        isFlow: null,
        isChild: 1,
        input1: '',
        input2: '',
      },
      rules: {
        businessIncome: [{
          required: true,
          message: '字段值不可为空',
        }, {
          pattern: /^[-]?\d+(\.\d+)?$/,
          trigger: ['blur', 'change'],
          message: ''
        }],
        total1: [{
          required: true,
          message: '字段值不可为空',
        }, {
          pattern: /^[-]?\d+(\.\d+)?$/,
          trigger: ['blur', 'change'],
          message: ''
        }],
        total2: [{
          required: true,
          message: '字段值不可为空',
        }, {
          pattern: /^[-]?\d+(\.\d+)?$/,
          trigger: ['blur', 'change'],
          message: ''
        }],
      },
      selectAreaOptions: [],
      noUSAOptions: [{
        "label": "非美国",
        "value": 1
      }],
      incTypeOptions: [{
        "label": "C公司",
        "value": 1
      }, {
        "label": "LLC",
        "value": 2
      }],
      businessTypeOptions: [{
        "label": "选择",
        "value": 1,
        income: '0',
        price: 260,
        remark: '0资产运营',
        area: '特拉华州 华盛顿  佛罗里达'
      }, {
        "label": "选择",
        "value": 2,
        income: '0',
        price: 300,
        remark: '包括简单调账',
        area: '其他州'
      }, {
        "label": "选择",
        "value": 3,
        income: '25',
        price: 400,
        remark: '',
        area: ''
      }, {
        "label": "选择",
        "value": 4,
        income: '25-100',
        price: 600,
        remark: '',
        area: ''
      }, {
        "label": "选择",
        "value": 5,
        income: '100-200',
        price: 700,
        remark: '',
        area: ''
      }, {
        "label": "选择",
        "value": 6,
        income: '200-500',
        price: 800,
        remark: '',
        area: ''
      }],
      isFlowOptions: [{
        "label": "是",
        "value": 1
      }, {
        "label": "否",
        "value": 2
      }],
      isChildOptions: [{
        "label": "是",
        "value": 1
      }, {
        "label": "否",
        "value": 2
      }],
    })
    const instance = getCurrentInstance()
    const submitForm = () => {
      instance.proxy.$refs['vForm'].validate(valid => {
        if (!valid) return
        //TODO: 提交表单
      })
    }
    const resetForm = () => {
      instance.proxy.$refs['vForm'].resetFields()
    }
    const getRegionList = () => {
      regionList().then((res: any) => {
        console.log('全部州', res)
        state.selectAreaOptions = res.data
      }).catch((e) => {
        console.log(e)
      })
    }
    onMounted(() => {
      getRegionList()
    })

    return {
      ...toRefs(state),
      submitForm,
      resetForm
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