import { teacherService } from '../../../utils/service';

Page({
  data: {
    teachers: null,
    lock: false,
    page: 1
  },
  onLoad() {
    teacherService.getList()
      .then(
        (res) => this.setData({
          teachers: res.data.data,
          lastPage: res.data.last_page
        })
      )
  },
  search(event) {
    wx.navigateTo({
      url: '../../course/search/search?type=teacher&value=' + event.detail.value
    });
  },
  loadMore() {
    if (this.data.lock) return;// 避免多次触发
    var pageCount = this.data.page + 1;
    if (pageCount > this.data.lastPage) {
      wx.showToast({
        title: '没有更多数据啦',
      });
      return;
    }
    this.setData({ lock: true });
    teacherService.getList(pageCount)
      .then((res) => {
        this.setData({
          teachers: this.data.teachers.concat(res.data.data),
          page: pageCount,
          lock: false
        });
      });
  }
})
