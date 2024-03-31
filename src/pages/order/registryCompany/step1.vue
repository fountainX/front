<template>
  <el-divider content-position="left">
    <h2>注册公司-报价</h2>
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
              <el-col :span="6" style="margin-left: 40px" v-if="currentRegion.name == '其他'">
                <el-button plain @click="nonUS()">联系客服</el-button>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="24">
            <el-form-item label="公司类型：" prop="companyType" class="label-right-align">
              <el-radio-group @change="companyChange" v-model="formData.companyType">
                <el-radio
                  v-for="(item, index) in incTypeOptions"
                  v-show="!item.hidden"
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
    <div v-if="formData.companyType == 1">
      <el-row v-for="item in ruleListDataC" :key="item.field_name">
        <el-col :span="24" class="grid-cell">
          <template v-if="item.field_name == 'registration'">
            <el-form-item label="费用：" class="label-right-align">
              <span>{{ item.price }}</span>
              &nbsp;
              <el-text v-if="currentRegion.us == false" class="mx-1" type="info">{{ item.rule_content }}</el-text>
              <!-- <el-input :value="item.price" type="text" disabled></el-input> -->
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'is_apply_ssn_ein'">
            <el-form-item :label="item.rule_content + '：'" prop="isApplySsnEin" class="label-right-align">
              <el-radio-group v-model="formData.isApplySsnEin">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </div>

    <div v-else-if="formData.companyType == 2">
      <el-row v-for="item in ruleListDataLLC" :key="item.field_name">
        <el-col :span="24" class="grid-cell">
          <template v-if="item.field_name == 'registration'">
            <el-form-item label="费用：" class="label-right-align">
              <span>{{ item.price }}</span>
              &nbsp;
              <el-text v-if="currentRegion.us == false" class="mx-1" type="info">{{ item.rule_content }}</el-text>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'is_apply_ssn_ein'">
            <el-form-item :label="item.rule_content + '：'" prop="isApplySsnEin" class="label-right-align">
              <el-radio-group v-model="formData.isApplySsnEin">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>

          <template v-if="item.field_name == 'is_chinese_name'">
            <el-form-item :label="item.rule_content + '：'" prop="is_chinese_name" class="label-right-align">
              <el-radio-group v-model="formData.is_chinese_name">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>

          <template v-if="item.field_name == 'shareholders'">
            <el-form-item label="股东数大于5个的个数：" prop="shareholders" class="label-right-align">
              <el-input-number :min="0" v-model="formData.shareholders"></el-input-number>
              &nbsp;
              <el-text v-if="currentRegion.us == false" class="mx-1" type="info">{{ item.rule_content }}</el-text>
            </el-form-item>
          </template>

          <template v-if="item.field_name == 'certificate_of_incumbency'">
            <el-form-item :label="item.rule_content + '：'" prop="certificate_of_incumbency" class="label-right-align">
              <el-radio-group v-model="formData.certificate_of_incumbency">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'certificate_of_incumbency_num'">
            <el-form-item :label="item.rule_content + '：'" prop="certificate_of_incumbency_num" class="label-right-align">
              <el-input-number :min="0" v-model="formData.certificate_of_incumbency_num"></el-input-number>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'certificate_of_good_standing'">
            <el-form-item :label="item.rule_content + '：'" prop="certificate_of_good_standing" class="label-right-align">
              <el-radio-group v-model="formData.certificate_of_good_standing">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'express_service'">
            <el-form-item :label="item.rule_content + '：'" prop="express_service" class="label-right-align">
              <el-radio-group v-model="formData.express_service">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </div>
    <div v-else-if="formData.companyType == 3">
      <el-row v-for="item in ruleListDataLP" :key="item.field_name">
        <el-col :span="24" class="grid-cell">
          <template v-if="item.field_name == 'registration'">
            <el-form-item label="费用：" class="label-right-align">
              <span>{{ item.price }}</span>
              &nbsp;
              <el-text v-if="currentRegion.us == false" class="mx-1" type="info">{{ item.rule_content }}</el-text>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'is_apply_ssn_ein'">
            <el-form-item :label="item.rule_content + '：'" prop="isApplySsnEin" class="label-right-align">
              <el-radio-group v-model="formData.isApplySsnEin">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>

          <template v-if="item.field_name == 'is_chinese_name'">
            <el-form-item :label="item.rule_content + '：'" prop="is_chinese_name" class="label-right-align">
              <el-radio-group v-model="formData.is_chinese_name">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>

          <template v-if="item.field_name == 'shareholders'">
            <el-form-item label="股东数大于5个的个数：" prop="shareholders" class="label-right-align">
              <el-input-number :min="0" v-model="formData.shareholders"></el-input-number>
              &nbsp;
              <el-text v-if="currentRegion.us == false" class="mx-1" type="info">{{ item.rule_content }}</el-text>
            </el-form-item>
          </template>

          <template v-if="item.field_name == 'certificate_of_incumbency'">
            <el-form-item :label="item.rule_content + '：'" prop="certificate_of_incumbency" class="label-right-align">
              <el-radio-group v-model="formData.certificate_of_incumbency">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'certificate_of_incumbency_num'">
            <el-form-item :label="item.rule_content + '：'" prop="certificate_of_incumbency_num" class="label-right-align">
              <el-input-number :min="0" v-model="formData.certificate_of_incumbency_num"></el-input-number>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'certificate_of_good_standing'">
            <el-form-item :label="item.rule_content + '：'" prop="certificate_of_good_standing" class="label-right-align">
              <el-radio-group v-model="formData.certificate_of_good_standing">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
          <template v-if="item.field_name == 'express_service'">
            <el-form-item :label="item.rule_content + '：'" prop="express_service" class="label-right-align">
              <el-radio-group v-model="formData.express_service">
                <el-radio
                  :value="0"
                  :label="0"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  否
                </el-radio>
                <el-radio
                  :label="1"
                  :value="1"
                  style="
                     {
                      display: inline;
                    }
                  "
                >
                  是
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </div>
  </el-form>

  <el-dialog v-model="dialogFormVisible" title="联系客服">
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
    const ruleListDataLP = inject('ruleListDataLP')
    const state = reactive({
      formData: {
        selectRegion: '',
        regionText: '',
        companyType: '',
        us: true
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
        },
        {
          label: 'LLC',
          value: 2
        },
        {
          label: 'LP',
          value: 3,
          hidden: true
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
    state.formData.isApplySsnEin = props.order.isApplySsnEin || 0
    state.formData.is_chinese_name = props.order.is_chinese_name || 0
    state.formData.shareholders = props.order.shareholders || 0
    state.formData.certificate_of_incumbency = props.order.certificate_of_incumbency || 0
    state.formData.certificate_of_incumbency_num = props.order.certificate_of_incumbency_num || 0
    state.formData.certificate_of_good_standing = props.order.certificate_of_good_standing || 0
    state.formData.express_service = props.order.express_service || 0
    const saveOrder = () => {
      context.emit('update', state.formData)
    }
    const isDollar = () => {
      let rule = null
      let res = true
      if (state.formData.companyType == 1) {
        rule = ruleListDataC.value[0]
      } else if (state.formData.companyType == 2) {
        rule = ruleListDataLLC.value[0]
      } else if (state.formData.companyType == 3) {
        rule = ruleListDataLP.value[0]
      }
      if (rule) {
        res = rule.dollar
      }
      state.formData.isDollar = res
      return res
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
      ruleList({ page: 1, count: 20, businessType: 40, region: region, company_type: 'C' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataC.value = list
      })
      ruleList({ page: 1, count: 20, businessType: 40, region: region, company_type: 'LLC' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataLLC.value = list
      })
      ruleList({ page: 1, count: 20, businessType: 40, region: region, company_type: 'LP' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataLP.value = list
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
        ruleListDataC.value.map((item) => {
          // 相乘
          if (item.field_name == 'registration') {
            price1 += item.price
          } else if (item.field_name == 'is_apply_ssn_ein') {
            if (state.formData.isApplySsnEin) {
              price1 += item.price
            }
          }
        })
      } // 如果是LLC
      else if (state.formData.companyType == 2) {
        ruleListDataLLC.value.map((item) => {
          if (item.field_name == 'registration') {
            price1 += item.price
          } else if (item.field_name == 'is_apply_ssn_ein') {
            if (state.formData.isApplySsnEin) {
              price1 += item.price
            }
          } else if (item.vale_type == 'BOOL') {
            if (state.formData[item.field_name]) {
              price1 += item.price
            }
          } else if (item.vale_type == 'TEXT_MULTIPLY') {
            price1 += item.price * state.formData[item.field_name]
          }
        })
      } else if (state.formData.companyType == 3) {
        ruleListDataLP.value.map((item) => {
          if (item.field_name == 'registration') {
            price1 += item.price
          } else if (item.field_name == 'is_apply_ssn_ein') {
            if (state.formData.isApplySsnEin) {
              price1 += item.price
            }
          } else if (item.vale_type == 'BOOL') {
            if (state.formData[item.field_name]) {
              price1 += item.price
            }
          } else if (item.vale_type == 'TEXT_MULTIPLY') {
            price1 += item.price * state.formData[item.field_name]
          }
        })
      }
      state.formData.totalPrice = (price1 * rate) / 100
      state.formData.oldTotalPrice = price1
      props.invoice.price = state.formData.totalPrice
      return price1
    }
    const cs = () => {
      let query = {
        type: 40,
        desc: '注册'
      }
      if (props.orderId) {
        query.orderId = props.orderId
      }
      if (props.orderStatus) {
        query.orderStatus = props.orderStatus
      }
      router.push({ name: 'customerService', query: query })
    }
    let dialogFormVisible = ref(false)
    let query = reactive({
      type: 40,
      desc: '注册'
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
        if (region.code == 'BVI' || region.code == 'CAYMAN') {
          state.incTypeOptions[2].hidden = false
        } else {
          state.incTypeOptions[2].hidden = true
        }
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
      ruleListDataLP,
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
