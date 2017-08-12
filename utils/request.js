const host = 'https://course.eeyes.net/api';

const request = function(url, options){
  wx.showLoading({
    title: '加载中',
  });
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
        wx.hideLoading();
        resolve(res.data)
      },
      fail: function(res) {
        wx.hideLoading();        
        reject(res.data);
      }
    })
  });
}

export default {
  get(url, data={}) {
    return request(url, { method: 'GET',data });
  },
  post(url, data = {}) {
    return request(url, { method: 'POST', data });
  }
}