<template>
  <Header />
  <div class="login">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="我的订单" name="first">
        <div class="box">
          订单列表
        </div>
      </el-tab-pane>
      <el-tab-pane label="用户资料" name="second">
        <div class="box">
          <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="100px"
            size="small" @submit.prevent>
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
const activeName = ref('second')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  if (tab.uid == 13) {
    getOrderList()
  }
}

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
getAccount(uid)

const userUpdate = () => {
  accountUpdate(formData).then((res: any) => {
    if (res.code == 200) {
      ElMessage.success('更新成功')
    }
  }).catch((e) => {
    console.log(e)
  })
}

const getOrderList = () => {
  let param = {
    page: 1,
    count: 20,
    businessType: 'TAX',
    uid: userInfo.uid
  }
  orderList(param).then((res: any) => {
    if (res.code == 200) {

      // ElMessage.success('更新成功')
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
  width: 600px;
  height: auto;
}

.login-input {
  width: 200px;
  margin: 10px;
}

.box {
  padding: 50px 100px;
  background: #ecf5ff;
}
</style>
