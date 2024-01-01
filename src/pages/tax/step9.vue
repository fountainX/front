<template>
  <el-divider content-position="left">
    <h2>完结</h2>
  </el-divider>
  <div class="desc">各业务节点详情内容</div>
  <div>
    <el-divider content-position="left">确认报价</el-divider>
    <div>
      <el-form label-position="right" label-width="140px" size="small" @submit.prevent>
        <el-row>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="选择区域：" prop="selectArea" class="label-right-align">
              加州
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="公司类型：" prop="incType" class="label-right-align">
              LLC
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <div class="static-content-item">
              <div>报价：<span class="price">$260</span></div>
            </div>
          </el-col>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="公司主营业务类型：" prop="businessType" class="label-right-align">
              <el-radio-group>
                <div class="table-container">
                  <table class="table-layout">
                    <tbody>
                      <tr>

                        <td class="table-cell" bgcolor="#f1f1f1">收入(美金)</td>
                        <td class="table-cell" bgcolor="#f1f1f1">报价</td>
                        <td class="table-cell" bgcolor="#f1f1f1">备注</td>
                        <td class="table-cell" bgcolor="#f1f1f1">区域</td>
                      </tr>
                      <tr>
                        <td class="table-cell">25万</td>
                        <td class="table-cell"><span class="price">$260</span></td>
                        <td class="table-cell"></td>
                        <td class="table-cell"></td>
                      </tr>
                      <tr>
                        <td class="table-cell" colspan="4" style="text-align: left; padding-left: 10px;">
                          在美有2家子公司
                          报价：<span class="price">${{ 2 * 200 }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="table-cell" colspan="4" style="text-align: left;padding-left: 10px;">
                          子公司为非美国公司有1家
                          报价：<span class="price">${{ 1 * 1000 }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="主营业务收入：" prop="businessIncome" class="required label-right-align">
              $20万美元
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="公司资产总额：" prop="total1" class="required label-right-align">
              $20万美元
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="固定资产金额：" prop="total2" class="required label-right-align">
              $20万美元
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="是否有资金往来：" prop="isFlow" class="label-right-align">
              是
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="是否有子公司：" prop="isChild" class="label-right-align">
              是
            </el-form-item>
          </el-col>
          <el-col :span="12" class="grid-cell">
            <el-form-item label="合计：" prop="isChild" class="label-right-align">
              <span class="price" style="font-size: 30px;">$2660</span>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>
    <el-divider content-position="left">出具发票</el-divider>
    <div>
      <el-form label-position="right" label-width="140px" size="small">
        <el-row>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="客户单位名字：" prop="businessIncome" class="required label-right-align">
              渠道/代理公司
            </el-form-item>
          </el-col>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="服务公司名字：" prop="total1" class="required label-right-align">
              当前订单是为哪个公司做的业务
            </el-form-item>
          </el-col>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="服务内容：" prop="total2" class="required label-right-align">
              报税+2021年度 组合
            </el-form-item>
          </el-col>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="邮箱：" prop="email" class="label-right-align">
              bruce_cao@qq.com
            </el-form-item>
          </el-col>
          <el-col :span="24" class="grid-cell">
            <el-form-item label="合计：" prop="isChild" class="label-right-align">
              <span class="price" style="font-size: 30px;">$2660</span>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>
    <el-divider content-position="left">付款</el-divider>
    <div class="demo-image__preview">
      <el-image
        v-for="(item, index) in srcList"
        style="width: 100px; height: 100px"
        :src="item"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
        :initial-index="index"
        fit="cover" />
    </div>
    <el-divider content-position="left">材料审核</el-divider>
    <div class="table-container">
      <table class="table-layout">
        <tbody>
          <tr>
            <td class="table-cell" bgcolor="#f1f1f1" style="width: 60px;">序号</td>
            <td class="table-cell" bgcolor="#f1f1f1">资料名称</td>
            <td class="table-cell" bgcolor="#f1f1f1" style="width: 80px;">状态</td>
            <td class="table-cell" bgcolor="#f1f1f1">备注</td>
          </tr>
          <tr>
            <td class="table-cell">1</td>
            <td class="table-cell">报税资料-2023年度公司流水.doc</td>
            <td class="table-cell">通过</td>
            <td class="table-cell">资料未过问题原因</td>
          </tr>
          <tr>
            <td class="table-cell">2</td>
            <td class="table-cell">报税资料-2023年度公司流水.doc</td>
            <td class="table-cell">审核中</td>
            <td class="table-cell">资料未过问题原因</td>
          </tr>
          <tr>
            <td class="table-cell">3</td>
            <td class="table-cell">报税资料-2023年度公司流水.doc</td>
            <td class="table-cell">审核中</td>
            <td class="table-cell">资料未过问题原因</td>
          </tr>
          <tr>
            <td class="table-cell">4</td>
            <td class="table-cell">报税资料-2023年度公司流水.doc</td>
            <td class="table-cell">审核中</td>
            <td class="table-cell">资料未过问题原因</td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-divider content-position="left">回传签字</el-divider>
    <div class="table-container">
      <table class="table-layout">
        <tbody>
          <tr>
            <td class="table-cell">
              <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />回传签字资料.pdf
            </td>
          </tr>
          <tr>
            <td class="table-cell">
              <Document style="width: 1.3em; color:#999; vertical-align: sub; margin-right: 8px" />回传签字资料.pdf
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <el-alert title="注：请在第4页、第5页右下角签字后扫描复印件或手机拍照上传" type="info" />
      <br />
      <el-image
        v-for="(item, index) in signList"
        style="width: 100px;"
        :src="item"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="signList"
        :initial-index="index"
        fit="cover" />

    </div>
    <el-divider content-position="left">签回</el-divider>
    <div>
      <br />
      <el-image
        v-for="(item, index) in signBack"
        style="width: 100px;"
        :src="item"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="signBack"
        :initial-index="index"
        fit="cover" />
    </div>
    <div>

    </div>
  </div>
</template>
<script lang="ts" setup>
const srcList = [
  'https://img2.baidu.com/it/u=1570247328,458070796&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=410',
  'https://img2.baidu.com/it/u=4236181049,2598982592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083',
]
const signList = [
  'https://img1.baidu.com/it/u=3246450563,2285289250&fm=253&fmt=auto&app=138&f=JPEG?w=540&h=360',
]

const signBack = [
  'https://p1-tt.byteimg.com/origin/dfic-imagehandler/ef9cd84b-ca39-44f8-94c3-dc63f9b8269f?from=pc',
]
</script>
<style lang="scss" scoped>
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
      padding-left: 10px;
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
</style>