<template>
  <Header></Header>
  <section class="blog grid section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 news-single">
          <div class="single-main">
            <div class="news-head">
              <img src="/src/assets/img/call-back-bg.jpg" alt="#">
            </div>
            <h1 class="news-title">2023年报税季来啦！美国报税终极指南，看这一篇就够啦！</h1>

            <!-- News Text -->
            <div class="news-text">
              <p>在美国生活，报税可能是最令人头疼的问题之一。比如初来乍到的留学生，往往最开始并不太清楚自己要不要报税，也不知道该怎么报税。其实报税流程理解起来并不复杂，尤其对于收入情况比较简单的小伙伴来说，完全可以选择一些免费途径，省下一笔会计师费用。下面虎虎为大家总结了在美国报税的基本知识，希望能帮助大家对报税有一个大致的了解。</p>
              一、报税是什么？
              <p>每年我们都要向相关机构提交税务报告，报告包含我们上一个报税年一整年的所得税或其他税款的信息。报税通常分为两部分，联邦个人所得税（Federal Taxes）需提交给美国国税局 IRS ，而州税（State Taxes）需要提交给居住地州/地区政府。若已缴纳税大于计算报税金额，则可以获得退税。</p>
              <p>通常联邦税报税截止日期为4月15日，每年可能会因假日等原因有调整。州税报税截止日期通常与联邦税一致，部分州可能另行规定日期。2023年的报税季为1月23日 - 4月18日，申请延期报税截止日期则为10月16日。</p>
              二、哪些人需要报税
              <blockquote class="overlay">
                <p>如果你在美国有收入，不管是何种身份，只要一年的总收入超过了美国税务局设定的门槛，那么都应该报税；没有超过规定额度则不强制报税，但也建议进行。报税不仅可能获得一定的退税，便于避免罚款、计算福利，也是对信用的保护。</p>
              </blockquote>
              三、哪些收入需要纳税
              <p>需要注意的是，在全球所赚得的收入皆须申报。所得税需要考虑的收入大致可以概括为以下几类：薪水工资、佣金、酬金、附加福利、网上卖货收入、兼职平台收入、小费、股票购买选择权、利息、股息、合伙分红、资本利得分红、退休金收入、失业补偿金收入、博弈获利、国外已得收入。</p>
              <p>从2023年开始，任何通过兼职平台赚钱或是通过Venmo/Paypal收到超过$600美元的人都将收到一份1099-K表格并上报。</p>
            </div>

          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="main-sidebar">
            <!-- Single Widget -->
            <div class="single-widget search">
              <div class="form">
                <input type="email" placeholder="搜索...">
                <a class="button" href="#"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <!--/ End Single Widget -->
            <!-- Single Widget -->
            <div class="single-widget category">
              <h3 class="title">分类</h3>
              <ul class="categor-list">
                <li><a href="#">报税</a></li>
                <li><a href="#">年审</a></li>
                <li><a href="#">做账</a></li>
                <li><a href="#">公司注册</a></li>
              </ul>
            </div>
            <!--/ End Single Widget -->
            <!-- Single Widget -->
            <div class="single-widget recent-post">
              <h3 class="title">最新动态</h3>
              <!-- Single Post -->
              <div class="single-post">
                <div class="image">
                  <img src="/src/assets/img/video-bg.jpg" alt="#">
                </div>
                <div class="content">
                  <h5><a href="#">哪些人需要报税</a></h5>
                  <ul class="comment">
                    <li><i class="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2020</li>
                    <li><i class="fa fa-commenting-o" aria-hidden="true"></i>35</li>
                  </ul>
                </div>
              </div>
              <!-- End Single Post -->
              <!-- Single Post -->
              <div class="single-post">
                <div class="image">
                  <img src="/src/assets/img/video-bg.jpg" alt="#">
                </div>
                <div class="content">
                  <h5><a href="#">哪些人需要报税</a></h5>
                  <ul class="comment">
                    <li><i class="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2019</li>
                    <li><i class="fa fa-commenting-o" aria-hidden="true"></i>59</li>
                  </ul>
                </div>
              </div>
              <!-- End Single Post -->
              <!-- Single Post -->
              <div class="single-post">
                <div class="image">
                  <img src="/src/assets/img/video-bg.jpg" alt="#">
                </div>
                <div class="content">
                  <h5><a href="#">总收入超过了美国税务局设定的门槛</a></h5>
                  <ul class="comment">
                    <li><i class="fa fa-calendar" aria-hidden="true"></i>June 09, 2019</li>
                    <li><i class="fa fa-commenting-o" aria-hidden="true"></i>44</li>
                  </ul>
                </div>
              </div>
              <!-- End Single Post -->
            </div>
            <!--/ End Single Widget -->

          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<script lang="ts" setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>
<style scoped></style>
