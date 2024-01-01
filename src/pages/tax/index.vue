<template>
  <div class="container box">{{ active }}
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
            <Step1 v-if="active == 0"></Step1>
            <Step2 v-if="active == 1"></Step2>
            <Step3 v-if="active == 2"></Step3>
            <Step4 v-if="active == 3"></Step4>
            <Step5 v-if="active == 4"></Step5>
            <Step6 v-if="active == 5"></Step6>
            <Step7 v-if="active == 6"></Step7>
            <Step8 v-if="active == 7"></Step8>
            <Step9 v-if="active == 8"></Step9>
          </el-card>
          <div>
            <el-button style="margin-top: 12px" @click="prev">上一步</el-button>
            <el-button style="margin-top: 12px" @click="">保存</el-button>
            <el-button style="margin-top: 12px" v-if="active != 8" @click="next">下一步</el-button>
            <el-button style="margin-top: 12px" v-if="active == 1" type="primary" @click="submitOrder()">提交订单</el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <br />

  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import Step1 from './step1.vue'
import Step2 from './step2.vue'
import Step3 from './step3.vue'
import Step4 from './step4.vue'
import Step5 from './step5.vue'
import Step6 from './step6.vue'
import Step7 from './step7.vue'
import Step8 from './step8.vue'
import Step9 from './step9.vue'
import { accountList, account, accountDelete, accountUpdate, accountLogin, accountRegister, accountVerify } from '@/http/api/account.ts'
import { orderCreate } from '@/http/api/order.ts'
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
// 当前阶段
const active = ref(0)

const prev = () => {
  if (active.value-- <= 0) active.value = 0
}
const next = () => {
  if (active.value++ > 7) active.value = 0
}

const data = reactive({
  currentPage: ref(1),
  pageSize: ref(20),
  total: ref(0),
})

const getAccountList = () => {
  accountList({ page: data.currentPage, count: data.pageSize }).then((res: any) => {
    console.log('accountList', res)
  }).catch((e) => {
    console.log(e)
  })
}
const del = () => {
  accountDelete({ uid: 1 }).then((res: any) => {
    console.log('del', res)
  }).catch((e) => {
    console.log(e)
  })
}
const update = () => {
  accountUpdate({ uid: 1 }).then((res: any) => {
    console.log('update', res)
  }).catch((e) => {
    console.log(e)
  })
}
const getAccount = () => {
  account({ uid: 2 }).then((res: any) => {
    console.log('account', res)
  }).catch((e) => {
    console.log(e)
  })
}

const login = () => {
  const data = reactive({
    userName: "string",
    email: "string",
    password: "string"
  })

  accountLogin(data).then((res: any) => {
    console.log('login', res)
  }).catch((e) => {
    console.log(e)
  })
}


const register = () => {
  const reg = reactive({
    userName: "string",
    agent: "string",
    password: "string",
    fullName: "string",
    email: "string",
    mobile: "string",
    wechat: "string"
  })
  accountRegister(reg).then((res: any) => {
    console.log('reg', res)
  }).catch((e) => {
    console.log(e)
  })
}
const verify = () => {
  accountVerify({ uid: 1 }).then((res: any) => {
    console.log('accountVerify', res)
  }).catch((e) => {
    console.log(e)
  })
}

const submitOrder = () => {

  let param = {
    order: {
      selectRegion: "加州",
      companyType: "LLC",
      businessType: {
        type: { income: 0, price: 260, mark: "0资产运营", area: "佛罗里达" },
        inUSchildCompany: 2,
        noUSchildCompany: 1,
      },
      mainBusinessIncome: 20,
      totalCompanyAssets: 200,
      fixedAssetAmount: 200,
      isMoneyTrading: true,
      isChildCompany: true,
      isConfirm: true,
    },
    invoice: {
      agentName: "渠道/代理公司",
      companyName: "CCC公司做的业务",
      content: "报税+2021年度 组合",
      price: 629,
      email: "bruce_cao@qq.com",
    },
    pay: {
      type: "monthPay",
      voucher: [
        "https://img2.baidu.com/it/u=1570247328,458070796&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=410",
        "https://img2.baidu.com/it/u=4236181049,2598982592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083"
      ],
      isPay: true,
    },
    upload: {
      list: [
        {
          id: 1,
          fileName: "报税资料1-2023年度公司流水.doc",
          status: "1",
          upAccount: "cycsky",
          uploadDate: "2023-10-10 12:12:22",
        },
        {
          id: 2,
          fileName: "年审资料2-2022年度公司流水.doc",
          status: "1",
          upAccount: "cycsky",
          uploadDate: "2023-10-10 12:12:22",
        },
        {
          id: 3,
          fileName: "年审资料3-2022年度公司流水.doc",
          status: "1",
          upAccount: "cycsky",
          uploadDate: "2023-10-10 12:12:22",
        },
      ],
      isPass: true,
    },
    sign: {
      pdfPath: "报税资料-2023年度公司流水.PDF",
      mark: [
        {
          page: "22",
          desc: "右下方签名",
        },
        {
          page: "23",
          desc: "左下方签名",
        },
      ],
      isSign: true,
    },
    backSign: [
      "https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc",
      "https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc",
    ],
    isDone: false,
  }
  orderCreate(param).then((res: any) => {
    console.log('order', res)
  }).catch((e) => {
    console.log(e)
  })
}



onMounted(() => {
  // getAccountList()
  getAccount()
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
