// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = wx.cloud.database()

cloud.init()

// 云函数入口函数
exports.main = (event, context) => {
  const wxContext = cloud.getWXContext()
  let data
  return db.collection('article')
  .get()
  .then(res => {
    return res.data
  })
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}