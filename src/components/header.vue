<template>
  <el-row style="margin: 10px 30px">
    <el-col :span="4">
      <h2>Longview LK</h2>
    </el-col>
    <el-col :span="20" style="text-align: right;">
      <router-link :to="'/ucenter?uid=' + userInfo.uid">{{ userInfo.user_name }}</router-link>
      <el-button @click="login()">登录</el-button>
      <el-button @click="logout()">退出</el-button>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from '../store/store'
import { removeToken } from '@/utils/auth.ts'

export default defineComponent({
  name: 'top',
  components: {
  },
  setup() {
    const router = useRouter()
    const data = reactive({
      store: useStore(),
      userInfo: ref({ uid: '', user_name: '' }),
      init: () => {
        data.userInfo = JSON.parse(localStorage.getItem('userInfo'))

        if (data.userInfo == null) {
          data.userInfo = 'null'
        }
      },
      login: () => { router.push('/login') },
      logout: () => {
        localStorage.removeItem('userInfo')
        removeToken()
        router.push('/')
      }
    })

    const refData = toRefs(data)
    onMounted(() => {
      data.init()
    })
    return {
      ...refData
    }
  }
})
</script>
<style scoped>
.box {
  min-height: 600px;
}
</style>

