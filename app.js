const api = require('utils/http.js');
App({
onLaunch:function(e){
  wx.login({
    success:function(ret){
      if(ret.code){
        let code = ret.code;
        console.log(code,'发送请求获取token每次请求用的token');
        let params = { "code": code };
        api.gettokenbycode(params).then(function(res){
          console.log(res);
          if(res.token){
            wx.setStorage({
              key: 'token',
              data: res.token,
            })
          }
        }).catch(function(e){console.log(e);});
      }
    }
  })
}
});
