//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    url:"https://vdept.bdstatic.com/53384e696b5052627a327a6856617153/694d6a5946346a73/739e996433e9098c813a5c8707caa7cdb9c50710016e55826bc28ae7ffadf95c01973dd7c83330987e37dc0a7b778d93.mp4?auth_key=1590497266-0-0-a0d24128f23a97c97993926e2c9fffd8"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
