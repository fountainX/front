<template>
  <Header />
  <br><br>
  <div class="container">
    <el-card>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="个人消息" name="1">
          <div class="box">
            <el-table :data="order" :loading="loading" stripe border>
              <el-table-column prop="order_id" label="订单编号" width="90" />
              <el-table-column prop="order_status" label="订单状态" width="160">
                <template #default="{ row }">
                  {{ row.order_status == 10 ? '报价开始' : '' }}
                  {{ row.order_status == 11 ? '报价确认' : '' }}
                  {{ row.order_status == 12 ? '出具发票' : '' }}
                  {{ row.order_status == 13 ? '付款' : '' }}
                  {{ row.order_status == 14 ? '未付款-继续流程' : '' }}
                  {{ row.order_status == 15 ? '上传资料' : '' }}
                  {{ row.order_status == 16 ? '资料审核' : '' }}
                  {{ row.order_status == 17 ? '回传签字' : '' }}
                  {{ row.order_status == 18 ? '签回' : '' }}
                </template>
              </el-table-column>
              <el-table-column prop="business_type" label="业务类型">
                <template #default="{ row }">
                  {{ getType(row.business_type) }}
                </template>
              </el-table-column>
              <el-table-column prop="content" label="内容" />
              <el-table-column prop="create_at" label="创建时间" width="180">
                <template #default="{ row }">
                  {{ formatDate(row.create_at) }}
                </template>
              </el-table-column>
              <el-table-column label="是否已读" width="90">
                <template #default="{ row }">
                  {{ row.read ? '已读' : '未读' }}
                </template>
              </el-table-column>
              <el-table-column label="操作" width="190">
                <template #default="{ row }">
                  <el-button size="small" @click="setIsRead(row.message_id)">标记已读</el-button>
                  <el-button size="small" @click="viewDetail(row.business_type, row.order_id)">查看订单</el-button>
                </template>
              </el-table-column>
            </el-table>

            <div class="page">
              <el-pagination
                background
                layout="prev, pager, next"
                v-model:current-page="pagination.current"
                :page-size="pagination.pageSize"
                :total="pagination.total"
                @current-change="() => { getMessageList(); }">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
  <br><br>
  <Footer />
</template>
<script lang="ts" setup>
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'
import { useRouter } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { messageList, isMsgRead } from '@/http/api/pub.ts'
import { getType, businessTypeList } from '@/utils/type.ts'
import { vi } from 'element-plus/es/locale'

const router = useRouter()
const loading = ref(true);
const uid = router.currentRoute.value.query.uid

// tab 切换
const activeName = ref('1')

// 列表
let order = ref([])

const pagination = reactive({
  total: 0,
  current: 1,
  pageSize: 10
});

// 时间戳格式化
const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1 // 月份是从0开始的，所以要加1
  const day = dateObj.getDate()
  const hour = dateObj.getHours()
  const minute = dateObj.getMinutes()
  const second = dateObj.getSeconds()
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
}

const getMessageList = () => {
  loading.value = true
  let param = {
    page: pagination.current,
    count: pagination.pageSize,
    is_read: false
  }
  messageList(param)
    .then((res: any) => {
      if (res.code == 200) {
        order.value = res.data
        pagination.total = res.total
        loading.value = false
        // ElMessage.success('更新成功')
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

const setIsRead = (id: number) => {
  isMsgRead({ msgId: id })
    .then((res: any) => {
      if (res.code == 200) {
        ElMessage.success('标记已读成功')
        getMessageList()
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
const getValueById = (arr: any[], id: any) => {
  const obj = arr.find(item => item.id === id);
  return obj ? obj.value : null;
}

const viewDetail = (type: string, id: number) => {
  // order?type=TAX&orderId=199
  let businessType = getValueById(businessTypeList, type)
  router.push({ name: 'order', query: { type: businessType, orderId: id, } })
}

onMounted(() => {
  getMessageList()
})
</script>
<style scoped>
.login {
  margin: 40px auto;
  width: 1000px;
  height: auto;
}


.box {
  padding: 0px;
}

.tc {
  padding: 50px;
  width: 600px;
  margin: 0 auto;
}

.page {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
