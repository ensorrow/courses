// pages/course/search/search.js
import req from '../../../utils/request';

Page({
  data: {
    value: "",
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
  onLoad(options) {
    this.setData({
      value: options.value
    });
    this.getResult(options.value);
  },
  search(event) {
    this.getResult(event.detail.value);
  },
  getResult(value) {
    req.get('/post/s?q='+value+'&page=1')
      .then((res) => {
        this.setData({
          courseList: res.data.data.filter(
            (item) => item.type === 'course'
          )
        });
      })
  }
})