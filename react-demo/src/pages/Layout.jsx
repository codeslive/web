import { Link, Outlet } from "react-router-dom";
export default function Layout () {
  return (
    <div>
      {
        <div>
          <h1>一级路由</h1>
          <button><Link to="/">看板</Link></button>&nbsp;
          <button><Link to="/article">文章</Link></button>
        </div>

      }

      {
        <div>
          <h1>二级路由</h1>
          <Outlet></Outlet>
        </div>
      }
    </div>
  )
}