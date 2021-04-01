// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "任务等级",
        isActive: true
      },
      {
        id: 1,
        value: "走失时间",
        isActive: false
      },
      {
        id: 2,
        value: "走失距离",
        isActive: false
      }
    ],
    scrollTop: 0
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

  },

    // 标题点击事件 从子组件传递
    handleTabsItemChange(e){
      // 获取被点击的标题索引
      const {index} = e.detail;
      // 修改源数组
      let {tabs} = this.data;
      tabs.forEach((value,i) => {
        i===index?value.isActive=true:value.isActive=false;
      });
      console.log(1);
      // 赋值到data中
      this.setData({
        tabs,
        scrollTop: 0
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