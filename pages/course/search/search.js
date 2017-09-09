import { courseService } from '../../../utils/service';
import { teacherService } from '../../../utils/service';

Page({
  data: {
    value: "",
    type: 'course',
    dataList: [],
    page: 1,
    lastPage: 1,
    lock: false
  },
  onLoad(options) {
    this.setData({
      value: options.value,
      type: options.type || 'course'
    });
    this.getResult(options.value);
  },
  search(event) {
    this.setData({ page: 1, value: event.detail.value});
    this.getResult(event.detail.value);
  },
  getResult(value, page) {
    if (this.data.type === 'course') {
      courseService.getSearch(value, page)
        .then((res) => {
          this.setData({
            dataList: res.data.data,
            lastPage: res.data.last_page
          })
        });
    }else{
      teacherService.getSearch(value, page)
        .then((res) => {
          this.setData({
            dataList: res.data.data,
            lastPage: res.data.last_page
          })
        });
    }
  },
  loadMore(){
    if (this.data.lock) return;// 避免多次触发
    var pageCount = this.data.page + 1;
    if(pageCount>this.data.lastPage) {
      wx.showToast({
        title: '没有更多数据啦',
      });
      return;
    }
    this.setData({ lock: true });
    if (this.data.type === 'course') {
      courseService.getSearch(this.data.value, pageCount)
        .then((res) => {
          this.setData({
            dataList: this.data.dataList.concat(res.data.data),
            page: pageCount,
            lock: false
          });
        });
    }else{
      teacherService.getSearch(this.data.value, pageCount)
        .then((res) => {
          this.setData({
            dataList: this.data.dataList.concat(res.data.data),
            page: pageCount,
            lock: false
          });
        });
    }
  }
})