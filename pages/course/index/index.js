import req from '../../../utils/request';

Page({
  data: {
    courseList: null
  },
  search(event) {
    wx.navigateTo({
      url: '../search/search?value='+event.detail.value
    });
  },
  onLoad() {
    req.get('/post/courses/categorized')
      .then((res) => this.setData({
        courseList: res.data
      }));
  }
})