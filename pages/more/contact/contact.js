// pages/more/contact/contact.js
Page({
  copy(event) {
    const link = event.target.dataset.value;
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  
  }
})