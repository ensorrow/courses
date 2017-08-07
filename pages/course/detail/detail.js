// pages/course/detail/detail.js
import req from '../../../utils/request';

Page({
  data: {
    title: "",
    category: "",
    credit: "",
    content: "",
    resources: [],
    teachers: [],
    comments: []
  },
  onLoad(options) {
    this.setData({
      id: options.id
    });
    req.get('/post/'+options.id)
      .then((res) => {
        this.setData(Object.assign({}, res.data));
      });
    req.get('/post/'+options.id+'/comment?page=1')
      .then((res) => {
        this.setData({
          comments: res.data.data
        });
      });
  },
  showInput() {
    this.setData({
      isShow: true
    });
  },
  hideInput() {
    this.setData({
      isShow: false
    });
  },
  stopPop() {
    return null;
  },
  sendComment(event) {
    const comment = {
      comment: event.detail.value,
      like: 0
    };
    req.post('/post/' + this.data.id + '/comment', { content: event.detail.value})
      .then(() => {
        wx.showToast({
          title: '评论成功',
          icon: 'success'
        });
      })
      .then(() => {
        this.setData({
          comments: this.data.comments.concat(comment)
        });
        this.hideInput();        
      });
  },
  copy(event) {
    const link = event.target.dataset.link;
    wx.setClipboardData({
      data: link,
      success: function (res) {
        wx.showToast({
          title: '复制成功！',
          icon: 'success'
        })
      },
      fail: function (res) {
        title: '复制失败！'
      }
    });
  },
  onShareAppMessage(){
    return {
      title: this.data.title,
      success: function(){
        wx.showToast({
          title: '转发成功',
        });
      }
    };
  }
})