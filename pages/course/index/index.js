import {courseService} from '../../../utils/service';

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
    courseService.getCategorized()
      .then((res) => this.setData({
        courseList: res.data
      }));
  }
})
