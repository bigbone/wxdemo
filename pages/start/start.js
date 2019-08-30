var app = getApp();
Page({
  data: {
    remind: '加载中',
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: '测试数据'
    })
  },
  onShow: function () {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.navigateTo({
        url: "/pages/auto/index"
      })
    } else {
      that.setData({
        userInfo: userInfo
      });
      wx.reLaunch({
        url: "/pages/index/index"
      });
    }
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 2000);
  },
  goToIndex : function(){
    wx.getLocation({
      'success': function (res) {
         wx.navigateTo({
          url: "/pages/index/index"
        });
      }
    });
  }
});