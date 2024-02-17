<template>
  <Header />
  <div class="login container">
    <el-card class="bg">
      <div class="box">
        <div class="tc">
          <span>用户登录</span>
        </div>
        <el-form :model="formLogin" label-position="right" label-width="100px">
          <el-form-item label="用户名：">
            <el-input v-model="formLogin.userNameOrEmail" placeholder="输入用户名或者邮箱" clearable />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="formLogin.password" placeholder="输入密码" @keydown="(e: any) => e.code === 'Enter' ? login() : ''" clearable />
          </el-form-item>
          <el-form-item>
            <div class="flex">
              <el-button type="primary" @click="userLogin()">登录</el-button>
              <a href="#/forget" class="fr">忘记密码</a>
            </div>
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
import { useRouter } from 'vue-router'
import { ref, toRefs, reactive, getCurrentInstance } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ElMessage } from 'element-plus'
import { accountLogin, accountRegister, account, accountDelete, accountUpdate, getCouponInfo } from '@/http/api/account.ts'
import { setToken } from '@/utils/auth.ts'
const formLogin = reactive({
  userNameOrEmail: ref(),
  password: ref()
})
const router = useRouter()
const userName = ref('')
const pwd = ref('')

// tab 切换
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// 注册
const formData = reactive({
  userName: '',
  fullName: '',
  password: '',
  agent: '',
  companyName: '',
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
  ]
  // wechat: [{
  //   required: true,
  //   message: '微信号不可为空',
  // }],
}

const login = () => {
  if (userName.value === 'admin' && pwd.value === 'admin') {
    ElMessage({ type: 'success', message: '登录成功' })
    userLogin()
  } else if (userName.value === '' && pwd.value === '') {
    ElMessage({ type: 'error', message: '请输入用户名和密码' })
  } else {
    ElMessage({ type: 'error', message: '用户名或密码输入错误' })
  }

  return {
    userName: userName.value,
    pwd: pwd.value
  }
}

const userLogin = () => {
  accountLogin(formLogin)
    .then((res: any) => {
      console.log('Login', res)
      if (res.code == 200) {
        setToken(res.data.accessToken)
        getAccount(res.data.uid)
        ElMessage.success('登录成功')
        setTimeout(() => {
          router.push('/ucenter?uid=' + res.data.uid)
        }, 200);
        // location.reload()
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
const userRegister = () => {
  accountRegister(formData)
    .then((res: any) => {
      if (res.code == 200) {
        ElMessage.success('注册成功')
        activeName.value = 'first'
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
const getAccount = (uid: any) => {
  account({ uid: uid })
    .then((res: any) => {
      //console.log('account', res)
      localStorage.setItem('userInfo', JSON.stringify(res.data))
      if (res.data.couponId) {
        getCouponInfo(res.data.couponId)
          .then((coupon) => {
            localStorage.setItem('couponInfo', JSON.stringify(coupon.data))
            router.push('/')
          })
          .catch((err) => {
            router.push('/')
          })
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
const userUpdate = () => {
  const param = reactive({
    uid: '6',
    agent: '参加4444',
    userName: 'bruce2',
    fullName: '夏侯3',
    email: '123123@qq.com',
    mobile: '13800000000',
    wechat: 'ccccc'
  })
  accountUpdate(param)
    .then((res: any) => {
      if (res.code == 200) {
        ElMessage.success('更新成功')
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
const userDelete = () => {
  const param = reactive({
    uid: '3'
  })
  accountDelete(param)
    .then((res: any) => {
      if (res.code == 200) {
        ElMessage.success('删除成功')
      }
    })
    .catch((e: any) => {
      console.log(e)
    })
}
// 用户注册
const instance = getCurrentInstance()
const submitForm = () => {
  instance.proxy.$refs['vForm'].validate((valid: any) => {
    if (!valid) return
    //TODO: 提交表单
    userRegister()
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
  padding: 50px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  width: 50%;
  float: right;
}

.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  /* background: url(@/assets/img/slider.png) center no-repeat;
  background-size: cover; */
}
</style>
