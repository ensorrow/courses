Page({
  data: {
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
    ]
  },
  //事件处理函数
  search(event) {
    wx.navigateTo({
      url: '../search/search?value=' + event.detail.value
    });
  }
})
