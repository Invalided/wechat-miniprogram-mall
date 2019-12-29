//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
  ,
  userData:{
    userName:null,
    userPwd:null,
    arrayUserlist:[]
  },
  arrayShopList:[
    { sid: 's01', spath: 'milk.png', sname: '脱脂纯牛奶',sprice:10},
    { sid: 's02', spath: 'bottle.png', sname: '宝宝保温杯', sprice: 99 },
    { sid: 's03', spath: 'cleaner.png', sname: '立白洗洁精', sprice: 7.8 },
    { sid: 's05', spath: 'coffee.png', sname: '原味咖啡', sprice: 28 },
    { sid: 's06', spath: 'oil.png', sname: '食用油', sprice: 55},
    { sid: 's07', spath: 'shampoo.png', sname: '洗发水', sprice: 35},
    
  ],
  arrayTempList:[],
  rgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgba = '(' + r + ',' + g + ',' + b + ',' + '0.2)';
    return rgba;
  },
  
})