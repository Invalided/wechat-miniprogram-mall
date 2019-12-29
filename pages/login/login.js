// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'登录',
    userInfo: [],
    inputStr: ''
  },
  dologin: function (e) {
    var userName = e.detail.value.userName;
    var userPwd = e.detail.value.userPwd;
    var userInfo = this.data.userInfo;
    for (var i = 0; i < userInfo.length; i++) {
      var user = userInfo[i].userName;
      var pwd = userInfo[i].userPwd;
      // console.log(user + ":" + pwd)
      if (user == userName && pwd == userPwd) {
        wx.showToast({
          title: '登录中..',
          icon:'loading'
        })
        wx.switchTab({
          url: '/pages/shopmain/shopmain',
        });
        getApp().userData.userName = user;
        getApp().userData.userPwd = pwd;
        return;
      }
    }
    wx.showToast({
      title: '用户名或密码错误',
      icon: 'none'
    });
    this.setData({ inputStr: '' });
  },
  doreg: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        // console.log(res.data);
        that.setData({ userInfo: res.data });
      },
    });
    this.setData({ inputStr: '' });
    wx.setNavigationBarTitle({
      title:that.data.title
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})