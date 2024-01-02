<template>
  <Header></Header>
  <div class="container box">
    <div class="order-type">
      <div v-for="(item, index) in typeList.slice(0, 4)" @click="openBusiness(item.code)">{{ item.name }}</div>
    </div>
  </div>
  <!-- <Footer></Footer> -->
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import { useStore } from '../store/store'
import { useRouter } from 'vue-router'
import { orderType } from '@/http/api/order.ts'
import { ruleList, agentList, invoiceList } from '@/http/api/pub.ts'


export default defineComponent({
  name: 'new page',
  components: {
    Header,
    Footer
  },
  setup() {
    const router = useRouter()
    const data = reactive({
      router: useRouter(),
      store: useStore(),
      msg: ref(),
      typeList: ref([]),
      init: () => {
        data.msg = '功能开发中,敬请期待'
      },
      getRuleList: () => {
        // TAX   ANNUAL_REVIEW  ACCOUNTING    REGISTER_COMPANY  SALE_TAX
        ruleList({ page: 1, count: 20, businessType: 'TAX' }).then((res: any) => {
          console.log('rule', res)
        }).catch((e) => {
          console.log(e)
        })
      },
      getAgentList: () => {
        agentList({ page: 1, count: 20 }).then((res: any) => {
          console.log('rule', res)
        }).catch((e) => {
          console.log(e)
        })
      },
      getInvoiceList: () => {
        invoiceList({ page: 1, count: 20, agent: '', company: '' }).then((res: any) => {
          console.log('invoice', res)
        }).catch((e) => {
          console.log(e)
        })
      },
      getOrderType: () => {
        orderType().then((res: any) => {
          console.log('orderType', res)
          data.typeList = res.data
        }).catch((e) => {
          console.log(e)
        })
      },
      openBusiness: (code) => {
        router.push({ path: '/order', query: { type: code } })
      }
    })

    const refData = toRefs(data)

    onMounted(() => {
      // data.getRuleList()
      // data.getAgentList()
      // data.getInvoiceList()
      data.getOrderType()
    })

    return {
      ...refData
    }
  }
})
</script>
<style scoped>
.box {
  min-height: 600px;
}

.order-type {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.order-type div {
  cursor: pointer;
  text-align: center;
  width: 200px;
  height: 100px;
  line-height: 100px;
  background: #f0f2f5;
  margin: 15px;
  border-radius: 5px;
}

.order-type div:hover {
  background: #eff6ff;
}
</style>
