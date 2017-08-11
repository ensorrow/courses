import req from '../../../utils/request';

Page({
  data: {
    courseList: null,
    page: 1,
    categoryName: undefined,
    lock: false,
    lastPage: 1
  },
  onLoad(option) {
    this.setData({
      categoryName: option.name
    });
    req.get('/category/'+option.name+'/courses?page=1')
      .then((res) => this.setData({
        courseList: res.data.data,
        lastPage: res.data.last_page
      }));
  },
  loadMore(e){
    if(this.data.lock) return;
    var pageCount = this.data.page + 1;    
    if (pageCount > this.data.lastPage) {
      wx.showToast({
        title: '没有更多数据啦',
      });
      return;
    }
    this.setData({ lock: true });
    wx.showLoading({
      title: '加载中',
    });
    req.get('/category/' + this.data.categoryName + '/courses?page='+pageCount)
      .then((res) => this.setData({
        courseList: this.data.courseList.concat(res.data.data),
        lock: false,
        page: pageCount
      }))
      .then(() => wx.hideLoading());
  }
})