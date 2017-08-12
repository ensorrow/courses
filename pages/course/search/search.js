// pages/course/search/search.js
// common search
import req from '../../../utils/request';

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
  getResult(value) {
    req.get('/post/s?q='+value+'&page=1')
      .then((res) => {
        if(this.data.type === 'course') {
          this.setData({
            dataList: res.data.data.filter(
              (item) => item.type === 'course'
            ),
            lastPage: res.data.last_page
          });
        } else {
          this.setData({
            dataList: res.data.data.filter(
              (item) => item.type === 'teacher'
            ),
            lastPage: res.data.last_page
          });
        }
      });
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
    req.get('/post/s?q=' + this.data.value + '&page=' + pageCount)
      .then((res) => {
        if (this.data.type === 'course') {
          this.setData({
            dataList: this.data.dataList.concat(res.data.data.filter(
              (item) => item.type === 'course'
            )),
            page: pageCount,
            lock: false
          });
        } else {
          this.setData({
            dataList: this.data.dataList.concat(res.data.data.filter(
              (item) => item.type === 'teacher'
            )),
            page: pageCount,
            lock: false
          });
        }
      });
  }
})