Page({
  data: {
    courseList: [
      {
        id: 1,
        title: '工科数学分析',
        summary: '圣诞节爱神的箭爱的暗红色的挥洒的骄傲哈倒计时大红色的圣诞节爱神的箭爱的暗红色的挥洒的骄傲哈倒计时大红色的圣诞节爱神的箭爱的暗红色的挥洒的骄傲哈倒计时大红色的'
      },
      {
        id: 2,
        title: '工科数学分析2',
        summary: '圣诞节爱神的箭爱的暗红色的挥洒的骄傲哈倒计时大红色的圣诞节爱神的箭爱的暗红色的挥洒的骄傲哈倒计时大红色的'
      },
      {
        id: 3,
        title: '工科数学分析3',
        summary: '圣诞节爱神的箭爱的暗红色的挥洒的骄傲哈倒计时大红色的'
      }
    ]
  },
  //事件处理函数
  search(event) {
    wx.navigateTo({
      url: '../search/search?value='+event.detail.value
    });
  },
  onLoad: function () {
    console.log('onLoad')
    
  }
})
