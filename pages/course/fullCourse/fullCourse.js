import req from '../../../utils/request';

Page({
  data: {
    courseList: null
  },
  onLoad(option) {
    this.setData({
      categoryName: option.name
    });
    req.get('/category/'+option.name+'/courses?page=1')
      .then((res) => this.setData({
        courseList: res.data.data
      }));
  }
})