<template>
  <el-divider content-position="left">
    <h2>出具发票</h2>
  </el-divider>
  <div ref="targetElement">
    <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="140px" size="small" @submit.prevent>
      <el-row>
        <el-col :span="24" class="grid-cell">
          <el-form-item label="订单号：" prop="businessIncome" class="required label-right-align">
            {{ order_no }}
          </el-form-item>
        </el-col>
        <el-col :span="24" class="grid-cell">
          <el-form-item label="客户单位名字：" prop="businessIncome" class="required label-right-align">
            {{ formData.agentName }}
          </el-form-item>
        </el-col>
        <el-col :span="24" class="grid-cell">
          <el-form-item label="服务公司名字：" prop="total1" class="required label-right-align">
            {{ companyName }}
          </el-form-item>
        </el-col>
        <el-col :span="24" class="grid-cell">
          <el-form-item label="服务内容：" prop="total2" class="required label-right-align">
            {{ formData.content }}
          </el-form-item>
        </el-col>
        <el-col :span="24" class="grid-cell">
          <el-form-item label="邮箱：" prop="email" class="label-right-align">
            <el-input v-model="formData.email" placeholder="默认发送到注册时的邮箱" type="text" style="width: 200px" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" class="grid-cell">
          <el-form-item label="合计：" prop="isChild" class="label-right-align">
            <span class="price" style="font-size: 30px">${{ formData.price }}</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <div>
    <el-button @click="generateImage">预览</el-button>
    <el-button @click="down">下载</el-button>
  </div>
  <el-dialog v-model="dialogVisible" title="预览">
    <el-image :src="image" height="100%" width="100%"></el-image>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance, ref,inject } from 'vue'
import html2canvas from 'html2canvas'
export default defineComponent({
  components: {},
  props: {
    invoice: {
      type: Object
    },
    order_no: {
      type: String
    },
    companyName: {
      type: String
    }
  },
  emits: ['update'],
  setup(props, context) {
    const image = ref()
    const typeValue = inject('typeValue')
    const state = reactive({
      formData: {} as any,
      rules: {
        email: [
          {
            pattern: /^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
            trigger: ['blur', 'change'],
            message: ''
          }
        ]
      }
    })
    state.formData = props.invoice
    const saveInvoice = () => {
      context.emit('update', state.formData)
    }
    //
    const instance = getCurrentInstance()
    const submitForm = () => {
      instance.proxy.$refs['vForm'].validate((valid) => {
        if (!valid) return
        //TODO: 提交表单
      })
    }
    const resetForm = () => {
      instance.proxy.$refs['vForm'].resetFields()
    }
    const generateImage = async () => {
      const element = instance.proxy.$refs['targetElement']
      const canvas = await html2canvas(element)
      const tempImage = canvas.toDataURL('image/png')
      console.log(tempImage)
      image.value = tempImage
      dialogVisible.value = true
      // 现在您可以使用生成的图像数据进行其他操作，比如展示在页面上或者发送到服务器
    }
    const down = async () => {
      const element = instance.proxy.$refs['targetElement']
      const canvas = await html2canvas(element)
      const tempImage = canvas.toDataURL('image/png')
      // 创建一个虚拟的链接
      const a = document.createElement('a')
      a.href = tempImage
      a.download = 'generated_image.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      // 现在您可以使用生成的图像数据进行其他操作，比如展示在页面上或者发送到服务器
    }
    const dialogVisible = ref(false)
    return {
      ...toRefs(state),
      submitForm,
      resetForm,
      saveInvoice,
      generateImage,
      down,
      dialogVisible,
      image
    }
  }
})
</script>

<style lang="scss" scoped>
.desc {
  margin-top: 30px;
}
</style>
