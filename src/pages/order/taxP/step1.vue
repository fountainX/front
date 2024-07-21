<template>
  <el-divider content-position="left">
    <h2>个人报税</h2>
  </el-divider>
  <div style="margin-left: 50px; margin-top: 40px">
    <br />
    <el-form label-width="390px">
      <el-form-item v-for="item in ruleListDataC" :label="item.rule_content + '：'">
        <el-input v-if="item.vale_type == 'BOOL'" v-model="item.price" disabled type="text" style="width: 200px" clearable>
          <template #append>美元</template>
        </el-input>
        <el-input-number v-if="item.vale_type == 'TEXT_MULTIPLY'" :placeholder="'公司数量'" style="width: 200px" v-model="num" :min="0" :max="100" @change="changeNumber1" />
        <div v-if="item.vale_type == 'NUMBER'">
          <el-input-number :placeholder="'笔数'" v-model="transactions" :min="0" :max="100" style="width: 200px" @change="changeNumber2" />
          <!-- <div class="tip">笔数（1-10）+ 300，笔数（>10）+ 1000</div> -->
        </div>
      </el-form-item>
    </el-form>

    <!-- <div style="display: flex">
      <el-radio-group v-model="valueType" @change="changePrice" style="width: 50%">
        <el-radio v-for="item in ruleListDataC" :value="item.vale_type">{{ item.rule_content }}</el-radio>
      </el-radio-group>
      <div class="right">
        <div></div>
        <div>
          <span v-if="valueType == 'TEXT_MULTIPLY'">
            持有公司数：
            <el-input-number v-model="num" :min="1" :max="100" @change="changeNum" />
          </span>
        </div>
        <div>
          <span v-if="valueType == 'NUMBER'">
            交易笔数：
            <el-input-number v-model="transactions" :min="1" :max="10000" @change="changeTransactions" />
          </span>
        </div>
      </div>
    </div> -->
    <div class="total-price" style="text-align: left">
      <span>原价：</span>
      <span class="price">{{ price }}</span>

      <br />
      <span>折扣价：</span>
      <span class="price">{{ (price * rate) / 100 }}</span>
    </div>
  </div>

  <el-dialog v-model="dialogFormVisible" title="联系客服">
    <SeekAdvice :params="query"></SeekAdvice>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, ref } from 'vue'
// import { ruleList, agentList, invoiceList } from '@/http/api/pub.ts'
import SeekAdvice from '@/pages/customerService/index.vue'
import { ruleList } from '@/http/api/pub.ts'

export default defineComponent({
  components: { SeekAdvice },
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
  setup(props, context) {
    let dialogFormVisible = ref(false)
    let query = reactive({
      type: 11,
      desc: '个人报税'
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
    const valueType = ref('BOOL')
    const price = ref(0)
    const num = ref()
    const transactions = ref()
    const couponInfo = JSON.parse(localStorage.getItem('couponInfo') || '{}')
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
    const rate = couponInfo.rate || 100
    const ruleListDataC = ref([{}])
    const getRuleList = () => {
      // TAX   ANNUAL_REVIEW  ACCOUNTING    REGISTER_COMPANY  SALE_TAX
      let region = 'US'
      ruleList({ page: 1, count: 20, businessType: 11, region: region, company_type: 'C' }).then((res: any) => {
        const list = res.data.toSorted((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
        ruleListDataC.value = list
        price.value = list[0].price
        props.order.totalPrice = (price.value * rate) / 100
        props.order.oldTotalPrice = price.value
        props.invoice.price = (price.value * rate) / 100
      })
    }
    const changePrice = (val: any) => {
      console.log(val)
      valueType.value = val
      let d = ruleListDataC.value.find((item: any) => item.vale_type === val) as any
      price.value = parseInt(d.price)
      num.value = 1
      props.order.transactions = props.order.number = 0
      props.order.valeType = valueType.value
      props.order.totalPrice = (price.value * rate) / 100
      props.order.oldTotalPrice = price.value
      props.invoice.price = (price.value * rate) / 100
    }
    // const changeNum = (val: any) => {
    //   num.value = val
    //   price.value = 1000 * num.value
    //   props.order.number = num.value
    //   props.order.transactions = 0
    //   props.order.valeType = valueType.value
    //   props.order.totalPrice = (price.value * rate) / 100
    //   props.order.oldTotalPrice = price.value
    //   props.invoice.price = (price.value * rate) / 100
    // }
    // const changeTransactions = (val: any) => {
    //   transactions.value = val
    //   let num = transactions.value < 10 ? 300 : 1000
    //   price.value = 1000 + num
    //   props.order.number = 0
    //   props.order.transactions = transactions.value
    //   props.order.valeType = valueType.value
    //   props.order.totalPrice = (price.value * rate) / 100
    //   props.order.oldTotalPrice = price.value
    //   props.invoice.price = (price.value * rate) / 100
    // }
    const changeNumber1 = (val: any) => {
      console.log(val, transactions.value)
      num.value = val
      let rateNum = transactions.value == undefined ? 0 : transactions.value
      let priceBase = ruleListDataC.value[0].price
      let priceCompany = ruleListDataC.value[1].price * num.value
      let rate = rateNum < 10 ? 300 : ruleListDataC.value[2].price
      let priceStock = rateNum == 0 ? 0 : rate
      console.log(priceCompany, priceStock)
      price.value = priceBase + priceCompany + priceStock

      props.order.userName = userInfo.user_name
      props.order.number = num.value
      props.order.transactions = transactions.value
      props.order.valeType = valueType.value
      props.order.totalPrice = (price.value * rate) / 100
      props.order.oldTotalPrice = price.value
      props.invoice.price = (price.value * rate) / 100
    }
    const changeNumber2 = (val: any) => {
      transactions.value = val
      let rateNum = num.value == undefined ? 0 : num.value
      let priceBase = ruleListDataC.value[0].price
      let priceCompany = ruleListDataC.value[1].price * rateNum
      let priceStock = val < 10 ? 300 : ruleListDataC.value[2].price
      console.log(val, priceStock)
      if (val == 0) priceStock = 0
      price.value = priceBase + priceCompany + priceStock

      props.order.userName = userInfo.user_name
      props.order.number = num.value
      props.order.transactions = transactions.value
      props.order.valeType = valueType.value
      props.order.totalPrice = (price.value * rate) / 100
      props.order.oldTotalPrice = price.value
      props.invoice.price = (price.value * rate) / 100
    }
    onMounted(() => {
      getRuleList()
    })
    return {
      nonUS,
      dialogFormVisible,
      query,
      rate,
      valueType,
      price,
      num,
      transactions,
      changePrice,
      // changeNum,
      // changeTransactions,
      ruleListDataC,
      getRuleList,
      changeNumber1,
      changeNumber2
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

.right div {
  height: 32px;
  margin-top: -1px;
}

:deep(.el-radio-group) {
  display: block;
}

:deep(.el-radio) {
  display: block;
}
</style>
