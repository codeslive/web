// 导入 useSearchParams 函数
import { useSearchParams, useParams } from 'react-router-dom';
export default function About () {

  // 获取通过 useSearchParams 传参过来的 id 参数
  // const [params] = useSearchParams();
  // const id = params.get('id');
  // const name = params.get('name');

  // 通过获取 params 的方式获取参数，需要在路由中配置

  const { id, name } = useParams();

  return (
    <div>this is About:{id}-{name}</div>
  )
}