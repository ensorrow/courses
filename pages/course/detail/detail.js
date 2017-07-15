// pages/course/detail/detail.js
import req from '../../../utils/request';

Page({
  data: {
    title: "大学物理",
    category: "分类1",
    credit: "3.5",
    content: "大学物理，是大学理工科类的一门基础课程，通过课程的学习，使学生熟悉自然界物质的结构，性质，相互作用及其运动的基本规律，为后继专业基础与专业课程的学习及进一步获取有关知识奠定必要的物理基础。但工科专业以力学基础和电磁学为主要授课。",
    resources: [
      {
        link: 'http://lvzheyang.top',
        name: '南卷汇-大二上大学物理考试试题汇编.doc'
      },
      {
        link: 'http://lvzheyang.top',
        name: '大学物理.ppt'
      },
      {
        link: 'http://lvzheyang.top',
        name: '大学物理学霸笔记.pdf'
      }
    ],
    teachers: [
      {
        id: '001',
        avatar: '../../../static/imgs/avatar.jpg',
        name: '白宇',
        intro: '帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎'
      },
      {
        id: '001',
        avatar: '../../../static/imgs/avatar.jpg',
        name: '白宇',
        intro: '帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎'
      },
      {
        id: '001',
        avatar: '../../../static/imgs/avatar.jpg',
        name: '白宇',
        intro: '帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎'
      },
      {
        id: '001',
        avatar: '../../../static/imgs/avatar.jpg',
        name: '白宇',
        intro: '帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎帅气体贴，细心，广受女生欢迎'
      }
    ],
    comments: [
      {
        comment: '这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了这个课老难了',
        like: 20
      },
      {
        comment: '大学第一挂',
        like: 26
      }
    ]
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
  }
})