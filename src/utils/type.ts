export const businessTypeList = [
  {
    id: 10,
    value: 'TAX',
    desc: '报税'
  },
  {
    id: 20,
    value: 'ANNUAL_REVIEW',
    desc: '年审'
  },
  {
    id: 30,
    value: 'ACCOUNTING',
    desc: '做账'
  },
  {
    id: 40,
    value: 'REGISTER_COMPANY',
    desc: '注册公司'
  },
  {
    id: 50,
    value: 'SALE_TAX',
    desc: '销售税'
  },
  {
    id: 90,
    value: 'OTHER',
    desc: '其他'
  },
  {
    id: 51,
    value: 'SALE_TAX_LICENSE_APPLICATION',
    desc: '销售税-许可证申请'
  },
  {
    id: 52,
    value: 'SALE_TAX_REPORT',
    desc: '销售税-申报'
  },
  {
    id: 91,
    value: 'ODI_CHECKIN',
    desc: '其他-ODI报到'
  },
  {
    id: 92,
    value: 'BANK_ACCOUNT_OPENING',
    desc: '其他-银行开户'
  },
  {
    id: 93,
    value: 'L_VISA',
    desc: '其他-L签'
  },
  {
    id: 94,
    value: 'US_EB2_IMMIGRATION',
    desc: '其他-美国EB2移民'
  },
  {
    id: 95,
    value: 'MEXICAN_GREEN_CARD',
    desc: '其他-墨西哥绿卡'
  },
  {
    id: 96,
    value: 'MEXICAN_BUSINESS_VISA',
    desc: '其他-墨西哥商务签证'
  },
  {
    id: 97,
    value: 'US_INSURANCE',
    desc: '其他-美国保险'
  },
  {
    id: 120,
    value: 'OTHER_OTHER',
    desc: '其他-其他'
  }
]

export function getType(id: number) {
  if (!id) {
    return
  }
  let res = businessTypeList.find((item) => {
    return item.id == id
  })
  return res.desc
}
