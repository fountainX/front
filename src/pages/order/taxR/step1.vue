<template>
  <el-divider content-position="left">
    <h2>销售税-申报</h2>
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
                <el-button plain @click="nonUS()" v-if="currentRegion.name == '其他'">联系客服</el-button>
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
                  @change="companyTypeChange(item.value)"
                >
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
          <span>原价：</span>
          <span class="price">{{ isDollar() ? '$' : '￥' }} {{ computedTotalPrice() }}</span>
          <br />
          <span>折扣价：</span>
          <span class="price">{{ isDollar() ? '$' : '￥' }}{{ (computedTotalPrice() * rate) / 100 }}</span>
          <!-- <span class="price">${{ computedTotalPrice() }}</span> -->
        </div>
      </el-col>
    </el-row>
    <el-row>
      <template v-for="(item, index) in ruleListDataC">
        <el-col :span="24" class="grid-cell">
          <el-form-item label="费用：" prop="sale_tax_license_apply" class="required label-right-align">
            <span>{{ item.price }}</span>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>

  <el-dialog v-model="dialogFormVisible" title="联系客服">
    <SeekAdvice :params="query"></SeekAdvice>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance, onMounted, ref, watch, inject } from 'vue'
import { regionList, ruleList } from '@/http/api/pub.ts'
import SeekAdvice from '@/pages/customerService/index.vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  components: { SeekAdvice },
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
    const isDollar = () => {
      let rule = null
      let res = true
      if (state.formData.companyType == 1) {
        rule = ruleListDataC.value[0]
      } else if (state.formData.companyType == 2) {
        rule = ruleListDataLLC.value[0]
      }
      if (rule) {
        res = rule.dollar
      }
      state.formData.isDollar = res
      return res
    }
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
      currentRegion: {
        us: true
      },
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
      state.formData.isDollar = isDollar()
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
      ruleList({ page: 1, count: 20, businessType: 52, region: region, company_type: 'C' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataC.value = list
      })
      ruleList({ page: 1, count: 20, businessType: 52, region: region, company_type: 'LLC' }).then((res: any) => {
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
    const regionChange = () => {
      // getRuleList()
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
        price1 += item.price
      })
      state.formData.totalPrice = (price1 * rate) / 100
      state.formData.oldTotalPrice = price1
      props.invoice.price = state.formData.totalPrice
      return price1
    }

    let dialogFormVisible = ref(false)
    let query = reactive({
      type: 10,
      desc: '报税'
    })
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
        state.currentRegion = region
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
      nonUS,
      changeCompanyName,
      isDollar,
      dialogFormVisible,
      query
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
