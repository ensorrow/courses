const host = 'https://test.eeyes.net/api';

const request = function(url, options){
  if(options.showLoading) {
    wx.showLoading({
      title: '加载中',
    });
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      url: host+url,
      data: options.data,
      header: {
        'Content-Type': 'application/json'
      },
      method: options.method || 'GET',
      dataType: 'json',
      success: function(res) {
        if(options.showLoading){
          wx.hideLoading();
        }
        if(res.data.code == 200)
          resolve(res.data);
        else{
          wx.showToast({
            title: '意外错误',
            image: '/static/imgs/error.png'
          });
          // reject(res.data);
        }
      },
      fail: function(res) {
        if (options.showLoading) {
          wx.hideLoading();
        }
        wx.showToast({
          title: '意外错误',
          image: '/static/imgs/error.png'
        });
        // reject(res.data);
      }
    })
  });
}

export default {
  get(url, data={}, showLoading=true) {
    return request(url, { method: 'GET',showLoading,data });
  },
  post(url, data = {}, showLoading=true) {
    return request(url, { method: 'POST',showLoading,data });
  }
}