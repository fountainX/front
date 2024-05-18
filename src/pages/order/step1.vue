<template>
  <el-divider content-position="left">
    <h2>报价</h2>
  </el-divider>
  <div class="desc">选择您想要的州和业务类型，然后开始创建您的订单</div>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="180px" size="default" @submit.prevent>
    <el-row>
      <el-col :span="16" class="grid-cell">
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="15">
                <el-form-item label="选择区域：" prop="selectRegion" class="label-right-align">
                  <el-select @change="regionChange" v-model="formData.selectRegion" placeholder="请选择" clearable>
                    <el-option v-for="(item, index) in selectAreaOptions" :key="index" :label="item.name" :value="item.code"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="margin-left: 40px">
                <span @click="cs">非美国</span>
                <!-- <el-link to="/customerService">非美国</el-link> -->
                <!--<el-form-item label="" prop="noUSA">
                  <el-radio-group v-model="formData.noUSA">
                    <span
                      v-for="(item, index) in noUSAOptions"
                      :key="index"
                      :label="item.value"
                      :disabled="item.disabled"
                      style="
                         {
                          display: inline;
                        }
                      "
                    >
                      {{ item.label }}
                    </span>
                  </el-radio-group>
                </el-form-item> -->
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="24">
            <el-form-item label="公司类型：" prop="companyType" class="label-right-align">
              <el-radio-group @change="companyChange" v-model="formData.companyType">
                <el-radio
                  v-for="(item, index) in incTypeOptions"
                  :key="index"
                  :label="item.value"
                  :disabled="item.disabled"
                  style="
                     {
                      display: inline;
                    }
                  "
                  @change="companyTypeChange(item.value)">
                  {{ item.label }}
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="公司名称：" class="label-right-align">
              <el-input v-model="company_name" @change="changeCompanyName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="grid-cell">
        <div class="total-price">
          <span>原价</span>
          <span class="price">${{ computedTotalPrice() }}</span><br>
          <span>折扣价：</span>
          <span class="price">${{ (computedTotalPrice() * rate) / 100 }}</span>
          <!-- <span class="price">${{ computedTotalPrice() }}</span> -->
        </div>
      </el-col>
    </el-row>
    <el-row v-if="formData.companyType == 2 && formData.companyType">
      <el-col :span="24" class="grid-cell">
        <el-form-item label="是否按照C公司方式纳税：" prop="is_c_rule" class="required label-right-align">
          <el-switch v-model="formData.is_c_rule" active-text="是" inactive-text="否"></el-switch>
        </el-form-item>
        <el-form-item v-if="formData.is_c_rule" label="是否第一年纳税：" prop="first_year" class="required label-right-align">
          <el-switch v-model="formData.first_year" active-text="是" inactive-text="否"></el-switch>
        </el-form-item>
        <el-form-item v-if="!formData.is_c_rule" label="是否有美国税号：" prop="has_us_tax_no" class="required label-right-align">
          <el-switch v-model="formData.has_us_tax_no" active-text="是" inactive-text="否"></el-switch>
        </el-form-item>
        <el-form-item v-if="!formData.is_c_rule && !formData.has_us_tax_no" label="申请税号：" prop="has_us_tax_no" class="required label-right-align">
          <el-switch v-model="formData.taxType" active-value="apply_individual" inactive-value="apply_company" active-text="申请个人税号" inactive-text="申请公司税号"></el-switch>
        </el-form-item>
      </el-col>

      <!-- <template v-for="(item, index) in formData.ruleListDataLLC">
        <el-col :span="24" class="grid-cell">
          <el-form-item :label="item.rule_content" :prop="item.field_name" class="required label-right-align">


            <el-input v-if="item.vale_type == 'TEXT' || item.vale_type == 'NUMBER' " v-model="formData[item.field_name]" type="text" clearable></el-input>
            <el-switch v-else-if="item.vale_type == 'BOOL'" v-model="formData[item.field_name]" active-text="是" inactive-text="否"></el-switch>



          </el-form-item>
        </el-col>
      </template> -->
    </el-row>
    <el-row>
      <!-- {{ ruleListDataC }} -->
      <el-col v-show="formData.companyType" :span="24" class="grid-cell">
        <el-form-item label="公司主营业务收入：" prop="businessType" class="label-right-align">
          <el-radio-group v-model="formData.mainBusinessIncome.type">
            <div class="table-container">
              <table class="table-layout">
                <tbody>
                  <tr>
                    <td class="table-cell" bgcolor="#f1f1f1" style="width: 80px">选项</td>
                    <td class="table-cell" bgcolor="#f1f1f1" style="width: 100px">收入(美金)</td>
                    <td class="table-cell" bgcolor="#f1f1f1" style="width: 100px">报价</td>
                    <!-- <td class="table-cell" bgcolor="#f1f1f1">备注</td>
                    <td class="table-cell" bgcolor="#f1f1f1">区域</td> -->
                  </tr>
                  <template v-for="(item, index) in ruleListDataC">
                    <tr v-if="item.option">
                      <td class="table-cell">
                        <el-radio
                          :key="index"
                          :label="item.id"
                          style="
                             {
                              display: inline;
                            }
                          "
                          @change="companyMainIncomeChange(item)">
                          {{ item.label }}
                        </el-radio>
                      </td>
                      <td class="table-cell">{{ item.rule_content }}万</td>
                      <td class="table-cell">
                        <span class="price">${{ item.price }}</span>
                      </td>
                      <!-- <td class="table-cell">{{ item.remark }}</td>
                      <td class="table-cell">{{ item.area }}</td> -->
                    </tr>
                  </template>

                  <!-- <tr>
                    <td class="table-cell" colspan="5" style="text-align: left; padding: 10px">
                      在美有
                      <el-input size="small" v-model="formData.mainBusinessIncome.inUSchildCompany" placeholder="" style="width: 50px" />
                      家子公司 报价：
                      <span class="price">${{ formData.mainBusinessIncome.inUSchildCompany * 200 }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-cell" colspan="5" style="text-align: left; padding: 10px">
                      子公司为非美国公司有
                      <el-input size="small" v-model="formData.mainBusinessIncome.noUSchildCompany" placeholder="" style="width: 50px" />
                      家 报价：
                      <span class="price">${{ formData.mainBusinessIncome.noUSchildCompany * 1000 }}</span>
                    </td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <template v-if="formData.companyType" v-for="(item, index) in ruleListDataC">
        <el-col :span="24" v-if="!item.option" class="grid-cell">
          <el-form-item v-if="item.field_name == 'main_business_type'" label="主营业务类型：" prop="main_business_type" class="required label-right-align">
            <el-input v-model="formData.main_business_type" type="text" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="item.field_name == 'total_asset'" label="公司资产总额：" prop="total_asset" class="required label-right-align">
            <el-input v-model="formData.total_asset" type="text" style="width: 250px" clearable>
              <template #append>万美元</template>
            </el-input>
          </el-form-item>
          <el-form-item v-if="item.field_name == 'amount_fixed_asset'" label="固定资产金额：" prop="amount_fixed_asset" class="required label-right-align">
            <el-input @change="computedTotalPrice" v-model="formData.amount_fixed_asset" type="text" clearable :placeholder="'注：费用为' + item.price" style="width: 250px">
              <template #append>万美元</template>
            </el-input>
          </el-form-item>
          <el-form-item v-if="item.field_name == 'exchange_fund_com_number'" label="有资金往来的关联公司数量：" prop="exchange_fund_com_number" class="required label-right-align">
            <el-input-number @change="computedTotalPrice" style="width: 250px" min="0" v-model="formData.exchange_fund_com_number" type="text" clearable :placeholder="'注：费用为公司数 x ' + item.price"></el-input-number>
            <div class="tip">关联公司包括母公司、子公司或同一控制人下的其他兄弟公司</div>
          </el-form-item>
          <el-form-item v-if="item.field_name == 'subsidiary_us'" label="在美子公司数：" prop="subsidiary_us" class="required label-right-align">
            <el-input-number @change="computedTotalPrice" style="width: 250px" min="0" v-model="formData.subsidiary_us" type="text" clearable :placeholder="'注：费用为公司数 x ' + item.price"></el-input-number>
          </el-form-item>
          <el-form-item v-if="item.field_name == 'subsidiary_non_us_number'" label="非美子公司数：" prop="subsidiary_non_us_number" class="required label-right-align">
            <el-input-number @change="computedTotalPrice" style="width: 250px" min="0" v-model="formData.subsidiary_non_us_number" type="text" clearable :placeholder="'注：费用为公司数 x ' + item.price"></el-input-number>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance, onMounted, ref, watch, inject } from 'vue'
import { regionList, ruleList } from '@/http/api/pub.ts'
// import { ruleList, agentList, invoiceList } from '@/http/api/pub.ts'

import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  components: {},
  // props: ['order'],
  props: {
    orderId: 0,
    orderStatus: null,
    order: {
      type: Object
    },
    invoice: {
      type: Object
    },
    companyName: {
      type: String
    }
  },
  emits: ['update', 'updateCompanyName'],
  setup(props, context) {
    const couponInfo = JSON.parse(localStorage.getItem('couponInfo') || '{}')
    const rate = couponInfo.rate || 100
    const router = useRouter()
    const company_name = ref(props.companyName)
    const ruleListDataC = inject('ruleListDataC')
    const ruleListDataLLC = inject('ruleListDataLLC')
    const state = reactive({
      formData: {
        selectRegion: '',
        regionText: '',
        companyType: '',
        companyMainIncome: {
          price: 0
        },
        mainBusinessIncome: {
          // type: { income: 0, price: 260, mark: "0资产运营", area: "佛罗里达" },
          type: '',
          inUSchildCompany: 2,
          noUSchildCompany: 1
        },
        mainBusinessType: '',
        totalCompanyAssets: '',
        fixedAssetAmount: '',
        isMoneyTrading: true,
        isChildCompany: true,
        isConfirm: true,
        amount_fixed_asset: 0,
        exchange_fund_com_number: 0,
        subsidiary_us: 0,
        subsidiary_non_us_number: 0
      } as any,

      selectAreaOptions: [],
      rules: {
        mainBusinessType: [
          {
            required: true,
            message: '字段值不可为空'
          },
          {
            pattern: /^[-]?\d+(\.\d+)?$/,
            trigger: ['blur', 'change'],
            message: ''
          }
        ],
        totalAsset: [
          {
            required: true,
            message: '字段值不可为空'
          },
          {
            pattern: /^[-]?\d+(\.\d+)?$/,
            trigger: ['blur', 'change'],
            message: ''
          }
        ],
        fixedAssetAmount: [
          {
            required: true,
            message: '字段值不可为空'
          },
          {
            pattern: /^[-]?\d+(\.\d+)?$/,
            trigger: ['blur', 'change'],
            message: ''
          }
        ]
      },

      noUSAOptions: [
        {
          label: '非美国',
          value: 1
        }
      ],
      incTypeOptions: [
        {
          label: 'C公司',
          value: 1
        },
        {
          label: 'LLC',
          value: 2
        }
      ],
      businessTypeOptions: [
        {
          label: '选择',
          value: 1,
          income: '0',
          price: 260,
          remark: '0资产运营',
          area: '特拉华州 华盛顿  佛罗里达'
        },
        {
          label: '选择',
          value: 2,
          income: '0',
          price: 300,
          remark: '包括简单调账',
          area: '其他州'
        },
        {
          label: '选择',
          value: 3,
          income: '25',
          price: 400,
          remark: '',
          area: ''
        },
        {
          label: '选择',
          value: 4,
          income: '25-100',
          price: 600,
          remark: '',
          area: ''
        },
        {
          label: '选择',
          value: 5,
          income: '100-200',
          price: 700,
          remark: '',
          area: ''
        },
        {
          label: '选择',
          value: 6,
          income: '200-500',
          price: 800,
          remark: '',
          area: ''
        }
      ],
      isFlowOptions: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ],
      isChildOptions: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    })
    const companyMainIncome = ref({ price: 0 })
    // 初始化父组件数据
    state.formData = props.order
    const saveOrder = () => {
      context.emit('update', state.formData)
    }
    const changeCompanyName = () => {
      context.emit('updateCompanyName', company_name.value)
    }

    const instance = getCurrentInstance()
    const submitForm = () => {
      instance.proxy.$refs['vForm'].validate((valid) => {
        if (!valid) return
        //TODO: 提交表单
      })
    }
    const resetForm = () => {
      instance.proxy.$refs['vForm'].resetFields()
    }
    const getRegionList = () => {
      regionList()
        .then((res: any) => {
          console.log('全部州', res)
          state.selectAreaOptions = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    }

    const getRuleList = () => {
      // TAX   ANNUAL_REVIEW  ACCOUNTING    REGISTER_COMPANY  SALE_TAX
      let region = state.formData.selectRegion
      ruleList({ page: 1, count: 20, businessType: 10, region: region, company_type: 'C' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataC.value = list
      })
      ruleList({ page: 1, count: 20, businessType: 10, region: region, company_type: 'LLC' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataLLC.value = list
      })
    }
    const regionChange = (val) => {
      console.log(val)
      if (val == 'HK' || val == 'SG' || val == 'BVI' || val == 'CAYMAN' || val == 'XX') nonUS()
    }
    const companyTypeChange = () => {
      // order()
      // getRuleList()
    }
    const order = () => {
      ruleListDataC.value = ruleListDataCCCache.value.sort((item) => {
        return item.company_type == type
      })
    }
    const companyMainIncomeChange = (val) => {
      state.formData.companyMainIncome = val
    }
    const computedTotalPrice = () => {
      let price1 = 0
      ruleListDataC.value.map((item) => {
        // 相乘
        if (item.vale_type == 'TEXT_MULTIPLY') {
          price1 += (state.formData[item.field_name] || 0) * item.price
        } else if (item.vale_type == 'TEXT_GREATER') {
          if (state.formData[item.field_name] > Number(item.rule_content)) {
            price1 += item.price
          }
        }
      })
      // 如果是LLC
      if (state.formData.companyType == 2) {
        if (state.formData.is_c_rule) {
          if (state.formData.first_year) {
            let item = ruleListDataLLC.value.find((item) => {
              return item.field_name === 'first_year'
            })
            if (item) {
              price1 += item.price
            }
          }
        } else {
          if (!state.formData.has_us_tax_no) {
            let item = ruleListDataLLC.value.find((item) => {
              return item.field_name === state.formData.taxType
            })
            if (item) {
              price1 += item.price
            }
          }
        }
      }
      state.formData.totalPrice = (price1 + state.formData.companyMainIncome.price) * rate / 100;
      state.formData.oldTotalPrice = price1 + state.formData.companyMainIncome.price;
      props.invoice.price = state.formData.totalPrice
      return price1 + state.formData.companyMainIncome.price
    }
    const cs = () => {
      let query = {
        type: 10,
        desc: '报税'
      }
      if (props.orderId) {
        query.orderId = props.orderId
      }
      if (props.orderStatus) {
        query.orderStatus = props.orderStatus
      }
      router.push({ name: 'customerService', query: query })
    }
    onMounted(() => {
      // state.formData = order
      getRegionList()
      getRuleList()
    })
    watch(
      () => state.formData.selectRegion,
      (newVal) => {
        let region =
          state.selectAreaOptions.find((item) => {
            return item.code == newVal
          }) || {}
        state.formData.regionText = region.name
      }
    )
    // watch(
    //   () => state.formData.companyType,
    //   (newVal) => {
    //     getRuleList()
    //   }
    // )
    watch(
      () => state.formData.selectRegion,
      (newVal) => {
        getRuleList()
      }
    )
    watch(
      () => props.order,
      (newVal) => {
        state.formData = newVal
      }
    )
    watch(
      () => props.companyName,
      (newVal) => {
        company_name.value = props.companyName
      }
    )

    return {
      ...toRefs(state),
      companyMainIncome,
      ruleListDataLLC,
      ruleListDataC,
      company_name,
      rate,
      saveOrder,
      submitForm,
      resetForm,
      regionChange,
      companyTypeChange,
      companyMainIncomeChange,
      order,
      computedTotalPrice,
      cs,
      changeCompanyName
    }
  }
})
</script>

<style lang="scss" scoped>
.tip {
  font-size: 12px;
  width: 100%;
}

.desc {
  font-size: 14px;
  color: #ccc;
  line-height: 50px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #67c23a;
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
</style>
