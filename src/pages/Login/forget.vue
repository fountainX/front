<template>
  <Header />
  <div class="login container">
    <el-card class="bg">
      <div class="box">
        <div class="tc">
          <span>密码找回</span>
        </div>
        <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="100px" @submit.prevent>
          <el-form-item label="邮箱：" prop="email" class="required label-right-align">
            <el-input v-model="formData.email" type="text" style="width: 180px;margin-right: 5px;" clearable></el-input>
            <el-button type="primary" @click="getVerifyCode()" plain :loading="loading">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="验证码：" prop="code" class="required label-right-align">
            <el-input v-model="formData.code" type="text" clearable></el-input>
          </el-form-item>
          <el-form-item label="新密码：" prop="password" class="required label-right-align">
            <el-input v-model="formData.password" type="password" clearable></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="enterPassword" class="required label-right-align">
            <el-input v-model="formData.enterPassword" type="password" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="formData.code == ''" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
  <Footer />
</template>
<script lang="ts" setup>
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'
import { ref, toRefs, reactive, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { accountForget, accountReset } from '@/http/api/account.ts'

const router = useRouter()
const loading = ref(false)

// 密码找回
const formData = reactive({
  email: '',
  code: '',
  password: '',
  enterPassword: '',
})
const rules = {
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
  code: [
    {
      required: true,
      message: '验证码不可为空'
    },
  ],
  password: [
    {
      required: true,
      message: '密码不可为空'
    },
  ],
  enterPassword: [
    {
      required: true,
      message: '密码不可为空'
    },
  ]
}

const getVerifyCode = () => {
  loading.value = true
  accountForget(formData)
    .then((res: any) => {
      loading.value = false
      if (res.code == 200) {
        ElMessage.success('验证码发送成功，请登录邮箱获取');
      } else {
        ElMessage.error('邮箱不存在，请检查');
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
const resetPassword = () => {
  loading.value = true
  accountReset(formData)
    .then((res: any) => {
      loading.value = false
      if (res.code == 200) {
        ElMessage.success('密码重置成功');
        router.push('/login')
      } else {
        ElMessage.error('密码重置失败');
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
const isPasswordsMatched = () => {
  return formData.password === formData.enterPassword
}
// 表单验证
const instance = getCurrentInstance()
const submitForm = () => {
  if (!isPasswordsMatched()) {
    ElMessage.error('两次密码不一致');
    return
  }
  instance.proxy.$refs['vForm'].validate((valid: any) => {
    if (!valid) return
    //TODO: 提交表单
    // delete formData.email;
    // delete formData.enterPassword;
    resetPassword()
  })
}
const resetForm = () => {
  instance.proxy.$refs['vForm'].resetFields()
}

</script>
<style scoped>
.login {
  margin: 40px auto;
  /* width: 800px; */
  height: auto;
}

.login-input {
  width: 200px;
  margin: 10px;
}

.box {
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 20px;
  width: 60%;
  float: right;
  background: rgba(255, 255, 255, 0.9);
}

.tc {
  text-align: center;
  line-height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid #fff;
}

.tc span {
  font-size: 20px;
}

.bg {
  background: url(@/assets/img/video-bg.jpg) center no-repeat;
  background-size: cover;
}
</style>
