import req from '../../../utils/request';

Page({
  data: {
    courseList: [
      {
        name: "工科一",
        data: [
          {
            "id": 2,
            "type": "course",
            "title": "高等数学",
            "excerpt": "高等数学",
            "categories": [
              "工科二",
              "理科",
              "工科一"
            ],
            "visit_count": 0
          },
          {
            "id": 3,
            "type": "course",
            "title": "大学物理",
            "excerpt": "大学物理",
            "categories": [
              "工科一",
              "工科二"
            ],
            "visit_count": 0
          }
        ]
      },
      {
        name: "工科二",
        data: [
          {
            "id": 2,
            "type": "course",
            "title": "高等数学",
            "excerpt": "高等数学",
            "categories": [
              "工科二",
              "理科",
              "工科一"
            ],
            "visit_count": 0
          },
          {
            "id": 3,
            "type": "course",
            "title": "大学物理",
            "excerpt": "大学物理",
            "categories": [
              "工科一",
              "工科二"
            ],
            "visit_count": 0
          }
        ]
      }
    ]
  },
  //事件处理函数
  search(event) {
    wx.navigateTo({
      url: '../search/search?value='+event.detail.value
    });
  },
  onLoad() {
    req.get('/post/courses/categorized')
      .then((data) => console.log(data));
  }
})
