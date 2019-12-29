// pages/shopbuy/shopbuy.js
Page({

  /**
   * ({ sid: tempid, spath: shimg, sname: sname, price: shprice, amount: 1, subtotal: shprice})
   * 页面的初始数据
   */
  data: {
    buyList: [
      { sid: 's01', spath: 'milk.png', sname: '脱脂纯牛奶', price: 10, amount: 1, subtotal: 10},
      { sid: 's02', spath: 'cleaner.png', sname: '洗洁精', price: 7.8, amount: 1, subtotal: 7.8},
      ],
    arrayCount:[],
    arrayColor:[],
    oldValue:0,
    tempValue:0,
    sumPrice:0
  },
  focusInput:function(e){
      this.setData({oldValue:e.detail.value});
      console.log("focus的值:"+e.detail.value);
  },
  getInput:function(e){
      this.setData({tempValue:e.detail.value})
      console.log("input"+e.detail.value);
  },
  blurInput:function(e){
    var tempValue = this.data.tempValue;
    var array = this.data.buyList;
    var sumPrice = 0;
    var index = e.currentTarget.dataset.value;
    var input = e.detail.value;
    var oldValue = this.data.oldValue;
     console.log("sum的值1" + sumPrice);
    if(tempValue!=""&&tempValue!=0){
      console.log("tempvalue = "+tempValue);
      array[index].amount = e.detail.value;
      array[index].subtotal = parseFloat((array[index].amount * array[index].price).toFixed(1));
      this.setData({ buyList: array });
      
    }else{
      array[index].amount = oldValue;
      this.setData({ buyList: array });
      console.log("null");
    }
    var countMoney = this.data.buyList;
    for(var temp in countMoney){
      sumPrice = parseFloat((Number(sumPrice)+Number(countMoney[temp].subtotal)).toFixed(1));
    }
    this.setData({ sumPrice: sumPrice });
    console.log("input的值: blur " + e.detail.value);
  },
  sub:function(e){
      var array = this.data.buyList;
      var sumPrice = this.data.sumPrice;
      var index = e.currentTarget.dataset.value;
      if(array[index].amount==1){
        wx.showToast({
          title: '不能再减少了',
          icon:'none'
        });
        return;
      }
      array[index].amount = Number(array[index].amount) - 1;
      array[index].subtotal = parseFloat((array[index].amount * array[index].price).toFixed(1));
      sumPrice = parseFloat((Number(sumPrice) - Number(array[index].price)).toFixed(1));
      this.setData({ buyList: array });
      this.setData({ sumPrice: sumPrice });
  },
  add:function(e){
      var array = this.data.buyList;
      var sumPrice = this.data.sumPrice;
      var index = e.currentTarget.dataset.value;
      array[index].amount = Number(array[index].amount) + 1;
      array[index].subtotal = parseFloat((array[index].amount * array[index].price).toFixed(1));
      sumPrice = parseFloat((Number(sumPrice) + Number(array[index].price)).toFixed(1));
      this.setData({buyList:array});
      this.setData({sumPrice: sumPrice});
  },
  isFloat(n){
    return n+".0" != n;
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
    this.setData({ buyList: getApp().arrayTempList });
    var buyList = this.data.buyList;
    var tempPrice = 0;
    for (var temp in buyList) {
      tempPrice = parseFloat((Number(tempPrice) + Number(buyList[temp].subtotal)).toFixed(1));
      console.log(temp + " " + tempPrice);
    }
    console.log(tempPrice);
    var length = this.data.buyList.length;
    var getColor = this.data.arrayColor;
    for (var i = 0; i < length; i++) {
      var temp = getApp().rgb();
      getColor.push(temp);
    }
    this.setData({ arrayColor: getColor });
    this.setData({ sumPrice: tempPrice });
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