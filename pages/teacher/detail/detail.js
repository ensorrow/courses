// pages/teacher/detail/detail.js
import req from '../../../utils/request';

Page({
  data: {
    title: "",
    department: "",
    email: "",
    intro: "",
    courses: [],
    comments: []
  },
  onLoad(options) {
    this.setData({
      id: options.id
    });
    req.get('/post/' + options.id)
      .then((res) => {
        this.setData(Object.assign({}, res.data));
      });
    req.get('/post/' + options.id + '/comment?page=1')
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
    req.post('/post/' + this.data.id + '/comment', { content: event.detail.value })
      .then(() => {
        wx.showToast({
          title: '评论成功，审核后才显示哦~',
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
  onShareAppMessage() {
    return {
      title: this.data.title,
      success: function () {
        wx.showToast({
          title: '转发成功',
        });
      }
    };
  }
})