// pages/shoplist/shoplist.js
Page({

  /**({ sid: tempid, spath: shimg, sname: sname, price: shprice, amount: 1, subtotal: shprice})
   * 页面的初始数据
   */
  data: {
    shopList:[],
    arrayColor:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  buyShop:function(e){
    // console.log("价格:"+e.currentTarget.dataset.price);
    var arrayTempList = getApp().arrayTempList;
    var shopPrice = e.currentTarget.dataset.sprice; //获取页面自定义的数据
    // var temp = getApp().arrayTempList;
    var array = shopPrice.split(",");
    var tempid = array[0];
    var shprice = array[1];
    var shimg = array[2];
    var sname = array[3];
    for(var temp in arrayTempList){
      var $value = arrayTempList[temp];
      if($value.sid==tempid){
        $value.amount = $value.amount+1;
        $value.subtotal = shprice * $value.amount;
        // getApp().arrayTempList = arrayTempList;
        wx.showToast({
          title: '添加成功',
          icon: 'none'
        });
        return;
      }
    }

    arrayTempList.push({ sid: tempid, spath: shimg, sname: sname, price: shprice,amount: 1,subtotal: shprice});
    getApp().arrayTempList = arrayTempList;
    
    wx.showToast({
      title: '添加成功',
      icon:'none'
    })
    console.log("show");
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
    that.setData({
      shopList:getApp().arrayShopList
    });
    var length = this.data.shopList.length;
    var getColor = this.data.arrayColor;
    for(var i = 0;i<length;i++){
      var temp = getApp().rgb();
      getColor.push(temp);
    }
    this.setData({arrayColor:getColor});
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({arrayColor:[]});
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