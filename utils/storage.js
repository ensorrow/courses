const storage = function(method='get', key, value){
  return new Promise(function (resolve, reject) {
    if(method==='get') {
      wx.getStorage({
        key: key,
        success: (res) => {
          if (res.errMsg === 'getStorage:ok') {
            resolve(res.data);
          }else{
            reject(res.errMsg);
          }
        },
        fail: reject
      });
    }else {
      if(!value) return console.log('传入key-value!');
      wx.setStorage({
        key: key,
        data: value,
        success: resolve('存入成功！'),
        fail: reject('未知错误')
      });
    }
  });
}

export default{
  get(key) {
    return storage('get', key, undefined);
  },
  set(key, value) {
    return storage('set', key, value);
  }
}