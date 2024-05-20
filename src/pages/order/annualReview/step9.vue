<template>
  <el-divider content-position="center">
    <h2>订单总览</h2>
  </el-divider>
  <div class="desc"></div>
  <div>
    <!-- <el-divider content-position="left">确认报价</el-divider> -->
    <div class="desc">
      <el-descriptions :title="'订单号：' + order_no" :column="2">
        <el-descriptions-item :span="2" label="所在州：">{{ order.regionText }}</el-descriptions-item>
        <el-descriptions-item :span="2" label="公司名称：">{{ props.companyName }}</el-descriptions-item>
        <el-descriptions-item :span="2" label="公司类型：">{{ order.companyType == 1 ? 'C' : 'LLC' }}</el-descriptions-item>
        <template v-if="order.companyType == 1">
          <template v-for="item in ruleListDataC" :key="item.field_name">
            <template v-if="item.field_name == 'annual_review'">
              <el-descriptions-item :span="2" label="单独费用：">{{ item.price }}</el-descriptions-item>
            </template>

            <template v-if="item.field_name == 'agent_address'">
              <el-descriptions-item label="注册代理人地址：">{{ order.agent_address ? '是' : '否' }}</el-descriptions-item>
              <el-descriptions-item label="费用：">
                {{ order.agent_address ? item.price : 0 }}
              </el-descriptions-item>
            </template>
          </template>
        </template>

        <template v-if="order.companyType == 2">
          <template v-for="item in ruleListDataLLC" :key="item.field_name">
            <template v-if="item.field_name == 'annual_review'">
              <el-descriptions-item :span="2" label="单独费用：">{{ item.price }}</el-descriptions-item>
            </template>

            <template v-if="item.field_name == 'agent_address'">
              <el-descriptions-item label="注册代理人地址：">{{ order.agent_address ? '是' : '否' }}</el-descriptions-item>
              <el-descriptions-item label="费用：">
                {{ order.agent_address ? item.price : 0 }}
              </el-descriptions-item>
            </template>
          </template>
        </template>
      </el-descriptions>
      <div class="total-price">
        <span>原价：</span>
        <span class="price">{{ order.isDollar ? '$' : '￥' }} {{ order.oldTotalPrice }}</span>
        <span>折扣价：</span>
        <span class="price">{{ order.isDollar ? '$' : '￥' }}{{ order.totalPrice }}</span>
      </div>
    </div>

    <div>
      <el-divider content-position="left">
        <h6>出具发票</h6>
      </el-divider>
      <el-descriptions title="" :column="1">
        <el-descriptions-item label="客户单位名称：">{{ companyName }}</el-descriptions-item>
        <el-descriptions-item label="渠道：">{{ agent !== null ? agent.agent_name : '无' }}</el-descriptions-item>
        <el-descriptions-item label="服务内容：">{{ invoice.content }}</el-descriptions-item>
        <el-descriptions-item label="邮箱：">{{ invoice.email }}</el-descriptions-item>
      </el-descriptions>


      <div class="total-price">
        <span>合计：</span>
        <span class="price">{{ order.isDollar ? '$' : '￥' }}{{ invoice.price }}</span>
        <span>最终价格：</span>
        <span class="price">{{ order.isDollar ? '$' : '￥' }}{{ invoice.finalPrice || order.totalPrice }}</span>
      </div>
    </div>
    <el-divider content-position="left">
      <h6>付款</h6>
    </el-divider>
    <div class="demo-image__preview">
      <FileList :list="pay.voucher" size="100" />
    </div>

    <el-divider content-position="left">
      <h6>材料审核</h6>
    </el-divider>
    <div class="table-container">
      <table class="table-layout">
        <tbody>
          <tr>
            <td class="table-cell" bgcolor="#f1f1f1" style="width: 50px">序号</td>
            <td class="table-cell" bgcolor="#f1f1f1">资料名称</td>
            <td class="table-cell" bgcolor="#f1f1f1" style="width: 80px">状态</td>
            <td class="table-cell" bgcolor="#f1f1f1">备注</td>
          </tr>
          <tr v-for="(item, index) in upload.list">
            <td class="table-cell">{{ index + 1 }}</td>
            <td class="table-cell">
              <FileList :list="[item]" :size="50" />
            </td>
            <td class="table-cell">{{ item.status == 1 ? '通过' : item.status == -1 ? '不通过' : '审核中' }}</td>
            <td class="table-cell">
              <span v-if="item.status == -1">{{ item.reason }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-divider content-position="left">
      <h6>回传签字</h6>
    </el-divider>
    <div class="table-container">
      <!-- <table class="table-layout">
        <tbody>
          <tr>
            <td class="table-cell" style="width: 60px">资料</td>
            <td class="table-cell">
              <Document style="width: 1.3em; color: #999; vertical-align: sub; margin-right: 8px" />
              {{ sign.pdfPath }}
              <a :href="$filePath + sign.pdfPath" download="download">下载</a>
            </td>
          </tr>
        </tbody>
      </table> -->
      <!-- <el-alert :title="mark" type="warning" />
      <br /> -->

      <FileList :list="sign.imageList" :size="50"></FileList>
      <!-- <el-image v-for="(item, index) in sign.imageList" style="width: 100px; margin: 5px" :src="item" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="sign.imageList" :initial-index="index" fit="cover" /> -->
    </div>
    <el-divider content-position="left">
      <h6>签回</h6>
    </el-divider>
    <div>
      <el-image class="sgin_img" v-for="(item, index) in backSign" :src="$filePath + item" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="getAwsList($filePath, backSign)" :initial-index="index" fit="cover" />
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, inject } from 'vue'
import FileList from '@/components/fileList/index.vue'

export default defineComponent({
  components: { FileList },
  props: {
    detail: {
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
    const ruleListDataC = inject('ruleListDataC')
    const ruleListDataLLC = inject('ruleListDataLLC')
    const agent = inject('agent')
    const { order, invoice, pay, upload, sign, backSign, agent_name } = props.detail
    const order_no = props.order_no
    let mark = '注：请在'
    sign.mark.map((item, index) => {
      let page = item.page
      let desc = item.desc
      mark += '第' + page + '页'
      mark += desc + '处'
      if (index < sign.mark.length - 1) {
        mark += '、'
      }
    })

    mark += '签字后扫描复印件或手机拍照上传'
    const getAwsList = (path, list) => {
      return list.map((item) => {
        return path + item
      })
    }
    return {
      order,
      pay,
      invoice,
      upload,
      sign,
      mark,
      backSign,
      order_no,
      ruleListDataC,
      ruleListDataLLC,
      props,
      agent_name,
      agent,
      getAwsList
    }
  }
})
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
      text-align: left;
      font-size: 14px;
      padding: 5px;
    }
  }
}

.el-form-item {
  margin-bottom: 8px;
}

.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}

.desc {
  margin-top: 30px;
}

.sgin_img {
  height: 100px;
  margin: 5px;
}
</style>
