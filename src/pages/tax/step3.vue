<template>
  <el-divider content-position="left">
    <h2>出具发票</h2>
  </el-divider>
  <div class="desc">出具发票</div>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="right" label-width="140px" size="small" @submit.prevent>
    <el-row>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="客户单位名字：" prop="businessIncome" class="required label-right-align">
          {{ formData.agentName }}
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="服务公司名字：" prop="total1" class="required label-right-align">
          {{ formData.companyName }}
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="服务内容：" prop="total2" class="required label-right-align">
          {{ formData.content }}
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="邮箱：" prop="email" class="label-right-align">
          <el-input v-model="formData.email" placeholder="默认发送到注册时的邮箱" type="text" style="width:200px" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="合计：" prop="isChild" class="label-right-align">
          <span class="price" style="font-size: 30px;">${{ formData.price }}</span>
        </el-form-item>
      </el-col>
    </el-row>

  </el-form>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, getCurrentInstance } from 'vue'
export default defineComponent({
  components: {},
  props: {
    invoice: {
      type: Object
    }
  },
  emits: ['update'],
  setup(props, context) {
    const state = reactive({
      formData: {} as any,
      rules: {
        email: [{
          pattern: /^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
          trigger: ['blur', 'change'],
          message: ''
        }],
      },
    })
    state.formData = props.invoice
    const saveInvoice = () => {
      context.emit('update', state.formData)
    }
    // 
    const instance = getCurrentInstance()
    const submitForm = () => {
      instance.proxy.$refs['vForm'].validate(valid => {
        if (!valid) return
        //TODO: 提交表单
      })
    }
    const resetForm = () => {
      instance.proxy.$refs['vForm'].resetFields()
    }
    return {
      ...toRefs(state),
      submitForm,
      resetForm,
      saveInvoice
    }
  }
})

</script>

<style lang="scss" scoped>
  .desc{
    margin-top: 30px;
  }
</style>