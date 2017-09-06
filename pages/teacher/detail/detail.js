import { teacherService } from '../../../utils/service';

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
    teacherService.getDetail(options.id)
      .then((res) => {
        this.setData(Object.assign({}, res.data));
      });
    teacherService.getComments(options.id)
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
    teacherService.postComment(this.data.id, event.detail.value)
      .then(() => {
        wx.showToast({
          title: '评论成功，审核后才显示哦~',
          icon: 'success'
        });
      })
      .then(() => {
        this.hideInput();
      });
  },
  onShareAppMessage() {
    return {
      title: this.data.title,
      path: "pages/teacher/detail/detail?id=" + this.data.id,
      success: function () {
        wx.showToast({
          title: '转发成功',
        });
      }
    };
  },
  like(e) {
    var index = e.currentTarget.dataset.index;
    var comments = this.data.comments;
    if (comments[index].liked) {
      wx.showToast({
        title: '点过赞了哦~',
      });
    } else {
      var id = e.currentTarget.dataset.id;
      req.post('/comment/' + id + '/like', {}, false)
      teacherService.postLike(id)
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