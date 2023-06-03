// 导入 axios
import axios from 'axios';

export const getData = () => {
  return axios.get('//mibook.codeslive.top/api/public/book/findFav5');
}
