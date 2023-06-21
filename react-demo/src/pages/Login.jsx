import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
export default function Login () {

  // 执行 useNavigate 得到一个跳转函数
  const navigate = useNavigate();
  // useCallback 用于缓存函数，避免重复创建 跳转函数
  const goAbout = useCallback(() => {
    // 跳转
    // navigate('/about');
    // navigate('/about', { replace: true });
    // 路由传参方式一: serach
    // navigate('/about?id=1001&&name=jack');

    // 路由传参方式二: params
    navigate('/about/1001/jack');
  });


  return (
    <div>this is Login <button onClick={goAbout}>go about</button></div>
  )
}