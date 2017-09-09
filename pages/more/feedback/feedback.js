import { moreService } from '../../../utils/service';

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
    moreService.postFeedback({ feedback: this.data.feedback, contact: this.data.contact})
      .then(() => {
        this.setData({
          feedback: '',
          contact: ''
        });
        wx.showToast({
          title: '已收到您的反馈',
        });
      });
  }
});
