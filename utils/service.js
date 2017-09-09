import req from './request';

export const courseService = {
  getDetail: (id) => req.get(`/course/${id}`),
  getComments: (id, page=1) => req.get(`/course/${id}/comment?page=${page}`),
  postComment: (id, content) => req.post(`/course/${id}/comment`, { content }, false),
  postLike: (id) => req.post(`/comment/${id}/like`, {}, false),
  getFullCourse: (name, page=1) => req.get(`/category/${name}/courses?page=${page}`),
  getCategorized: () => req.get('/category/course'),
  getSearch: (value, page=1) => req.get(`/course/s?q=${value}&page=${page}`)
};
export const teacherService = {
  getDetail: (id) => req.get(`/teacher/${id}`),
  getComments: (id, page = 1) => req.get(`/teacher/${id}/comment?page=${page}`),
  postComment: (id, content) => req.post(`/teacher/${id}/comment`, { content }, false),
  postLike: (id) => req.post(`/comment/${id}/like`, {}, false),
  getSearch: (value, page = 1) => req.get(`/teacher/s?q=${value}&page=${page}`),
  getList: (page=1) => req.get(`/teacher?page=${page}`)
};
export const moreService = {
  postFeedback: (content) => req.post('/feedback', {content})
}