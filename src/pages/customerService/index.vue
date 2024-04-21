<template>
  <!-- <Header /> -->
  <div class="txt">注：请填写咨询内容，稍后会有客服专员与您联系！</div>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="100px" @submit.prevent>
    <el-form-item label="业务类型：" prop="businessType" class="required label-right-align">
      {{ showTypeName(type) }}
      <!-- <el-input v-model="formData.businessType" type="text" readonly></el-input> -->
    </el-form-item>
    <el-form-item label="咨询内容：" prop="content" class="required label-right-align">
      <el-input v-model="formData.content" :rows="4" placeholder="请填咨询内容" type="textarea" clearable></el-input>
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
  content: '',
  isCustomer: true,
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
      return '报税'
      break
    case 'ANNUAL_REVIEW':
      formData.value.businessType = 20
      return '年审'
      break
    case 'ACCOUNTING':
      formData.value.businessType = 30
      return '做账'
      break
    case 'REGISTER_COMPANY':
      formData.value.businessType = 40
      return '注册公司'
    case 'SALE_TAX_LICENSE_APPLICATION':
      formData.value.businessType = 51
      return '销售税-许可证申请'
    case 'SALE_TAX_REPORT':
      formData.value.businessType = 52
      return '销售税-申报'
    case 'ODI_CHECKIN':
      formData.value.businessType = 91
      return '其他-ODI报到'
    case 'BANK_ACCOUNT_OPENING':
      formData.value.businessType = 92
      return '其他-银行开户'
    case 'L_VISA':
      formData.value.businessType = 93
      return '其他-L签'
      break
    case 'US_EB2_IMMIGRATION':
      formData.value.businessType = 94
      return '其他-美国EB2移民'
      break
    case 'MEXICAN_GREEN_CARD':
      formData.value.businessType = 95
      return '其他-墨西哥绿卡'
      break
    case 'MEXICAN_BUSINESS_VISA':
      formData.value.businessType = 96
      return '其他-墨西哥商务签证'
      break
    case 'US_INSURANCE':
      formData.value.businessType = 97
      return '其他-美国保险'
      break
    default:
      formData.value.businessType = 90
      return '其它'
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
<style scoped>
.txt {
  margin-top: -20px;
  margin-left: 18px;
  color: #acabab;
}
</style>
