<template>
  <Header></Header>
  <div class="container box">
    <br />
    <h2 :style="isDark(store.switchDark)">{{ $t('lang.ComingSoon') }}</h2>
    <br />
    <el-skeleton :rows="5" />
  </div>
  <Footer></Footer>
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import { useStore } from '../store/store'

export default defineComponent({
  name: 'new page',
  components: {
    Header,
    Footer
  },
  setup() {
    const data = reactive({
      store: useStore(),
      msg: ref(),
      init: () => {
        data.msg = '功能开发中,敬请期待'
      },
      isDark: (dark) => {
        return dark ? 'color:#2ef1a7' : 'color:#715cff'
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
