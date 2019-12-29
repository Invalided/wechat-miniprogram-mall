// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    flag: 0,
    str: ''
  },
  doreg: function (e) {
    var $value = e.detail.value;
    var userName = $value.userName;
    var userPwd = $value.userPwd;
    var userCon = $value.conPwd;
    var newUser = { userName: userName, userPwd: userPwd };
    var flag = this.data.flag;
    if (userName == '' || userPwd == '' || userCon == '') {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
      });
      return;
    }

    var temp = this.data.userInfo;
    temp.push(newUser);
    wx.setStorage({
      key: 'userInfo',
      data: temp,
    });
    wx.redirectTo({
      url: '/pages/login/login',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  usercheck: function (e) {
    var input = e.detail.value;
    var temp = this.data.userInfo;
    for (var i = 0; i < temp.length; i++) {
      var userName = temp[i].userName;
      if (input == userName) {
        console.log(userName + " : " + input);
        wx.showToast({
          title: '用户名已被注册',
          icon: 'none',
          duration: 2000
        });
        this.setData({ flag: 1 });
        return;
      }
    }
    this.setData({ flag: 0 });
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
        that.setData({ userInfo: res.data });
      },
    });
    that.setData({ str: '' });
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