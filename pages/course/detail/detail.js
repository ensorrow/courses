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
          comments: res.data.data.map((item) => {
            item.liked = false;
            return item;
          })
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
          title: '评论成功，审核后才显示哦~',
          icon: 'success'
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
      path: "pages/course/detail/detail?id="+this.data.id,
      success: function(){
        wx.showToast({
          title: '转发成功',
        });
      }
    };
  },
  like(e) {
    var index = e.currentTarget.dataset.index;
    var comments = this.data.comments;
    if(comments[index].liked) {
      wx.showToast({
        title: '点过赞了哦~',
      });
    }else {
      var id = e.currentTarget.dataset.id;
      req.post('/comment/'+id+'/like')
        .then(() => {
          comments[index].likes_count++;
          comments[index].liked = true;
          this.setData({
            comments: comments
          });
        });
    }
  }
})