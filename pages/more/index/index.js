Page({
  data: {
    feedback: ''
  },
  saveValue(e) {
    this.setData({
      feedback: e.detail.value
    });
  },
  sendFeedback() {
    console.log(this.data.feedback);
    wx.showToast({
      title: '已收到您的反馈',
    });
  }
});
