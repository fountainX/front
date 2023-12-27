<template>
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
            <Step1 ref="step" v-if="active == 0" :order="param.order" :invoice="param.invoice" @update="updateOrder"></Step1>
            <Step2 ref="step" v-if="active == 1" :order="param.order" @update="updatePrice"></Step2>
            <Step3 ref="step" v-if="active == 2" :invoice="param.invoice" @update="updateInvoice"></Step3>
            <Step4 ref="step" v-if="active == 3" :pay="param.pay" @update="updatePayInfo" :orderId="orderId"></Step4>
            <Step5 ref="step" v-if="active == 4" :upload="param.upload" @update="updateUploadList" :orderId="orderId"></Step5>
            <Step6 ref="step" v-if="active == 5" :upload="param.upload"></Step6>
            <Step7 ref="step" v-if="active == 6" :orderId="orderId" :sign="param.sign" @update="updateSign"></Step7>
            <Step8 ref="step" v-if="active == 7" :backSign="param.backSign"></Step8>
            <Step9 v-if="active == 8" :detail="param" :orderId="orderId"></Step9>
          </el-card>
          <div style="margin-top: 15px">
            <el-button @click="prev">上一步</el-button>
            <el-button @click="saveOrder()">保存</el-button>
            <el-button v-if="active != 8" @click="next">{{ active == 1 && orderId == undefined ? '创建订单' : '下一步' }}</el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <br />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Step1 from './step1.vue'
import Step2 from './step2.vue'
import Step3 from './step3.vue'
import Step4 from './step4.vue'
import Step5 from './step5.vue'
import Step6 from './step6.vue'
import Step7 from './step7.vue'
import Step8 from './step8.vue'
import Step9 from './step9.vue'
import { orderCreate, orderUpdate, orderShow } from '@/http/api/order.ts'

const router = useRouter()
const type = router.currentRoute.value.query.type
const orderId = ref(router.currentRoute.value.query.orderId)
const userInfo = JSON.parse(localStorage.getItem('userInfo'))
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
// 业务订单
let param: any = reactive({
  order: {
    ruleListDataC: [],
    ruleListDataLLC: [],
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
    agentName: userInfo.agent,
    companyName: userInfo.company_name,
    content: '',
    price: 0,
    email: userInfo.email
  },
  pay: {
    voucher:[]
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
    isSign: true
  },
  backSign: [],
  isDone: false
})
// 当前阶段
const active = ref(0)
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

const createOrder = () => {
  orderCreate({ businessType: 10, creator: userInfo.uid, content: param })
    .then((res: any) => {
      orderId.value = res.data.order_id
      active.value = active.value + 1
      param.order.id = res.data.order_id
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
  orderUpdate({ orderId: orderId.value, data: { creator: userInfo.uid, content: param } })
    .then((res: any) => {
      console.log('update order', res)
    })
    .catch((err: any) => {
      console.log(err)
    })
}
const updateOrder = (val: any) => {
  param.order = { ...param.order, ...val }
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
      const content = JSON.parse(res.data.content)
      param.order.id = orderId.value
      param.order = { ...param.order, ...content.order }
      param.invoice = { ...param.invoice, ...content.invoice }
      param.pay = { ...param.pay, ...content.pay }
      param.upload = { ...param.upload, ...content.upload }
      param.sign = { ...param.sign, ...content.sign }
      param.backSign = content.backSign
      param.isDone = content.isDone
    })
    .catch((err: any) => {
      console.log(err)
    })
}
onMounted(() => {
  if (orderId.value !== undefined) {
    initOrder()
  }
})
</script>
<style scoped>
.box {
  margin-top: 30px;
  min-height: 600px;
}

.formArea {
  margin: 0 auto;
  width: 900px;
  padding: 50px;
}
</style>
