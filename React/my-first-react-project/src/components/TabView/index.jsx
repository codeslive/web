import { useCallback, useMemo, useState, useTransition } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NewsList from "./components/News";
export default function TabView () {

  // home news about 三个页面
  const [presentActiveTab, setPresentActiveTab] = useState("home");

  const [pending, startTransition] = useTransition();

  const tabs = useMemo(() => {
    return [
      {
        key: "home",
        label: "首页",
        component: <Home />
      },
      {
        key: "news",
        label: "新闻页面",
        component: <NewsList />
      },
      {
        key: "about",
        label: "关于我们",
        component: <About />
      },
    ]
  }, []);

  const presentComponent = useMemo(() => {
    return tabs.find(tabObj => tabObj.key === presentActiveTab).component;
  }, [presentActiveTab, tabs]);

  const changeTab = useCallback((tab) => {
    // setPresentActiveTab(tab);
    startTransition(() => setPresentActiveTab(tab));
  }, []);


  return (
    <div>
      {/* {1.展示tab 2.切换tab渲染不同的页面} */}
      {/* {pending ? "加载中..." : null} */}
      {
        tabs.map(tabObj => {
          return (
            <button key={tabObj.label} onClick={() => changeTab(tabObj.key)}>{tabObj.label}</button>
          )
        })
      }
      {
        presentComponent
      }
    </div>
  )
}