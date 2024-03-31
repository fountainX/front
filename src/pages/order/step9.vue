<template>
  <el-divider content-position="left">
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

        <template v-if="order.companyType == 2">
          <template v-for="item in ruleListDataLLC">
            <el-descriptions-item v-if="item.field_name == 'is_c_rule'" label="是否按照C公司方式纳税：" :span="2">{{ order.is_c_rule ? '是' : '否' }}</el-descriptions-item>

            <template v-if="order.is_c_rule">
              <el-descriptions-item v-if="item.field_name == 'first_year'" label="是否第一年纳税：">{{ order.first_year ? '是' : '否' }}</el-descriptions-item>
              <el-descriptions-item v-if="item.field_name == 'first_year'" label="费用：">
                <span v-if="order.first_year">
                  {{ item.price }}
                </span>
                <span v-else>0</span>
              </el-descriptions-item>
            </template>

            <template v-else>
              <el-descriptions-item :span="2" v-if="item.field_name == 'has_us_tax_no'" label="是否有美国税号：">{{ order.has_us_tax_no ? '是' : '否' }}</el-descriptions-item>

              <template v-if="!order.has_us_tax_no">
                <el-descriptions-item v-if="item.field_name == 'apply_individual' && order.taxType == 'apply_individual'" label="申请税号类型：">个人股东</el-descriptions-item>
                <el-descriptions-item v-if="item.field_name == 'apply_individual' && order.taxType == 'apply_individual'" label="费用：">{{ item.price }}</el-descriptions-item>
                <el-descriptions-item v-if="item.field_name == 'apply_company' && order.taxType == 'apply_company'" label="申请税号类型：">公司股东</el-descriptions-item>
                <el-descriptions-item v-if="item.field_name == 'apply_company' && order.taxType == 'apply_company'" label="费用：">{{ item.price }}美元</el-descriptions-item>
              </template>
            </template>
          </template>
        </template>

        <el-descriptions-item label="主营业务收入：">{{ order.companyMainIncome.rule_content }}万美元</el-descriptions-item>
        <el-descriptions-item label="费用：">{{ order.companyMainIncome.price || 0 }}美元</el-descriptions-item>

        <el-descriptions-item :span="2" label="主营业务类型：">{{ order.main_business_type }}</el-descriptions-item>
        <el-descriptions-item :span="2" label="公司资产总额：">{{ order.total_asset }}</el-descriptions-item>

        <template v-for="item in ruleListDataC">
          <el-descriptions-item v-if="item.field_name == 'amount_fixed_asset'" label="固定资产金额：">{{ order.amount_fixed_asset || 0 }}万美元</el-descriptions-item>
          <el-descriptions-item v-if="item.field_name == 'amount_fixed_asset'" label="费用：">{{ order.amount_fixed_asset > 0 ? item.price : 0 }}美元</el-descriptions-item>

          <el-descriptions-item v-if="item.field_name == 'exchange_fund_com_number'" label="资金往来公司数：">{{ order.exchange_fund_com_number }}</el-descriptions-item>
          <el-descriptions-item v-if="item.field_name == 'exchange_fund_com_number'" label="费用：">{{ (order.exchange_fund_com_number || 0) * item.price }}美元</el-descriptions-item>

          <el-descriptions-item v-if="item.field_name == 'subsidiary_us'" label="在美子公司数：">{{ order.subsidiary_us }}</el-descriptions-item>
          <el-descriptions-item v-if="item.field_name == 'subsidiary_us'" label="费用：">{{ (order.subsidiary_us || 0) * item.price || 0 }}美元</el-descriptions-item>

          <el-descriptions-item v-if="item.field_name == 'subsidiary_non_us_number'" label="非美子公司：">{{ order.subsidiary_non_us_number }}</el-descriptions-item>
          <el-descriptions-item v-if="item.field_name == 'subsidiary_non_us_number'" label="费用：">{{ (order.subsidiary_non_us_number || 0) * item.price || 0 }}美元</el-descriptions-item>
        </template>
      </el-descriptions>
      <div class="total-price">
        <span>原价：</span>
        <span class="price">${{ order.oldTotalPrice }}</span>
        <span>折扣价：</span>
        <span class="price">${{ order.totalPrice }}</span>
      </div>
    </div>

    <el-divider content-position="left">
      <h6>出具发票</h6>
    </el-divider>
    <div>
      <el-descriptions :column="1">
        <el-descriptions-item label="客户单位名称：">{{ invoice.agentName }}</el-descriptions-item>
        <el-descriptions-item label="服务公司名称：">{{ props.companyName }}</el-descriptions-item>
        <el-descriptions-item label="服务内容：">{{ invoice.content }}</el-descriptions-item>
        <el-descriptions-item label="邮箱：">{{ invoice.email }}</el-descriptions-item>
      </el-descriptions>
      <div>
        <span class="total-price">
          <span>合计：</span>
          <span class="price">${{ invoice.price }}</span>
        </span>
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
              <div class="flex-center">
                <FileList :list="[item]" :size="50" />
              </div>
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
      <br />
      <!-- <el-alert :title="mark" type="warning" />
      <br /> -->

      <FileList :list="sign.imageList" :size="50"></FileList>
      <!-- <el-image v-for="(item, index) in sign.imageList" style="width: 100px; margin: 5px" :src="item" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="sign.imageList" :initial-index="index" fit="cover" /> -->
    </div>
    <el-divider content-position="left">
      <h6>签回</h6>
    </el-divider>
    <div>
      <br />
      <el-image v-for="(item, index) in backSign" style="width: 100px" :src="item" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="backSign" :initial-index="index" fit="cover" />
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
    const { order, invoice, pay, upload, sign, backSign } = props.detail
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
      props
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
</style>
