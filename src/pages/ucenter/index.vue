<template>
  <Header />
  <br><br>
  <div class="container">
    <el-card>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="我的订单" name="1">
          <div class="box">
            <el-table :data="order" :loading="loading" stripe border>
              <el-table-column prop="order_id" label="订单ID" width="100" />
              <el-table-column prop="business_type" label="订单类型" width="140">
                <template #default="scope">
                  {{ getType(scope.row.business_type) }}
                </template>
              </el-table-column>
              <el-table-column prop="order_no" label="订单编号" />
              <el-table-column prop="order_status" label="订单状态">
                <template #default="scope">
                  {{ getStatus(scope.row.order_status) }}
                </template>
              </el-table-column>
              <el-table-column prop="updateTime" label="更新时间" />
              <el-table-column label="操作" width="110">
                <template #default="{ row }">
                  <el-button type="primary" size="small" @click="reviewOrder(row.order_id, row.business_type)" plain>查看订单</el-button>
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
                @current-change="() => { getOrderList(); }">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="个人资料" name="2">
          <div class="box tc">
            <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="100px" @submit.prevent>
              <el-form-item label="用户名：" prop="userName" class="required label-right-align">
                <el-input v-model="formData.userName" type="text" clearable></el-input>
              </el-form-item>
              <el-form-item label="姓名：" prop="fullName" class="required label-right-align">
                <el-input v-model="formData.fullName" type="text" clearable></el-input>
              </el-form-item>
              <!-- <el-form-item label="密码：" prop="password" class="required label-right-align">
              <el-input v-model="formData.password" type="password" clearable></el-input>
            </el-form-item> -->
              <!-- <el-form-item label="代理：" prop="agentId" class="label-right-align">
              <el-input v-model="formData.agentId" type="text" clearable></el-input>
            </el-form-item> -->

              <el-form-item label="代理：" prop="agentId" class="label-right-align">
                <el-select v-model="formData.agentId" @change="selectAgent" style="width: 100%">
                  <el-option v-for="item in agentList" :value="item.agent_id" :label="item.agent_name"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="邮箱：" prop="email" class="required label-right-align">
                <el-input v-model="formData.email" type="text" clearable></el-input>
              </el-form-item>
              <el-form-item label="手机号：" prop="mobile" class="required label-right-align">
                <el-input v-model="formData.mobile" type="text" clearable></el-input>
              </el-form-item>
              <el-form-item label="微信号：" prop="wechat" class="required label-right-align">
                <el-input v-model="formData.wechat" type="text" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <!-- <el-button type="primary" @click="resetForm()">重置</el-button> -->
                <el-button type="primary" @click="submitForm()">修改用户信息</el-button>
              </el-form-item>
            </el-form>
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
import { ref, toRefs, reactive, getCurrentInstance, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ElMessage } from 'element-plus'
import { account, accountUpdate, getAgentList, getCouponInfo } from '@/http/api/account.ts'
import { orderList, orderShow } from '@/http/api/order.ts'

const router = useRouter()
const loading = ref(true);
const uid = router.currentRoute.value.query.uid
const userInfo = ref(JSON.parse(localStorage.getItem('userInfo') as any))
const isLogin = () => {
  if (userInfo.value == null) {
    userInfo.value = { uid: '' }
    router.push("/login")
    return
  }
}
isLogin()

const businessTypeList = [
  {
    id: 10,
    value: 'TAX',
    desc: '报税'
  },
  {
    id: 20,
    value: 'ANNUAL_REVIEW',
    desc: '年审'
  },
  {
    id: 30,
    value: 'ACCOUNTING',
    desc: '做账'
  },
  {
    id: 40,
    value: 'REGISTER_COMPANY',
    desc: '注册公司'
  },
  {
    id: 50,
    value: 'SALE_TAX',
    desc: '销售税'
  },
  {
    id: 90,
    value: 'OTHER',
    desc: '其他'
  },
  {
    id: 51,
    value: 'SALE_TAX_LICENSE_APPLICATION',
    desc: '销售税-许可证申请'
  },
  {
    id: 52,
    value: 'SALE_TAX_LICENSE_APPLICATION',
    desc: '销售税-申报'
  },
  {
    id: 91,
    value: 'ODI_CHECKIN',
    desc: '其他-ODI报到'
  },
  {
    id: 92,
    value: 'BANK_ACCOUNT_OPENING',
    desc: '其他-银行开户'
  },
  {
    id: 93,
    value: 'L_VISA',
    desc: '其他-L签'
  },
  {
    id: 94,
    value: 'US_EB2_IMMIGRATION',
    desc: '其他-美国EB2移民'
  },
  {
    id: 95,
    value: 'MEXICAN_GREEN_CARD',
    desc: '其他-墨西哥绿卡'
  },
  {
    id: 96,
    value: 'MEXICAN_BUSINESS_VISA',
    desc: '其他-墨西哥商务签证'
  },
  {
    id: 97,
    value: 'US_INSURANCE',
    desc: '其他-美国保险'
  },
  {
    id: 120,
    value: 'OTHER_OTHER',
    desc: '其他-其他'
  }
]

const getType = (id) => {
  if (!id) {
    return
  }
  let res = businessTypeList.find((item) => {
    return item.id == id
  })
  return res.desc
}

const statusList = [
  {
    id: '10',
    value: 'QUOTATION_STARTED',
    desc: '报价开始'
  },
  {
    id: '11',
    value: 'QUOTATION_CONFIRMED',
    desc: '报价确认'
  },
  {
    id: '12',
    value: '发票开具',
    desc: 'INVOICE_ISSUED'
  },
  {
    id: '13',
    value: 'PAID',
    desc: '已付款'
  },
  {
    id: '14',
    value: 'NO_PAID_CONTINUE',
    desc: '未付款可以继续流程'
  },
  {
    id: '15',
    value: 'DOCUMENT_UPLOADED',
    desc: '资料上传'
  },
  {
    id: '16',
    value: 'DOCUMENT_REVIEWED',
    desc: '资料审核'
  },
  {
    id: '17',
    value: 'DOCUMENT_REVIEWED',
    desc: '签字回传'
  },
  {
    id: '18',
    value: 'SIGNATURE_RETURNED_BACK',
    desc: '签回'
  },
  {
    id: '20',
    value: 'FINISHED',
    desc: '完结'
  },
  {
    id: '99',
    value: 'DELETED',
    desc: '删除'
  }
]
const getStatus = (id) => {
  if (!id) {
    return
  }
  let res = statusList.find((item) => {
    return item.id == id
  })
  return res.desc
}
// tab 切换
const activeName = ref('1')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  if (tab.uid == 13) {
    getOrderList()
  }
}
// 订单列表
let order = ref([])
// 更新用户信息
const formData: any = reactive({
  userName: '',
  fullName: '',
  // password: "",
  agent: '',
  email: '',
  mobile: '',
  wechat: ''
})
const rules = {
  userName: [
    {
      required: true,
      message: '用户不可为空'
    }
  ],
  fullName: [
    {
      required: true,
      message: '姓名不可为空'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不可为空'
    }
  ],
  email: [
    {
      required: true,
      message: '邮箱不可为空'
    },
    {
      pattern: /^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
      trigger: ['blur', 'change'],
      message: '邮箱格式不正确'
    }
  ],
  mobile: [
    {
      required: true,
      message: '手机号不可为空'
    },
    {
      pattern: /^[1][3-9][0-9]{9}$/,
      trigger: ['blur', 'change'],
      message: '请输入正确手机号'
    }
  ],
  wechat: [
    {
      required: true,
      message: '微信号不可为空'
    }
  ]
}

const getAccount = (id) => {
  account({ uid: id })
    .then((res: any) => {
      console.log('userinfo', res)
      formData.userName = res.data.user_name
      formData.fullName = res.data.full_name
      formData.agent = res.data.agent
      formData.email = res.data.email
      formData.mobile = res.data.mobile
      formData.wechat = res.data.wechat
      formData.agentId = res.data.agent_id
    })
    .catch((e) => {
      console.log(e)
    })
}

const pagination = reactive({
  total: 0,
  current: 1,
  pageSize: 10
});

const getOrderList = () => {
  loading.value = true
  let param = {
    page: pagination.current,
    count: pagination.pageSize,
    businessType: 10,
    uid: userInfo.uid
  }
  orderList(param)
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
const reviewOrder = (id, type) => {
  let res = businessTypeList.find((item) => {
    return item.id == type
  })
  router.push({ path: 'order', query: { type: res.value, orderId: id } })
}

getAccount(uid)
getOrderList()

const userUpdate = () => {
  accountUpdate(uid, formData)
    .then((res: any) => {
      if (res.code == 200) {
        ElMessage.success('更新成功')
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

// 订单详情
const getOrder = (oid) => {
  orderShow({ order_id: oid })
    .then((res: any) => {
      if (res.code == 200) {
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

// 更新用户信息
const instance = getCurrentInstance()
const submitForm = () => {
  instance.proxy.$refs['vForm'].validate((valid) => {
    if (!valid) return
    userUpdate()
  })
}
const resetForm = () => {
  instance.proxy.$refs['vForm'].resetFields()
}

const getAgentListHandle = async () => {
  let res = await getAgentList()
  agentList.value = res.data
  console.log(res)
}
const agentList = ref([])
onMounted(() => {
  getAgentListHandle()
})
</script>
<style scoped>
.login {
  margin: 40px auto;
  width: 1000px;
  height: auto;
}

.login-input {
  width: 200px;
  margin: 10px;
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
