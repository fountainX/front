<template>
  <Header></Header>

  <!-- Slider Area -->
  <section class="slider index2" style="overflow-y: hidden;height: 440px;">
    <div class="hero-slider">
      <!-- Start Single Slider -->
      <div class="single-slider image">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="text">
                <h1><span>LK</span> 高效、专业的跨境财税服务专家轻松自助下单，专业财税指导</h1>
                <p>只需 10 分钟即可轻松开展业务，并获得成功所需的所有指导</p>
                <div class="button">
                  <a href="#/order?type=TAX" class="btn">开始您的税务申报</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Single Slider -->
      <!-- Start Single Slider -->
      <div class="single-slider image">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="text">
                <h1>您可以信赖的<span>会计</span></h1>
                <p>从免费咨询开始吧！</p>
                <div class="button">
                  <a href="#/order?type=ANNUAL_REVIEW" class="btn">开始您的年审申报</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Start End Slider -->
    </div>
  </section>
  <!--/ End Slider Area -->

  <!-- Start Feautes -->
  <section class="Feautes index2 section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-12" v-for="(item, index) in typeList.slice(0, 4)" @click="openBusiness(item.code)">
          <!-- Start Single features -->
          <div class="single-features wow fadeIn" :class="index == 3 ? 'last' : ''" data-wow-delay="0.4s" data-wow-duration="1s">
            <div class="signle-icon">
              <i class="icofont icofont-prescription"></i>
            </div>
            <h3>{{ item.name }}</h3>
          </div>
          <!-- End Single features -->
        </div>

      </div>
    </div>
  </section>
  <!--/ End Feautes -->

  <!-- Start Fun-facts -->
  <div id="fun-facts" class="fun-facts section overlay" data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Fun -->
          <div class="single-fun wow fadeIn" data-wow-delay="1s" data-wow-duration="0.5s">
            <i class="icofont icofont-home"></i>
            <div class="content">
              <span class="counter">3468</span>
              <p>Hospital Rooms</p>
            </div>
          </div>
          <!-- End Single Fun -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Fun -->
          <div class="single-fun wow fadeIn" data-wow-delay="0.8s" data-wow-duration="0.5s">
            <i class="icofont icofont-user-alt-3"></i>
            <div class="content">
              <span class="counter">557</span>
              <p>Specialist</p>
            </div>
          </div>
          <!-- End Single Fun -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Fun -->
          <div class="single-fun wow fadeIn" data-wow-delay="0.6s" data-wow-duration="0.5s">
            <i class="icofont-simple-smile"></i>
            <div class="content">
              <span class="counter">4379</span>
              <p>Happy Patients</p>
            </div>
          </div>
          <!-- End Single Fun -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Fun -->
          <div class="single-fun wow fadeIn" data-wow-delay="0.4s" data-wow-duration="0.5s">
            <i class="icofont icofont-table"></i>
            <div class="content">
              <span class="counter">32</span>
              <p>Years of Experience</p>
            </div>
          </div>
          <!-- End Single Fun -->
        </div>
      </div>
    </div>
  </div>
  <!--/ End Fun-facts -->

  <!-- Start Why choose -->
  <section class="why-choose section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <!-- Start Choose Left -->
          <div class="choose-left">
            <h3>服务社区</h3>
            <p>在过去的10年里，我们的家族账户服务一直为社区服务。我们的团队已经发展壮大，包括经验丰富的注册会计师和专门的支持，以提供个人和专业的金融服务。</p>
            <div class="row">

              <div class="col-lg-12">
                <ul class="list">
                  <li>
                    <h5>合规</h5>
                  </li>
                  <li><i class="fa fa-check"></i>税种：个人、商业和公司</li>
                  <li><i class="fa fa-check"></i>知识渊博的地方销售税、增值税</li>
                  <li><i class="fa fa-check"></i>法律要求的公司文件</li>
                </ul>
              </div>

            </div>
          </div>
          <!-- End Choose Left -->
        </div>
        <div class="col-lg-6 col-12">
          <!-- Start Choose Rights -->
          <div class="choose-right">
            <div class="video-image">
              <!-- Video Animation -->
              <div class="promo-video">
                <div class="waves-block">
                  <div class="waves wave-1"></div>
                  <div class="waves wave-2"></div>
                  <div class="waves wave-3"></div>
                </div>
              </div>
              <!--/ End Video Animation -->
              <a href="https://www.youku.com/watch?v=RFVXy6CRVR4" class="video video-popup mfp-iframe"><i class="fa fa-play"></i></a>
            </div>
          </div>
          <!-- End Choose Rights -->
        </div>
      </div>
    </div>
  </section>
  <!--/ End Why choose -->

  <!-- Start Departments -->
  <section class="departments">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="department-tab">
            <!-- Nav Tab  -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#t-tab1" role="tab"><span class="first">管理</span></a></li>
              <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#t-tab2" role="tab"><span class="first">咨询</span></a></li>
            </ul>
            <!--/ End Nav Tab -->
            <div class="tab-content" id="myTabContent">
              <!-- Tab 1 -->
              <div class="tab-pane fade show active" id="t-tab1" role="tabpanel">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="department-left">
                      <!-- <h3>干货满满！美国销售税全解析</h3> -->
                      <!-- <p>在美国，销售税基本上是州税，由州政府和其管辖下的地方政府县、市和区联合征收，联邦政府不收销售税。 </p> -->
                      <ul class="list">
                        <li><i class="fa fa-check"></i>簿记：管理日常交易</li>
                        <li><i class="fa fa-check"></i>工资：工资和税收管理</li>
                        <li><i class="fa fa-check"></i>规划： 支持增长的报告和建议</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="department-right">
                      <img src="/src/assets/img/fun-bg.jpg" alt="#">
                    </div>
                  </div>
                </div>
              </div>
              <!--/ End Tab 1 -->
              <!-- Tab 2 -->
              <div class="tab-pane fade" id="t-tab2" role="tabpanel">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="department-left">
                      <!-- <h3>销售税小知识</h3> -->
                      <!-- <p class="p1">“销售税=关税吗？”</p> -->
                      <!-- <p>销售税是—种州和地方税，在货物/服务的销售环节征收,一般由卖家向买家收取并向州和地方税局缴纳(通过电商平台销售的,由电商平台向买家收取后统一向各州和地方税局缴纳)。 </p> -->
                      <ul class="list">
                        <li><i class="fa fa-check"></i>报告：帮助董事做出明智的决策</li>
                        <li><i class="fa fa-check"></i>资本募集： 关于寻求股权以帮助发展业务的建议</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="department-right">
                      <img src="/src/assets/img/fun-bg.jpg" alt="#">
                    </div>
                  </div>
                </div>
              </div>
              <!--/ End Tab 2 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Departments -->

  <!-- Start Blog Area -->
  <section class="blog section" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>最新动态</h2>
            <p>年检代办营业执照提供个体户注册内资代办营业执照等服务</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Single Blog -->
          <div class="single-news wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
            <div class="news-head">
              <img src="/src/assets/img/video-bg.jpg" alt="#">
            </div>
            <div class="news-body">
              <div class="news-content">
                <div class="date">2024-01-01</div>
                <h2><a href="#">东莞还房贷的成本又降了</a></h2>
                <p class="text">东莞阶段性取消首套房贷利率下限，多家银行已下调至3.8%，业内称“市场稳定后可能会恢复原利率”</p>
              </div>
            </div>
          </div>
          <!-- End Single Blog -->
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Single Blog -->
          <div class="single-news wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
            <div class="news-head">
              <img src="/src/assets/img/video-bg.jpg" alt="#">
            </div>
            <div class="news-body">
              <div class="news-content">
                <div class="date">2024-01-01</div>
                <h2><a href="#">东莞还房贷的成本又降了</a></h2>
                <p class="text">东莞阶段性取消首套房贷利率下限，多家银行已下调至3.8%，业内称“市场稳定后可能会恢复原利率”</p>
              </div>
            </div>
          </div>
          <!-- End Single Blog -->
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Single Blog -->
          <div class="single-news wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
            <div class="news-head">
              <img src="/src/assets/img/video-bg.jpg" alt="#">
            </div>
            <div class="news-body">
              <div class="news-content">
                <div class="date">2024-01-01</div>
                <h2><a href="#">东莞还房贷的成本又降了</a></h2>
                <p class="text">东莞阶段性取消首套房贷利率下限，多家银行已下调至3.8%，业内称“市场稳定后可能会恢复原利率”</p>
              </div>
            </div>
          </div>
          <!-- End Single Blog -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Blog Area -->

  <!-- Start clients -->
  <div class="clients overlay">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <div class="owl-carousel clients-slider">
            <div class="single-clients">
              <img src="/src/assets/img/logo.png" alt="#">
            </div>
            <div class="single-clients">
              <img src="/src/assets/img/logo.png" alt="#">
            </div>
            <div class="single-clients">
              <img src="/src/assets/img/logo.png" alt="#">
            </div>
            <div class="single-clients">
              <img src="/src/assets/img/logo.png" alt="#">
            </div>
            <div class="single-clients">
              <img src="/src/assets/img/logo.png" alt="#">
            </div>
            <div class="single-clients">
              <img src="/src/assets/img/logo.png" alt="#">
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/Ens clients -->


  <!-- <div class="container box">
    <div class="order-type">
      <div v-for="(item, index) in typeList.slice(0, 4)" @click="openBusiness(item.code)">{{ item.name }}</div>
    </div>
  </div> -->
  <Footer></Footer>
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import { useStore } from '../store/store'
import { useRouter } from 'vue-router'
import { orderType } from '@/http/api/order.ts'
import { ruleList, agentList, invoiceList } from '@/http/api/pub.ts'



export default defineComponent({
  name: 'new page',
  components: {
    Header,
    Footer
  },
  setup() {

    const router = useRouter()
    const data = reactive({
      banner: ref(false),
      router: useRouter(),
      store: useStore(),
      msg: ref(),
      typeList: ref([]),
      init: () => {
        data.msg = '功能开发中,敬请期待'
      },
      getRuleList: () => {
        // TAX   ANNUAL_REVIEW  ACCOUNTING    REGISTER_COMPANY  SALE_TAX
        ruleList({ page: 1, count: 20, businessType: 'TAX' }).then((res: any) => {
          console.log('rule', res)
        }).catch((e) => {
          console.log(e)
        })
      },
      getAgentList: () => {
        agentList({ page: 1, count: 20 }).then((res: any) => {
          console.log('rule', res)
        }).catch((e) => {
          console.log(e)
        })
      },
      getInvoiceList: () => {
        invoiceList({ page: 1, count: 20, agent: '', company: '' }).then((res: any) => {
          console.log('invoice', res)
        }).catch((e) => {
          console.log(e)
        })
      },
      getOrderType: () => {
        orderType().then((res: any) => {
          console.log('orderType', res)
          data.typeList = res.data

          init()
        }).catch((e) => {
          console.log(e)
        })
      },
      openBusiness: (code) => {
        router.push({ path: '/order', query: { type: code } })
      }
    })

    const refData = toRefs(data)
    const init = () => {
      $(document).on('ready', function () {
        jQuery(window).on('scroll', function () {
          if ($(this).scrollTop() > 200) {
            $('#header .header-inner').addClass("sticky");
          } else {
            $('#header .header-inner').removeClass("sticky");
          }
        });

        /*====================================
          Sticky Header JS
        ======================================*/
        jQuery(window).on('scroll', function () {
          if ($(this).scrollTop() > 100) {
            $('.header').addClass("sticky");
          } else {
            $('.header').removeClass("sticky");
          }
        });

        /*====================================
          Search JS
        ======================================*/
        $('.search a').on("click", function () {
          $('.search-top').toggleClass('active');
        });

        /*====================================
          Mobile Menu
        ======================================*/
        $('.menu').slicknav({
          prependTo: ".mobile-nav",
          duration: 300,
          closeOnClick: true,
        });


        /*===============================
          Hero Slider JS
        =================================*/
        $(".hero-slider").owlCarousel({
          loop: true,
          autoplay: true,
          smartSpeed: 500,
          autoplayTimeout: 3500,
          singleItem: true,
          autoplayHoverPause: true,
          items: 1,
          nav: true,
          navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
          dots: false,
        });

        /*===============================
          Testimonial Slider JS
        =================================*/
        $('.testimonial-slider').owlCarousel({
          items: 3,
          autoplay: true,
          autoplayTimeout: 4500,
          smartSpeed: 300,
          autoplayHoverPause: true,
          loop: true,
          merge: true,
          nav: false,
          dots: true,
          responsive: {
            1: {
              items: 1,
            },
            300: {
              items: 1,
            },
            480: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1170: {
              items: 3,
            },
          }
        });

        /*===============================
          Portfolio Slider JS
        =================================*/
        $('.portfolio-slider').owlCarousel({
          autoplay: true,
          autoplayTimeout: 4000,
          margin: 15,
          smartSpeed: 300,
          autoplayHoverPause: true,
          loop: true,
          nav: true,
          dots: false,
          responsive: {
            300: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 2,
            },
            1170: {
              items: 4,
            },
          }
        });

        /*=====================================
          Counter Up JS
        ======================================*/
        $('.counter').counterUp({
          delay: 20,
          time: 2000
        });

        /*===============================
          Clients Slider JS
        =================================*/
        $('.clients-slider').owlCarousel({
          items: 5,
          autoplay: true,
          autoplayTimeout: 3500,
          margin: 15,
          smartSpeed: 400,
          autoplayHoverPause: true,
          loop: true,
          nav: false,
          dots: false,
          responsive: {
            300: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            1170: {
              items: 5,
            },
          }
        });

        /*====================================
          Single Portfolio Slider JS
        ======================================*/
        $('.pf-details-slider').owlCarousel({
          items: 1,
          autoplay: false,
          autoplayTimeout: 5000,
          smartSpeed: 400,
          autoplayHoverPause: true,
          loop: true,
          merge: true,
          nav: true,
          dots: false,
          navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
        });


        /*===================
          Accordion JS
        =====================*/
        $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
        $('.accordion a').on('click', function (j) {
          var dropDown = $(this).closest('li').find('p');
          $(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
          }
          dropDown.stop(false, true).slideToggle(300);
          j.preventDefault();
        });

        /*====================================
          Nice Select JS
        ======================================*/
        $('select').niceSelect();

        /*=====================================
          Date Picker JS
        ======================================*/
        $(function () {
          $("#datepicker").datepicker();
        });

        /*===============================
          Checkbox JS
        =================================*/
        $('input[type="checkbox"]').change(function () {
          if ($(this).is(':checked')) {
            $(this).parent("label").addClass("checked");
          } else {
            $(this).parent("label").removeClass("checked");
          }
        });

        /*===============================
          Right Bar JS
        =================================*/
        $('.right-bar .bar').on("click", function () {
          $('.sidebar-menu').addClass('active');
        });
        $('.sidebar-menu .cross').on("click", function () {
          $('.sidebar-menu').removeClass('active');
        });

        /*=====================
          Video Popup JS
        =======================*/
        $('.video-popup').magnificPopup({
          type: 'video',
        });

        /*================
          Wow JS
        ==================*/
        var window_width = $(window).width();
        if (window_width > 767) {
          new WOW().init();
        }

        /*===================
          Scroll Up JS
        =====================*/
        $.scrollUp({
          scrollText: '<span><i class="fa fa-angle-up"></i></span>',
          easingType: 'easeInOutExpo',
          scrollSpeed: 900,
          animation: 'fade'
        });

        /*=======================
          Animate Scroll JS
        =========================*/
        $('.scroll').on("click", function (e) {
          var anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
          }, 1000);
          e.preventDefault();
        });

        /*=======================
          Stellar JS
        =========================*/
        $.stellar({
          horizontalOffset: 0,
          verticalOffset: 0
        });
      })
    }
    onMounted(() => {
      // data.getRuleList()
      // data.getAgentList()
      // data.getInvoiceList()
      data.getOrderType()

      // 解决Banner重叠
      setTimeout(function () {
        data.banner = true
      }, 1000)
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

.order-type {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.order-type div {
  cursor: pointer;
  text-align: center;
  width: 200px;
  height: 100px;
  line-height: 100px;
  background: #f0f2f5;
  margin: 15px;
  border-radius: 5px;
}

.order-type div:hover {
  background: #eff6ff;
}

.image {
  background: url('/src/assets/img/slider.png');
  background-size: cover;
}
</style>
