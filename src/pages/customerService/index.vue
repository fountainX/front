<template>
  <!-- <Header /> -->
  <div class="login">
    <div class="box">
      <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="100px" size="small" @submit.prevent>
        <el-form-item label="业务类型：" prop="desc" class="required label-right-align">
          <el-input v-model="formData.desc" type="text" readonly></el-input>
        </el-form-item>
        <el-form-item label="咨询内容：" prop="content" class="required label-right-align">
          <el-input v-model="formData.content" :rows="3" type="textarea" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <!-- <Footer /> -->
</template>
<script lang="ts" setup>
import Header from '../../components/header.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { createMsg } from '@/http/api/order.ts'
import { ElMessage } from 'element-plus'
const router = useRouter()
const route = useRoute()
const type = ref(route.query.type || 0) * 1
const desc = ref(route.query.desc)
const userInfo = JSON.parse(localStorage.getItem('userInfo'))
const orderId = ref(route.query.orderId || 0) * 1
const orderStatus = ref(route.query.orderStatus || 0) * 1
// 注册
const formData = ref({
  creator: userInfo.uid,
  orderId: orderId || 0,
  orderStatus: orderStatus || null,
  businessType: type,
  desc: desc,
  content: ''
})
const rules = {
  content: [
    {
      required: true,
      message: '不可为空'
    }
  ]
}
const submitForm = async () => {
  let data = formData.value
  delete data.desc
  let res = await createMsg(data)
  if (res.code == 200) {
    ElMessage.success('提交成功')
  }
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
