Page({
  data: {
    feedback: '',
    contact: ''
  },
  saveValue(e) {
    this.setData({
      feedback: e.detail.value
    });
  },
  saveContact(e) {
    this.setData({
      contact: e.detail.value
    });
  },
  sendFeedback() {
    console.log(this.data);
    wx.showToast({
      title: '已收到您的反馈',
    });
  }
});
