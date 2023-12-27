<template>
  <Header />
  <div class="login">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="我的订单" name="1">
        <div class="box">
          <el-table :data="order" stripe border style="width: 100%">
            <el-table-column prop="order_id" label="订单ID" width="80" />
            <el-table-column prop="business_type" label="订单类型" />
            <el-table-column prop="order_no" label="订单编号" />
            <el-table-column prop="order_status" label="订单状态" />
            <el-table-column prop="updateTime" label="更新时间" width="160" />
            <el-table-column label="操作" width="60">
              <template #default="{ row }">
                <el-button type="primary" @click="reviewOrder(row.order_id)" link>查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="用户资料" name="2">
        <div class="box">
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
            <el-form-item label="代理：" prop="agent" class="label-right-align">
              <el-input v-model="formData.agent" type="text" clearable></el-input>
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


  </div>
  <!-- <Footer /> -->
</template>
<script lang="ts" setup>
import Header from '../../components/header.vue'
import { useRouter } from 'vue-router'
import { ref, toRefs, reactive, getCurrentInstance } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ElMessage } from 'element-plus'
import { account, accountUpdate } from '@/http/api/account.ts'
import { orderList, orderShow } from '@/http/api/order.ts'

const router = useRouter();
const uid = router.currentRoute.value.query.uid
const userInfo = JSON.parse(localStorage.getItem('userInfo'))

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
  userName: "",
  fullName: "",
  // password: "",
  agent: "",
  email: "",
  mobile: "",
  wechat: "",
})
const rules = {
  userName: [{
    required: true,
    message: '用户不可为空',
  }],
  fullName: [{
    required: true,
    message: '姓名不可为空',
  }],
  password: [{
    required: true,
    message: '密码不可为空',
  }],
  email: [{
    required: true,
    message: '邮箱不可为空',
  }, {
    pattern: /^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
    trigger: ['blur', 'change'],
    message: '邮箱格式不正确'
  }],
  mobile: [{
    required: true,
    message: '手机号不可为空',
  }, {
    pattern: /^[1][3-9][0-9]{9}$/,
    trigger: ['blur', 'change'],
    message: '请输入正确手机号'
  }],
  wechat: [{
    required: true,
    message: '微信号不可为空',
  }],
}

const getAccount = (id) => {
  account({ uid: id }).then((res: any) => {
    console.log('userinfo', res)
    formData.userName = res.data.user_name
    formData.fullName = res.data.full_name
    formData.agent = res.data.agent
    formData.email = res.data.email
    formData.mobile = res.data.mobile
    formData.wechat = res.data.wechat
  }).catch((e) => {
    console.log(e)
  })
}
const getOrderList = () => {
  let param = {
    page: 1,
    count: 20,
    businessType: 10,
    uid: userInfo.uid
  }
  orderList(param).then((res: any) => {
    if (res.code == 200) {
      order.value = res.data
      // ElMessage.success('更新成功')
    }
  }).catch((e) => {
    console.log(e)
  })
}
const reviewOrder = (id) => {
  router.push({ path: 'order', query: { type: 'TAX', orderId: id } })
}


getAccount(uid)
getOrderList()

const userUpdate = () => {
  accountUpdate(formData).then((res: any) => {
    if (res.code == 200) {
      ElMessage.success('更新成功')
    }
  }).catch((e) => {
    console.log(e)
  })
}

// 订单详情
const getOrder = (oid) => {
  orderShow({ order_id: oid }).then((res: any) => {
    if (res.code == 200) {

    }
  }).catch((e) => {
    console.log(e)
  })
}


// 更新用户信息
const instance = getCurrentInstance()
const submitForm = () => {
  instance.proxy.$refs['vForm'].validate(valid => {
    if (!valid) return
    userUpdate()
  })
}
const resetForm = () => {
  instance.proxy.$refs['vForm'].resetFields()
}
</script>
<style scoped>
.login {
  margin: 40px auto;
  width: 800px;
  height: auto;
}

.login-input {
  width: 200px;
  margin: 10px;
}

.box {
  padding: 50px;
  background: #ecf5ff;
}
</style>
