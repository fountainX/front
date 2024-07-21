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
              <li>
                <i class="fa fa-phone"></i>
                626-632-2608
              </li>
              <li>
                <i class="fa fa-envelope"></i>
                <a href="mailto:admin@longviewlk.com">admin@longviewlk.com</a>
              </li>
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
                <router-link :to="'/ucenter?uid=' + userInfo.uid + '&tab=2'">{{ userInfo.user_name }}</router-link>
                <router-link :to="'/ucenter?uid=' + userInfo.uid + '&tab=1'" v-if="userInfo.user_name && userInfo.uid" style="margin-left: 10px">我的订单</router-link>
                <router-link :to="'/message?uid=' + userInfo.uid" v-if="userInfo.user_name && userInfo.uid" style="margin-left: 10px">消息</router-link>
                <el-button v-if="!userInfo.uid" @click="login()">{{ $t('lang.login') }}</el-button>
                <el-button v-if="!userInfo.uid" @click="registry()">{{ $t('lang.register') }}</el-button>
                <el-button v-else @click="logout()" style="margin-left: 15px" link>退出</el-button>
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
              <a href="#/"><img src="/src/assets/img/logo.png" style="height: 47px" /></a>
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
                    <li class="active">
                      <a href="#">
                        首页
                        <i class="icofont-rounded-down"></i>
                      </a>
                      <ul class="dropdown">
                        <li><a href="#/about">关于我们</a></li>
                        <li><a href="#/team">团队介绍</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        业务
                        <i class="icofont-rounded-down"></i>
                      </a>
                      <ul class="dropdown">
                        <li class="dropdown-submenu">
                          <a class="dropdown-item dropdown-toggle" href="#">报税</a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#/order?type=TAX">公司报税</a></li>
                            <li><a class="dropdown-item" href="#/order?type=TAX_PERSONAL">个人报税</a></li>
                          </ul>
                        </li>
                        <li><a href="#/order?type=ANNUAL_REVIEW">年审</a></li>
                        <li><a href="#/order?type=ACCOUNTING">做账</a></li>
                        <li><a href="#/order?type=REGISTER_COMPANY">注册公司</a></li>
                        <li class="dropdown-submenu">
                          <a class="dropdown-item dropdown-toggle" href="#">销售税</a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#/order?type=SALE_TAX_LICENSE_APPLICATION">许可证申请</a></li>
                            <li><a class="dropdown-item" href="#/order?type=SALE_TAX_REPORT">申报</a></li>
                          </ul>
                        </li>
                        <li class="dropdown-submenu">
                          <a class="dropdown-item dropdown-toggle" href="#">其他</a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#/order?type=ODI_CHECKIN">ODI报到</a></li>
                            <li><a class="dropdown-item" href="#/order?type=BANK_ACCOUNT_OPENING">银行开户</a></li>
                            <li><a class="dropdown-item" href="#/order?type=L_VISA">L签</a></li>
                            <li><a class="dropdown-item" href="#/order?type=US_EB2_IMMIGRATION">美国EB2移民</a></li>
                            <li><a class="dropdown-item" href="#/order?type=MEXICAN_GREEN_CARD">墨西哥绿卡</a></li>
                            <li><a class="dropdown-item" href="#/order?type=MEXICAN_BUSINESS_VISA">墨西哥商务签证</a></li>
                            <li><a class="dropdown-item" href="#/order?type=US_INSURANCE">美国保险</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
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
                    <li><a href="/blog/index.html" target="_blank">博客</a></li>
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
      router.push('/')
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
        accountLogout({})
          .then((res: any) => {
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

      $('.dropdown-submenu a.dropdown-toggle').on('mouseover', function (e) {
        console.log(e)
        $(this).next('.dropdown-menu').toggle()
        e.stopPropagation()
        e.preventDefault()
      })

      $('.dropdown-menu').on('mouseout', function (e) {
        $(this).next('.dropdown-menu').hide()
        e.stopPropagation()
        e.preventDefault()
      })
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

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -1px;
  margin-left: -1px;
  border-radius: 0 6px 6px;
}

.dropdown-toggle::after {
  transform: rotate(270deg);
}
</style>
