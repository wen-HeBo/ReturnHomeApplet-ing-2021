// pages/rescue/rescue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inter: '',
    y1:"none",
    i1:"flex",
    y2:"none",
    i2:"flex",
    y3:"none",
    i3:"flex",
    y4:"none",
    i4:"flex",
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
    this.startInter();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.endInter();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.endInter();
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

  },

  startInter:function(){
    var that = this;
    var ic = 0;
    var it = 800;
    that.data.inter=setInterval(
      function(){
        ic++;
        if(ic==1){
          that.setData({
            y1:"flex",
            i1:"none",
          })
        }
        if(ic==2){
          that.setData({
            y2:"flex",
            i2:"none",
          })
        }
        if(ic==3){
          that.setData({
            y3:"flex",
            i3:"none",
          })
        }
        if(ic==4){
          wx.navigateTo({
            url: '/pages/map/map',
          })
          that.setData({
            y4:"flex",
            i4:"none",
          });
        }
      },it-200);
     
  },

  endInter:function(){
    var that = this;
    clearInterval(that.data.inter);
    that.setData({
      y1:"none",
      i1:"flex",
      y2:"none",
      i2:"flex",
      y3:"none",
      i3:"flex",
      y4:"none",
      i4:"flex",
    });
  }
})