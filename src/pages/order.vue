<template>
  <!-- <Header></Header>
  <Search></Search> -->
  <div class="container box">
    <br />
    order
    <br />
    <el-skeleton :rows="5" />
  </div>
  <!-- <Footer></Footer> -->
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import { useStore } from '../store/store'
import { orderType, orderList, orderShow, orderDelete, orderUpdate, orderUpdateStatus, orderCommentCreate } from '@/http/api/order.ts'

export default defineComponent({
  name: 'new page',
  components: {
    Header,
    Search,
    Footer
  },
  setup() {
    const data = reactive({
      store: useStore(),
      msg: ref(),
      init: () => {
        data.msg = '功能开发中,敬请期待'
      },
      getOrderList: () => {
        orderList({ page: 1, count: 20, businessType: 1, account: '' }).then((res: any) => {
          console.log('OrderList', res)
        }).catch((e) => {
          console.log(e)
        })
      }
    })

    const refData = toRefs(data)

    onMounted(() => {
      data.getOrderList()
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
</style>
