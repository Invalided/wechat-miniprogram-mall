// pages/resetPwd/resetPWd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    userFlag:[]
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
  reset:function(e){
    var oldPwd = e.detail.value.oldPwd;
    console.log("oldPwd = "+oldPwd);
    if(this.data.userFlag.userPwd!=oldPwd){
      console.log("userFlag"+this.data.userFlag.userPwd)
      wx:wx.showToast({
        title: '旧密码不一致',
        icon: 'none',
        // duration: ,
      })
    }else{
      var newPwd = e.detail.value.userPwd;
      var userInfo = this.data.userInfo;
      console.log("new = "+newPwd);
      for(var temp in userInfo){
        if(this.data.userFlag.userName == userInfo[temp].userName){
          userInfo[temp].userPwd = newPwd;
          wx.setStorage({
            key: 'userInfo',
            data: userInfo,
          })
          console.log("userPwd = "+userInfo[temp].userPwd);
          break;
        } 
      }

      for (var temps in userInfo) {
        
            console.log("temps = "+temps,userInfo[temps].userPwd);

      }
      // })
      wx.redirectTo({
        url: '/pages/login/login',
      });
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log("app Userdata"+getApp().userData.userName+"pwd = "+getApp().userData.userPwd);
      this.setData({userFlag:getApp().userData})
      var that = this;
      wx.getStorage({
        key: 'userInfo',
        success: function(res) {
          that.setData({userInfo:res.data});
          console.log("pwd的值 = " + res.data);
        },
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