import req from '../../../utils/request';

Page({
  data: {
    teachers: null
  },
  onLoad() {
    req.get('/post/teachers?page=1')
      .then(
        (res) => this.setData({
          teachers: res.data.data
        })
      )
  },
  //事件处理函数
  search(event) {
    wx.navigateTo({
      url: '../../course/search/search?type=teacher&value=' + event.detail.value
    });
  }
})
