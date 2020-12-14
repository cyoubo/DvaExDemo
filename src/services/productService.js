import request from '../utils/request';

export function loadmockdata() {
    //此处可以进行其他义务逻辑处理
  return request('/api/productMockData');
}