// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      { imgsource: 'top1.jpg', desc: '' },
      { imgsource: 'top2.jpg', desc: '' },
      { imgsource: 'top3.jpg', desc: '' }
    ],
    showList:[],
    text: "",
    colorArr: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  itemchange: function (e) {
    var index = e.detail.current;
    this.setData({
      text: this.data.images[index].desc
    })
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
    this.setData({showList:getApp().arrayShopList});
    var length = this.data.showList.length;
    var getColor = this.data.colorArr;
    for(var i = 0;i<length;i++){
      var temp = this.rgb();
      getColor.push(temp);
    }
    this.setData({ colorArr: getColor });
  },
 rgb(){
    		var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var rgba = '('+r+','+g+','+b+','+'0.2)';
        return rgba;
  },
    
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({ colorArr: [] });
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