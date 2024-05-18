<template>
  <Header />
  <div class="login container">
    <el-card class="bg">

      <div class="box">
        <div class="tc">
          <span>用户注册</span>
        </div>
        <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="80px" @submit.prevent>
          <el-form-item label="用户名：" prop="userName" class="required label-right-align">
            <el-input v-model="formData.userName" type="text" placeholder="请填写用户名" clearable></el-input>
          </el-form-item>
          <el-form-item label="姓名：" prop="fullName" class="required label-right-align">
            <el-input v-model="formData.fullName" type="text" placeholder="请填写姓名" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password" class="required label-right-align">
            <el-input v-model="formData.password" type="password" placeholder="请填写密码" clearable></el-input>
          </el-form-item>
          <!-- <el-form-item label="公司名称：" prop="userName" class="required label-right-align">
              <el-input v-model="formData.companyName" type="text" clearable></el-input>
            </el-form-item> -->
          <el-form-item label="渠道：" prop="channel" class="label-right-align">
            <el-input v-model="formData.channel" type="text" placeholder="请填写渠道" clearable></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email" class="required label-right-align">
            <el-input v-model="formData.email" type="text" placeholder="请填写邮箱" clearable></el-input>
          </el-form-item>
          <el-form-item label="手机号：" prop="mobile" class="required label-right-align">
            <el-input v-model="formData.mobile" type="text" placeholder="请填写手机号" clearable></el-input>
          </el-form-item>
          <el-form-item label="微信号：" prop="wechat" class="required label-right-align">
            <el-input v-model="formData.wechat" type="text" placeholder="请填写微信号" clearable></el-input>
          </el-form-item>
          <el-form-item>

            <el-button type="primary" @click="submitForm()">注册</el-button>
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
import { useRouter } from 'vue-router'
import { ref, toRefs, reactive, getCurrentInstance, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ElMessage } from 'element-plus'
import { accountLogin, accountRegister, account, accountDelete, accountUpdate, getAgentList } from '@/http/api/account.ts'
import { setToken } from '@/utils/auth.ts'
const formLogin = reactive({
  userNameOrEmail: ref(),
  password: ref()
})
const router = useRouter()
const userName = ref('')
const pwd = ref('')

// tab 切换
const activeName = ref('second')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const agentList = ref([])
const agentId = ref()
// 注册
const formData = reactive({
  userName: '',
  fullName: '',
  password: '',
  companyName: '',
  channel:'',
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
  agentId: [
    {
      required: true,
      message: '代理不可为空'
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
const getAgentListHandle = async () => {
  let res = await getAgentList()
  agentList.value = res.data
  console.log(res)
}
const selectAgent = (id) => {
  let agent = agentList.value.find((item) => {
    return item.agent_id == id
  })
  formData.agent = agent.agent_name
}
const userLogin = () => {
  accountLogin(formLogin)
    .then((res: any) => {
      console.log('Login', res)
      if (res.code == 200) {
        setToken(res.data.accessToken)
        getAccount(res.data.uid)
        ElMessage.success('登录成功')
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
        router.push('/login')
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
      router.push('/')
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
onMounted(() => {
  getAgentListHandle()
})
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
  margin: 0 auto;
  width: 60%;
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
  /* background: url(@/assets/img/contact.jpg) center no-repeat;
  background-size: cover; */
}
</style>
