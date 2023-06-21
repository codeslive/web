import About from "../pages/About";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Article from "../pages/Article";
import Borard from "../pages/Borard";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
// 引入 router
import { createBrowserRouter } from 'react-router-dom';

// 调用 create 方法生成实例
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          // path: "borard",
          index: true,
          element: <Borard />
        },
        {
          path: "article",
          element: <Article />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/about/:id/:name",
      element: <About />
    },
    {
      path: "*",
      element: <NotFound />
    },
  ]
);

export default router;