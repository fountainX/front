<template>
  <!-- Header Area -->
  <header class="header style2">
    <!-- Topbar -->
    <div class="topbar">
      <div class="container">
        <div class="row">

          <div class="col-12">
            <!-- Top Contact -->
            <ul class="top-contact">
              <li><i class="fa fa-phone"></i>626-632-2608</li>
              <li><i class="fa fa-envelope"></i><a href="mailto:admin@longviewlk.com">admin@longviewlk.com</a></li>
              <li>
                <el-dropdown style="margin: 5px">
                  <span class="el-dropdown-link">
                    {{ $t('lang.language') }}
                    <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="changeLang('en')">English</el-dropdown-item>
                      <el-dropdown-item @click="changeLang('zh')">中文</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </li>
              <li>
                <router-link :to="'/ucenter?uid=' + userInfo.uid">{{ userInfo.user_name }}</router-link>
                <el-button v-if="!userInfo.uid" @click="login()">{{ $t('lang.login') }}</el-button>
                <el-button v-if="!userInfo.uid" @click="registry()">{{ $t('lang.register') }}</el-button>
                <el-button v-else @click="logout()" style="margin-left:15px" link>退出</el-button>
              </li>
            </ul>
            <!-- End Top Contact -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Topbar -->
    <!-- Middle Header -->
    <div class="middle-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-12">
            <!-- Start Logo -->
            <div class="logo">
              <a href="#/"><img src="/src/assets/img/logo.png" style="height: 47px;"></a>
            </div>
            <!-- End Logo -->
            <!-- Mobile Nav -->
            <div class="mobile-nav"></div>
            <!-- End Mobile Nav -->
          </div>
          <div class="col-lg-9 col-md-9 col-12">
            <div class="widget-main">
              <!-- Single Widget -->
              <div class="single-widget">
                <i class="icofont-ui-call"></i>
                <p>随时致电我们</p>
                <h4>+626-632-2608</h4>
              </div>
              <!--/ End Single Widget -->
              <!-- Single Widget -->
              <div class="single-widget">
                <i class="icofont-clock-time"></i>
                <p>工作时间</p>
                <h4>周一至周五: 9am - 5pm</h4>
              </div>
              <!--/ End Single Widget -->

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Middle Header -->
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-12">
              <!-- Main Menu -->
              <div class="main-menu">
                <nav class="navigation">
                  <ul class="nav menu">
                    <li class="active"><a href="#">首页 <i class="icofont-rounded-down"></i></a>
                      <ul class="dropdown">
                        <li><a href="#/about">关于我们</a></li>
                        <li><a href="#/team">团队介绍</a></li>
                      </ul>
                    </li>
                    <!-- <li><a href="#">Services <i class="icofont-rounded-down"></i></a>
                      <ul class="dropdown">
                        <li><a href="service.html">Service</a></li>
                        <li><a href="service-details.html">Service Details</a></li>
                      </ul>
                    </li> -->
                    <!-- <li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
                      <ul class="dropdown">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="faq.html">Faq</a></li>
                      </ul>
                    </li> -->
                    <!-- <li><a href="#">Blogs <i class="icofont-rounded-down"></i></a>
                      <ul class="dropdown">
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-single.html">Blog Details</a></li>
                      </ul>
                    </li> -->
                    <li><a href="#/faq">FAQ</a></li>
                    <li><a href="#/blog">博客</a></li>
                    <li><a href="#/contact">联系我们</a></li>
                  </ul>
                </nav>
              </div>
              <!--/ End Main Menu -->
              <div class="right-bar">
                <!-- Search Form -->
                <!-- <div class="search-top">
                  <div class="search"><a href="#0"><i class="icofont-search-1"></i></a></div>
                  <form class="search-form">
                    <input type="text" placeholder="search" name="search">
                    <button value="search" type="submit"><i class="icofont-search-1"></i></button>
                  </form>
                </div> -->
                <!--/ End Search Form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>
  <!-- End Header Area -->
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store/store'
import { useI18n } from 'vue-i18n'
import { removeToken } from '@/utils/auth.ts'
import { accountLogout } from '@/http/api/account.ts'
import { ElMessage } from 'element-plus'


export default defineComponent({
  name: 'top',
  components: {},
  setup() {
    const { t, locale } = useI18n()
    const router = useRouter()
    const goHome = () => {
      router.push("/");
    }
    const data = reactive({
      store: useStore(),
      userInfo: ref({ uid: '', user_name: '' }),
      changeLang: (lang: string) => {
        locale.value = lang
        localStorage.setItem('lang', lang)
      },
      init: () => {
        let u = JSON.parse(localStorage.getItem('userInfo') as any)
        if (u !== null) data.userInfo = u
      },
      login: () => {
        router.push('/login')
      },
      registry: () => {
        router.push('/registry')
      },
      logout: () => {
        accountLogout({}).then((res: any) => {
          console.log(res)
          localStorage.removeItem('userInfo')
          removeToken()
          localStorage.clear()
          ElMessage.success('退出成功')
          router.push('/')
          setTimeout(() => {
            location.reload()
          }, 200)
          // location.replace('/')
        })
          .catch((err: any) => {
            console.log(err)
          })

      }
    })

    const refData = toRefs(data)
    onMounted(() => {
      data.init()
    })
    return {
      ...refData,
      goHome
    }
  }
})
</script>
<style scoped>
.box {
  min-height: 600px;
}
</style>
