<template>
  <Header></Header>
  <div class="container box">
    <el-row>
      <el-col :span="24">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="报价" description="description" />
          <el-step title="确认报价" description="description" />
          <el-step title="出具发票" description="description" />
          <el-step title="付款" description="description" />
          <el-step title="上传资料" description="description" />
          <el-step title="审核资料" description="description" />
          <el-step title="回传签字" description="description" />
          <el-step title="签回" description="description" />
          <el-step title="完结" description="description" />
        </el-steps>
      </el-col>
      <el-col :span="24">
        <div class="formArea">
          <el-card>
            <template v-if="typeValue == 10">
              <TaxStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></TaxStep1>
              <TaxStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></TaxStep2>
              <TaxStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></TaxStep9>
            </template>
            <template v-if="typeValue == 20">
              <AnnualReviewStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></AnnualReviewStep1>
              <AnnualReviewStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></AnnualReviewStep2>
              <AnnualReviewStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></AnnualReviewStep9>
            </template>
            <template v-if="typeValue == 30">
              <AccountingStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></AccountingStep1>
              <AccountingStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></AccountingStep2>
              <AccountingStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></AccountingStep9>
            </template>
            <template v-if="typeValue == 40">
              <RegistryCompanyStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></RegistryCompanyStep1>
              <RegistryCompanyStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></RegistryCompanyStep2>
              <RegistryCompanyStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></RegistryCompanyStep9>
            </template>

            <template v-if="typeValue == 51">
              <TaxLAStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></TaxLAStep1>
              <TaxLAStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></TaxLAStep2>
              <TaxLAStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></TaxLAStep9>
            </template>
            <template v-if="typeValue == 52">
              <TaxRStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></TaxRStep1>
              <TaxRStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></TaxRStep2>
              <TaxRStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></TaxRStep9>
            </template>
            <template v-if="typeValue == 91">
              <ODIStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></ODIStep1>
              <ODIStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></ODIStep2>
              <ODIStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></ODIStep9>
            </template>
            <template v-if="typeValue == 92">
              <BAOStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></BAOStep1>
              <BAOStep2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></BAOStep2>
              <BAOStep9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></BAOStep9>
            </template>

            <template v-if="typeValue == 93">
              <LVisaStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></LVisaStep1>
            </template>

            <template v-if="typeValue == 94">
              <EB2Step1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></EB2Step1>
            </template>

            <template v-if="typeValue == 95">
              <MGCStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></MGCStep1>
            </template>

            <template v-if="typeValue == 96">
              <MBVStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></MBVStep1>
            </template>

            <template v-if="typeValue == 97">
              <USIStep1 ref="step" v-if="active == 0" :companyName="companyName" :order="param.order" :orderId="orderId" :orderStatus="orderStatus" :invoice="param.invoice" @update="updateOrder" @updateCompanyName="updateCompanyName"></USIStep1>
            </template>
            <!-- <Step2 ref="step" v-if="active == 1" :order="param.order" :order_no="order_no" @update="updatePrice"></Step2> -->
            <Step3 ref="step" v-if="active == 2" :agentName="param.agent_name" :companyName="companyName" :invoice="param.invoice" :order_no="order_no" @update="updateInvoice"></Step3>
            <Step4 ref="step" v-if="active == 3" :pay="param.pay" @update="updatePayInfo" :orderId="orderId"></Step4>
            <Step5 ref="step" v-if="active == 4" :upload="param.upload" @update="updateUploadList" :orderId="orderId"></Step5>
            <Step6 ref="step" v-if="active == 5" :upload="param.upload"></Step6>
            <Step7 ref="step" v-if="active == 6" :orderId="orderId" :sign="param.sign" @update="updateSign"></Step7>
            <Step8 ref="step" v-if="active == 7" :backSign="param.backSign"></Step8>
            <Step9 v-if="active == 8" :detail="param" :companyName="companyName" :order_no="order_no" :orderId="orderId"></Step9>
          </el-card>
          <div v-if="param.order.selectRegion != 'XX' && typeValue < 93">
            <div style="margin-top: 15px" v-if="!param.order.is_operate_in_us">
              <el-button v-if="active == 1" @click="prev">上一步</el-button>
              <el-button @click="saveOrder()">确认</el-button>
              <el-button v-if="active == 0" @click="next">{{ active == 1 && orderId == undefined ? '创建订单' : '下一步' }}</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <br />
  </div>
  <Footer></Footer>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, provide, watch } from 'vue'
import { ElMessage } from 'element-plus'
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'
import { useRouter, useRoute } from 'vue-router'
import TaxStep1 from './tax/step1.vue'
import TaxStep2 from './tax/step2.vue'
import TaxStep9 from './tax/step9.vue'
import AnnualReviewStep1 from './annualReview/step1.vue'
import AnnualReviewStep2 from './annualReview/step2.vue'
import AnnualReviewStep9 from './annualReview/step9.vue'
import AccountingStep1 from './accounting/step1.vue'
import AccountingStep2 from './accounting/step2.vue'
import AccountingStep9 from './accounting/step9.vue'
import RegistryCompanyStep1 from './registryCompany/step1.vue'
import RegistryCompanyStep2 from './registryCompany/step2.vue'
import RegistryCompanyStep9 from './registryCompany/step9.vue'
import TaxLAStep1 from './taxLA/step1.vue'
import TaxLAStep2 from './taxLA/step2.vue'
import TaxLAStep9 from './taxLA/step9.vue'
import TaxRStep1 from './taxR/step1.vue'
import TaxRStep2 from './taxR/step2.vue'
import TaxRStep9 from './taxR/step9.vue'
import ODIStep1 from './ODI/step1.vue'
import ODIStep2 from './ODI/step2.vue'
import ODIStep9 from './ODI/step9.vue'
import BAOStep1 from './bankAccountOpening/step1.vue'
import BAOStep2 from './bankAccountOpening/step2.vue'
import BAOStep9 from './bankAccountOpening/step9.vue'
import LVisaStep1 from './lVisa/step1.vue'
import EB2Step1 from './EB2/step1.vue'
import MGCStep1 from './MGC/step1.vue'
import MBVStep1 from './MBV/step1.vue'
import USIStep1 from './USI/step1.vue'
import Step2 from './step2.vue'
import Step3 from './step3.vue'
import Step4 from './step4.vue'
import Step5 from './step5.vue'
import Step6 from './step6.vue'
import Step7 from './step7.vue'
import Step8 from './step8.vue'
// import Step9 from './step9.vue'
import { orderCreate, orderUpdate, orderShow, updateOrderStatus } from '@/http/api/order.ts'
import { ruleList, agentShow } from '@/http/api/pub.ts'
import { getToken } from '@/utils/auth.ts'
const router = useRouter()
const route = useRoute();
let type = router.currentRoute.value.query.type
let typeValue

const setTypeValue = (type) => {
  switch (type) {
    case 'TAX':
      typeValue = 10
      break
    case 'ANNUAL_REVIEW':
      typeValue = 20
      break
    case 'ACCOUNTING':
      typeValue = 30
      break
    case 'REGISTER_COMPANY':
      typeValue = 40
      break
    case 'SALE_TAX_LICENSE_APPLICATION':
      typeValue = 51
      break
    case 'SALE_TAX_REPORT':
      typeValue = 52
      break
    case 'ODI_CHECKIN':
      typeValue = 91
      break
    case 'BANK_ACCOUNT_OPENING':
      typeValue = 92
      break
    case 'L_VISA':
      typeValue = 93
      break
    case 'US_EB2_IMMIGRATION':
      typeValue = 94
      break
    case 'MEXICAN_GREEN_CARD':
      typeValue = 95
      break
    case 'MEXICAN_BUSINESS_VISA':
      typeValue = 96
      break
    case 'US_INSURANCE':
      typeValue = 97
      break
    default:
      break
  }
}
setTypeValue(type)

const agent = ref({})
const orderId = ref(router.currentRoute.value.query.orderId)
const userInfo = ref(JSON.parse(localStorage.getItem('userInfo') as any))
// console.log(11, getToken())

const isLogin = () => {
  if (userInfo.value == null) {
    userInfo.value = { agent: '' }
    router.push('/login')
    return
  }
}
isLogin()

// 阶段状态
const stage = reactive([
  { name: 'QUOTATION_STARTED', val: 10 }, // 已付款
  { name: 'QUOTATION_CONFIRMED', val: 11 }, // 已付款
  { name: 'INVOICE_ISSUED', val: 12 }, // 发票开具
  { name: 'PAID', val: 13 }, // 已付款
  { name: 'NO_PAID_CONTINUE', val: 14 }, //未付款可以继续流程
  { name: 'DOCUMENT_UPLOADED', val: 15 }, //资料上传
  { name: 'DOCUMENT_REVIEWED', val: 16 }, // 资料审核
  { name: 'SIGNATURE_RETURNED', val: 16 }, // 签字回传
  { name: 'SIGNATURE_RETURNED_BACK', val: 17 }, // 签回
  { name: 'FINISHED', val: 18 }, // 完结
  { name: 'DELETED', val: 99 } // 删除
])
const ruleListDataC = ref([])
const ruleListDataLLC = ref([])
const ruleListDataLP = ref([])
provide('ruleListDataC', ruleListDataC)
provide('ruleListDataLLC', ruleListDataLLC)
provide('ruleListDataLP', ruleListDataLP)
provide('typeValue', typeValue)
provide('agent', agent)
const getAgent = () => {
  agentShow({ agent_id: userInfo.value.agent_id }).then((res) => {
    agent.value = res.data
  })
}
const getRuleList = (data) => {
  // TAX   ANNUAL_REVIEW  ACCOUNTING    REGISTER_COMPANY  SALE_TAX
  let region = data.selectRegion
  ruleList({ page: 1, count: 20, businessType: typeValue, region: region, company_type: 'C' }).then((res: any) => {
    const list = res.data
      .filter((item) => {
        if (item) {
          return item
        }
      })
      .toSorted((a, b) => {
        if (a.order > b.order) {
          return 1
        } else {
          return -1
        }
      })
    ruleListDataC.value = list
  })
  ruleList({ page: 1, count: 20, businessType: typeValue, region: region, company_type: 'LLC' }).then((res: any) => {
    const list = res.data
      .filter((item) => {
        if (item) {
          return item
        }
      })
      .toSorted((a, b) => {
        if (a.order > b.order) {
          return 1
        } else {
          return -1
        }
      })
    ruleListDataLLC.value = list
  })

  ruleList({ page: 1, count: 20, businessType: typeValue, region: region, company_type: 'LP' }).then((res: any) => {
    const list = res.data
      .filter((item) => {
        if (item) {
          return item
        }
      })
      .toSorted((a, b) => {
        if (a.order > b.order) {
          return 1
        } else {
          return -1
        }
      })
    ruleListDataLP.value = list
  })
}
// 业务订单
let param: any = reactive({
  order: {
    // ruleListDataC: [],
    // ruleListDataLLC: [],
    selectRegion: '',
    regionText: '',
    companyType: '',
    mainBusinessIncome: {
      // type: { income: 0, price: 260, mark: "0资产运营", area: "佛罗里达" },
      type: '',
      inUSchildCompany: 2,
      noUSchildCompany: 1
    },
    companyMainIncome: {
      price: 0
    },
    main_business_type: '',
    total_asset: '',
    fixedAssetAmount: '',
    isMoneyTrading: true,
    isChildCompany: true,
    isConfirm: false
  },
  invoice: {
    agentName: userInfo.value.agent,
    companyName: userInfo.value.company_name,
    content: '',
    price: 0,
    email: userInfo.value.email
  },
  pay: {
    voucher: []
  },
  upload: {
    list: []
  },
  sign: {
    pdfPath: '',
    mark: [
      {
        page: '22',
        desc: '右下方签名'
      },
      {
        page: '23',
        desc: '左下方签名'
      }
    ],
    imageList: [],
    isSign: true
  },
  backSign: [],
  isDone: false
})
// 当前阶段
const orderStatus = ref()
const order_no = ref()
const active = ref(0)
const companyName = ref('')
const prev = () => {
  if (active.value-- <= 0) active.value = 0
}
const next = () => {
  if (active.value == 0 && orderId.value == undefined) {
    createOrder()
  } else if (active.value++ > 7) {
    active.value = 0
  }
}
const statusList = {
  '10': {
    active: 0
  },
  '11': {
    active: 1
  },
  '12': {
    active: 2
  },
  '13': {
    active: 3
  },
  '14': {
    active: 3
  },
  '15': {
    active: 4
  },
  '16': {
    active: 5
  },
  '17': {
    active: 6
  },
  '18': {
    active: 7
  },
  '20': {
    active: 8
  }
}
const updateOrderStatusHandle = async (status) => {
  updateOrderStatus(orderId.value, {
    orderStatus: status,
    businessType: typeValue
  })
  router.replace({
    path: '/order',
    query: {
      type: type,
      orderId: orderId.value
    }
  })

  // setTimeout(() => {
  //   window.location.href = window.location.href + '&orderId=' + orderId.value
  // }, 300);
}
const createOrder = () => {
  // console.log(agent.value);
  console.log(param.order.selectRegion)
  if (!companyName.value) {
    ElMessage.error('请收入公司名称')
    return
  }

  if (!param.order.selectRegion) {
    ElMessage.error('请选择所在区域')
    return
  }

  if (!param.order.companyType) {
    ElMessage.error('请选择公司类型')
    return
  }
  orderCreate({ order_status: 10, businessType: typeValue, creator: userInfo.value.uid, companyName: companyName.value, content: { ...param, ...agent.value } })
    .then((res: any) => {
      orderId.value = res.data.order_id
      active.value = active.value + 1
      param.order.id = res.data.order_id
      order_no.value = res.data.order_no
      updateOrderStatusHandle(10)
    })
    .catch((err: any) => {
      console.log(err)
    })
}
const saveOrder = () => {
  if (active.value == 0 && orderId.value == undefined) {
    createOrder()
    return
  }
  orderUpdate({ orderId: orderId.value, data: { creator: userInfo.value.uid, content: param, companyName: companyName.value } })
    .then((res: any) => {
      ElMessage.success('已提交，请联系专员')
      console.log('update order', res)
      if (active.value == 1) {
        updateOrderStatusHandle(11)
      }
    })
    .catch((err: any) => {
      console.log(err)
    })
}
const updateOrder = (val: any) => {
  console.log(val)
  param.order = { ...param.order, ...val }
}
const updateCompanyName = (val: any) => {
  companyName.value = val
}
const updatePrice = (val: any) => {
  param.invoice.price = val
}
const updateInvoice = (val: any) => {
  param.invoice = val
}
const updatePayInfo = (val: any) => {
  param.pay.voucher = val
}
const updateUploadList = (val: any) => {
  param.upload.list = val
}
const updateSign = (val) => {
  param.sign.imageList = val
}
const initOrder = () => {
  orderShow({ order_id: orderId.value })
    .then((res: any) => {
      // console.log('orderInfo', JSON.parse(res.data.content))
      let data = res.data
      const content = JSON.parse(data.content)
      param.order.id = orderId.value
      param.order = { ...param.order, ...content.order }
      param.invoice = { ...param.invoice, ...content.invoice }
      param.pay = { ...param.pay, ...content.pay }
      param.upload = { ...param.upload, ...content.upload }
      param.sign = { ...param.sign, ...content.sign }
      param.backSign = content.backSign
      param.isDone = content.isDone
      param.agent_id = content.agent_id
      param.agent_name = content.agent_name
      orderStatus.value = data.order_status
      order_no.value = data.order_no
      let index = statusList[orderStatus.value.toString()].active
      active.value = index
      companyName.value = data.company_name
      getRuleList(content.order)
    })
    .catch((err: any) => {
      console.log(err)
    })
}
provide('content', param)

watch(() => route.query.type, (newValue) => {
  setTypeValue(type)
  console.log(newValue)
  setTimeout(() => {
    window.location.reload()
  }, 100);
  // window.location.reload()
});
onMounted(() => {
  if (orderId.value !== undefined) {
    initOrder()
  }
  getAgent()
})
</script>
<style scoped>
.box {
  margin-top: 50px;
  min-height: 600px;
}

.formArea {
  margin: 0 auto;
  width: 100%;
  padding: 50px;
}

:deep(.el-card__body) {
  padding: 60px;
}

:deep(.el-descriptions__cell) {
  border: 1px solid #dfdfdf;
}

:deep(.el-descriptions__body .el-descriptions__table:not(.is-bordered) .el-descriptions__cell) {
  line-height: 40px;
  padding-bottom: 0;
}

:deep(.el-descriptions__label:not(.is-bordered-label)) {
  margin-right: 5px;
  background: #f7f7f7;
}

:deep(.el-descriptions__label) {
  display: inline-block;
  min-width: 120px;
  padding-left: 20px;
  /* width: 180px; */
  text-align: right;
  /* background: #f1f1f1; */
}

:deep(.el-descriptions__content) {}
</style>
