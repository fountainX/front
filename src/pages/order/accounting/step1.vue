<template>
  <el-divider content-position="left">
    <h2>做账-报价</h2>
  </el-divider>
  <div class="desc">选择您想要的州和业务类型，然后选择您的附加组件以开始您的订单</div>
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
                <el-button plain @click="nonUS()">非美国</el-button>
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
          <div>原价：${{ computedTotalPrice() }}</div>
          <div>
            折扣价：
            <span class="price">${{ (computedTotalPrice() * rate) / 100 }}</span>
          </div>
          <!-- <span class="price">${{ computedTotalPrice() }}</span> -->
        </div>
      </el-col>
    </el-row>
    <div v-if="formData.companyType == 1">
      <el-row v-for="item in ruleListDataC" :key="item.field_name">
        <el-col :span="24" class="grid-cell">
          <template v-if="item.field_name == 'is_operate_in_us'">
            <el-form-item :label="item.rule_content + '：'" class="label-right-align">
              <el-switch v-model="formData.is_operate_in_us" />
              <span style="margin-left: 10px" v-if="formData.is_operate_in_us" @click="cs">联系客服</span>
            </el-form-item>
          </template>
        </el-col>
      </el-row>

      <el-row v-if="!formData.is_operate_in_us" v-for="item in ruleListDataC" :key="item.field_name">
        <template v-if="item.field_name == 'is_e_commerce'">
          <el-col :span="24" class="grid-cell">
            <el-form-item :label="item.rule_content + '：'" class="label-right-align">
              <el-switch v-model="formData.is_e_commerce" />
            </el-form-item>
          </el-col>
          <el-col v-if="formData.is_e_commerce" :span="24" class="grid-cell">
            <el-form-item label="电商类型：" class="label-right-align">
              <el-radio-group v-model="formData.e_type">
                <el-radio label="1">有固定资产/存货</el-radio>
                <el-radio label="2">无固定资产/存货</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <!-- 有 -->
          <template v-if="formData.is_e_commerce && formData.e_type == 1">
            <!-- 获取列表 -->
            <el-form-item label="报价类型：" class="label-right-align">
              <el-radio-group v-model="formData.e_price_type">
                <el-radio v-for="item2 in getPiceFromC('is_inventory_or_fixed_assets')" :label="item2.id">{{ item2.rule_content }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </template>

          <!-- 无 -->
          <template v-if="formData.is_e_commerce && formData.e_type == 2">
            <el-form-item label="报价类型：" class="label-right-align">
              <!-- 获取列表 -->
              <el-radio-group v-model="formData.e_price_type">
                <el-radio v-for="item2 in getPiceFromC('no_fixed_assets_inventory')" :label="item2.id">{{ item2.rule_content }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
        </template>

        <!-- 非电商 -->
        <template v-if="!formData.is_e_commerce && item.field_name == 'no_e_commerce'">
          <el-form-item label="银行流水笔数：" class="label-right-align">
            <!-- 获取列表 -->
            <el-radio-group v-model="formData.bank_count">
              <el-radio v-for="item2 in getPiceFromC('bank_accounts_number')" :label="item2.id">{{ item2.rule_content }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </el-row>
    </div>

    <div v-else-if="formData.companyType == 2">
      <el-row v-for="item in ruleListDataLLC" :key="item.field_name">
        <el-col :span="24" class="grid-cell">
          <template v-if="item.field_name == 'is_operate_in_us'">
            <el-form-item :label="item.rule_content + '：'" class="label-right-align">
              <el-switch v-model="formData.is_operate_in_us" />
              <span style="margin-left: 10px" v-if="formData.is_operate_in_us" @click="cs">联系客服</span>
            </el-form-item>
          </template>
        </el-col>
      </el-row>

      <el-row v-if="!formData.is_operate_in_us" v-for="item in ruleListDataC" :key="item.field_name">
        <template v-if="item.field_name == 'is_e_commerce'">
          <el-col :span="24" class="grid-cell">
            <el-form-item :label="item.rule_content + '：'" class="label-right-align">
              <el-switch v-model="formData.is_e_commerce" />
            </el-form-item>
          </el-col>
          <el-col v-if="formData.is_e_commerce" :span="24" class="grid-cell">
            <el-form-item label="电商类型：" class="label-right-align">
              <el-radio-group v-model="formData.e_type">
                <el-radio label="1">有固定资产/存货</el-radio>
                <el-radio label="2">无固定资产/存货</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <!-- 有 -->
          <template v-if="formData.is_e_commerce && formData.e_type == 1">
            <!-- 获取列表 -->
            <el-form-item label="报价类型：" class="label-right-align">
              <el-radio-group>
                <el-radio v-for="item2 in getPiceFromLLC('is_inventory_or_fixed_assets')">{{ item2.rule_content }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </template>

          <!-- 无 -->
          <template v-if="formData.is_e_commerce && formData.e_type == 2">
            <el-form-item label="报价类型：" class="label-right-align">
              <!-- 获取列表 -->
              <el-radio-group>
                <el-radio v-for="item2 in getPiceFromLLC('no_fixed_assets_inventory')">{{ item2.rule_content }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
        </template>

        <!-- 非电商 -->
        <template v-if="!formData.is_e_commerce && item.field_name == 'no_e_commerce'">
          <el-form-item label="银行流水笔数：" class="label-right-align">
            <!-- 获取列表 -->
            <el-radio-group>
              <el-radio v-for="item2 in getPiceFromLLC(' bank_accounts_number')">{{ item2.rule_content }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </el-row>
    </div>
  </el-form>
  <el-dialog v-model="dialogFormVisible" title="非美国">
    <SeekAdvice :params="query"></SeekAdvice>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance, onMounted, ref, watch, inject } from 'vue'
import { regionList, ruleList } from '@/http/api/pub.ts'
import SeekAdvice from '@/pages/customerService/index.vue'
// import { ruleList, agentList, invoiceList } from '@/http/api/pub.ts'

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
    const state = reactive({
      formData: {
        selectRegion: '',
        regionText: '',
        companyType: ''
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
    state.formData.is_operate_in_us = props.order.is_operate_in_us
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
      ruleList({ page: 1, count: 200, businessType: 30, region: region, company_type: 'C' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataC.value = list
      })
      ruleList({ page: 1, count: 200, businessType: 30, region: region, company_type: 'LLC' }).then((res: any) => {
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

      // LLC
      if (state.formData.companyType == 1) {
        //如果是电商
        if (state.formData.is_e_commerce) {
          let id = state.formData.e_price_type
          let res = ruleListDataC.value.find((item) => {
            return item.id == id
          })
          price1 = res.price
        } else {
          let id = state.formData.bank_count
          let res = ruleListDataC.value.find((item) => {
            return item.id == id
          })
          price1 = res.price
        }
      } // 如果是LLC
      else if (state.formData.companyType == 2) {
      }
      state.formData.totalPrice = (price1 * rate) / 100
      state.formData.oldTotalPrice = price1
      props.invoice.price = state.formData.totalPrice
      return price1
    }
    const cs = () => {
      let query = {
        type: 30,
        desc: '做账'
      }
      if (props.orderId) {
        query.orderId = props.orderId
      }
      if (props.orderStatus) {
        query.orderStatus = props.orderStatus
      }
      router.push({ name: 'customerService', query: query })
    }
    const getPiceFromC = (field) => {
      let list = ruleListDataC.value.filter((item) => {
        return item.field_name == field
      })

      console.log(list.length)
      return list
    }
    const getPiceFromLLC = (field) => {
      let list = ruleListDataLLC.value.filter((item) => {
        return item.field_name == field
      })
      return list
    }

    let dialogFormVisible = ref(false)
    let query = reactive({
      type: 30,
      desc: '做账'
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
      dialogFormVisible,
      query,
      getPiceFromC,
      getPiceFromLLC
    }
  }
})
</script>

<style lang="scss" scoped>
.tip {
  font-size: 12px;
  width: 100%;
}

.total-price {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;

  .price {
    font-size: 24px;
  }
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
