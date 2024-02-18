<template>
  <!-- <Header /> -->
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="100px" @submit.prevent>
    <el-form-item label="业务类型：" prop="businessType" class="required label-right-align">
      {{ showTypeName(type) }}
      <!-- <el-input v-model="formData.businessType" type="text" readonly></el-input> -->
    </el-form-item>
    <el-form-item label="咨询内容：" prop="content" class="required label-right-align">
      <el-input v-model="formData.content" :rows="4" type="textarea" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
    </el-form-item>

  </el-form>
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
const type = route.query.type
// const desc = ref(route.query.desc)
const userInfo = JSON.parse(localStorage.getItem('userInfo'))
const orderId = ref(route.query.orderId || 0) * 1
const orderStatus = ref(route.query.orderStatus || 0) * 1

// 注册
const formData = ref({
  creator: userInfo.uid,
  orderId: orderId || 0,
  orderStatus: orderStatus || null,
  businessType: 0,
  // desc: desc,
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
const showTypeName = (type) => {
  switch (type) {
    case 'TAX':
      formData.value.businessType = 10
      return '报税';
      break;
    case 'ANNUAL_REVIEW':
      formData.value.businessType = 20
      return '年审';
      break;
    case 'ACCOUNTING':
      formData.value.businessType = 30
      return '做账';
      break;
    case 'REGISTER_COMPANY':
      formData.value.businessType = 40
      return '注册公司';
      break;
    default:
      formData.value.businessType = 90
      return '其它';
  }
}
const submitForm = async () => {
  let data = formData.value
  let res = await createMsg(data)
  if (res.code == 200) {
    ElMessage.success('提交成功')
  }
}
</script>
<style scoped></style>
