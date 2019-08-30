// pages/index/index.js
const api = require('../../utils/http.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userlistData : [['6月14日', '23:00', '俄罗斯-沙特', '熊超', '李红亮'],
    ['6月15日', '20:00', '埃及-乌拉圭', '熊超', '张新'],
    ['6月15日', '23:00', '摩洛哥-伊朗', '孔庆涛', '熊国庆'],
    ['6月16日', '02:00', '葡萄牙-西班牙', '孔庆涛', '熊国庆'],
    ['6月16日', '18:00', '法国-澳大利亚', '柯立志', '李红亮'],
    ['6月16日', '21:00', '阿根廷-冰岛', '柯立志', '李红亮'],
    ['6月17日', '00:00', '秘鲁-丹麦', '孔庆涛', '谢小庆'],
    ['6月17日', '03:00', '克罗地亚-尼日利亚', '孔庆涛', '谢小庆'],
    ['6月17日', '20:00', '哥斯达黎加-塞尔维亚', '柯立志', '熊国庆'],
    ['6月17日', '23:00', '德国-墨西哥', '柯立志', '张新'],
    ['6月18日', '02:00', '巴西-瑞士', '柯立志', '张新'],
    ['6月18日', '20:00', '瑞典-韩国', '孔庆涛', '熊国庆'],
    ['6月18日', '23:00', '比利时-巴拿马', '熊超', '辛玉京'],
    ['6月19日', '02:00', '突尼斯-英格兰', '熊超', '辛玉京'],
    ['6月19日', '20:00', '哥伦比亚-日本', '熊超', '谢小庆'],
    ['6月19日', '23:00', '波兰-塞内加尔', '熊超', '李红亮'],
    ['6月20日', '02:00', '俄罗斯-埃及', '熊超', '李红亮'],
    ['6月20日', '20:00', '葡萄牙-摩洛哥', '柯立志', '张新'],
    ['6月20日', '23:00', '乌拉圭-沙特', '孔庆涛', '谢小庆'],
    ['6月21日', '02:00', '伊朗-西班牙', '孔庆涛', '谢小庆'],
    ['6月21日', '20:00', '丹麦-澳大利亚', '熊超', '辛玉京'],
    ['6月21日', '23:00', '法国-秘鲁', '柯立志', '张新'],
    ['6月22日', '02:00', '阿根廷-克罗地亚', '柯立志', '张新'],
    ['6月22日', '20:00', '巴西-哥斯达黎加', '孔庆涛', '李红亮'],
    ['6月22日', '23:00', '尼日利亚-冰岛', '熊超', '辛玉京'],
    ['6月23日', '02:00', '塞尔维亚-瑞士', '熊超', '辛玉京'],
    ['6月23日', '20:00', '比利时-突尼斯', '柯立志', '熊国庆'],
    ['6月23日', '23:00', '韩国-墨西哥', '孔庆涛', '张新'],
    ['6月24日', '02:00', '德国-瑞典', '孔庆涛', '张新'],
    ['6月24日', '20:00', '英格兰-巴拿马', '熊超', '谢小庆'],
    ['6月24日', '23:00', '日本-塞内加尔', '柯立志', '熊国庆'],
    ['6月25日', '02:00', '波兰-哥伦比亚', '柯立志', '熊国庆'],
    ['6月25日', '22:00', '乌拉圭-俄罗斯', '孔庆涛', '李红亮'],
    ['6月25日', '22:00', '沙特-埃及', '孔庆涛', '李红亮'],
    ['6月26日', '02:00', '伊朗-葡萄牙', '熊超', '谢小庆'],
    ['6月26日', '02:00', '西班牙-摩洛哥', '熊超', '谢小庆'],
    ['6月26日', '22:00', '丹麦-法国', '柯立志', '辛玉京'],
    ['6月26日', '22:00', '澳大利亚-秘鲁', '柯立志', '辛玉京'],
    ['6月27日', '02:00', '尼日利亚-阿根廷', '孔庆涛', '张新'],
    ['6月27日', '02:00', '冰岛-克罗地亚', '孔庆涛', '张新'],
    ['6月27日', '22:00', '墨西哥-瑞典', '熊超', '李红亮'],
    ['6月27日', '22:00', '韩国-德国', '熊超', '李红亮'],
    ['6月28日', '02:00', '塞尔维亚-巴西', '柯立志', '辛玉京'],
    ['6月28日', '02:00', '瑞士-哥斯达黎加', '柯立志', '辛玉京'],
    ['6月28日', '22:00', '日本-波兰', '孔庆涛', '熊国庆'],
    ['6月28日', '22:00', '塞内加尔-哥伦比亚', '孔庆涛', '熊国庆'],
    ['6月29日', '02:00', '巴拿马-突尼斯', '熊超', '李红亮'],
    ['6月29日', '02:00', '英格兰比利时', '熊超', '李红亮'],
    ['6月30日', '22:00', '1/8决赛C1-D2', '柯立志', '谢小庆'],
    ['7月1日', '02:00', '1/8决赛A1-B2', '孔庆涛', '熊国庆'],
    ['7月1日', '22:00', '1/8决赛B1-A2', '熊超', '张新'],
    ['7月2日', '02:00', '1/8决赛D1-C2', '柯立志', '谢小庆'],
    ['7月2日', '22:00', '1/8决赛E1-F2', '孔庆涛', '辛玉京'],
    ['7月3日', '02:00', '1/8决赛G1-H2', '熊超', '张新'],
    ['7月3日', '22:00', '1/8决赛F1-E2', '柯立志', '李红亮'],
    ['7月4日', '02:00', '1/8决赛H1-G2', '孔庆涛', '辛玉京'],
    ['7月6日', '22:00', '1/4决赛49胜者-50胜者', '熊超', '熊国庆'],
    ['7月7日', '02:00', '1/4决赛53胜者-54胜者', '柯立志', '李红亮'],
    ['7月7日', '22:00', '1/4决赛51胜者-52胜者', '孔庆涛', '谢小庆'],
    ['7月8日', '02:00', '1/4决赛55胜者-56胜者', '熊超', '熊国庆'],
    ['7月11日', '02:00', '半决赛57胜者-58胜者', '孔庆涛', '谢小庆'],
    ['7月12日', '02:00', '半决赛59胜者-60胜者', '柯立志', '张新'],
    ['7月14日', '22:00', '三四名决赛61负者-62负者', '孔庆涛', '辛玉京'],
    ['7月15日', '23:00', '决赛61胜者-62胜者', '熊超', '李红亮']],
    'showload': false
  },
  onMyEvent:function(e){
    console.log(e.detail.text, e.target.dataset.text);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this作用域保存改变。javascript 的老问题。
    var _this = this;
    this.setDatashow();
    api.get('/apptoken').then(function(ret){
      console.log(ret, ret.accesstoken);
      var arr = ['6月28日', ret.accesstoken.substring(0,9), '瑞士-哥斯达黎加', '柯立志', '辛玉京'];
      _this.data.userlistData.push(arr);
      //console.log(_this.data);
      setTimeout(function(){_this.setDatashow();},3000);
    }).catch(function(e){
      console.log(e);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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
  
  },
  onPageScroll : function(obj){
    //console.log(obj.scrollTop);
    let _this = this;
    var query = wx.createSelectorQuery();
    var height =wx.getSystemInfoSync().windowHeight;
    
    /*wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight, height);
      }});*/

    query.select('#stroke-info').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      //console.log(res[0].top, height);
      if(res[1] && res[0]){
        //console.log(res);
        console.log(res[1].scrollTop);
        if (res[1].scrollTop > 2805) {
          _this.data.showload =true;
            _this.setData({ 'showload': true });
        } else  {
          //_this.data.showload = false;
          //_this.setData({ 'showload': false });
        }
        //this.setDatashow();
        //console.log(res);
      }
      
    });
  },
  onPullDownRefresh:function(){ 
    /*wx.showLoading({
      'title':'加载中',
      'mask':true
    })*/
    wx.stopPullDownRefresh();
  },
  'setDatashow': function(){
    let userlist = this.data.userlistData;
    let timelist = [];
    userlist.forEach(function (item, value) {
      if (timelist.indexOf(item[0]) == -1) {
        timelist.push(item[0]);
      }
    });
    let date = new Date();
    if (this.data.time) {
      var test = this.data.time.split(/[日|月]+/g);
      date = new Date('2018/' + test[0] + '/' + test[1] +' 17:28:5');
    }
    //date = new Date('2018/6/30 17:28:5');
    let strtime = (date.getMonth() + 1) + '月' + date.getDate() + '日';
    let othertime = +date + 1000 * 60 * 60 * 24;
    othertime = new Date(othertime);
    othertime = (othertime.getMonth() + 1) + '月' + othertime.getDate() + '日';
    let arr = userlist.filter(function (item) {
      if (item['0'] == strtime) {
        return true;
      } else if (item['0'] == othertime && item[1] == '02:00') {
        return true;
      }
    });
    let userInfo = wx.getStorageSync('userInfo');
    let has = arr.filter(function (item) {
      return item['3'] == userInfo.nickName || item['4'] == userInfo.nickName;
    });
    this.setData({ 'userlist': arr, 'strtime': strtime, 'curname': userInfo.nickName, 'has': has.length > 0, array: timelist, index: timelist.indexOf(strtime), 'allist': this.data.userlistData, 'showload': this.data.showload });
  },
  bindPickerChange : function(e){
    this.setData({
      index: e.detail.value
    });
    var index = e.detail.value;
    this.data.time = this.data.array[index];
    this.setDatashow();
  },
  'parentclick' :function(){
    console.log('parentclick run');
  },
  'chlidclick':function(e){
    console.log(e.detail);
    console.log('chlid click');
  }
})