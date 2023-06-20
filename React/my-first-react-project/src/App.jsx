import { useState, useRef } from "react";
// import ReportButton from "./components/ReportButton";
import Counter from "./components/Counter";
import UseEffectes from "./components/useEffect";
import StudentList from "./components/StudentList";
import ListName from "./components/ListName";
import ForceUpateTest from "./components/ForceUpateTest";
import Ticker from "./components/Ticker";
import TestInput from "./components/TestInput";
import ThemeContext from "./components/Context/themeContext";
import TabView from "./components/TabView";
import TransitionCase from "./components/TransitionCase";
import TestUseState from "./components/TestUseState";
function App () {

  const testInputRef = useRef(null);
  const couterRef = useRef(null);
  const [theme, setTheme] = useState("light");

  const [obj, setObj] = useState({
    a: 1,
    b: 2
  });

  const [countValue, setCountValue] = useState(10);
  const handleClick = () => {
    // setCountValue(prev => prev + 1);
    // testInputRef.current.focus();
    console.log("counterRef", couterRef);
  }

  const changeTheme = () => {
    setTheme(prev => {
      if (prev === "light") return "dark";
      return "light";
    });
  }

  const [arr, setArr] = useState([]);

  // 全是复选框的逻辑
  // const [checked, setChecked] = useState(false);

  const updateObjValue = () => {
    // 如果更新引用值得状态, 我们必须传递一个新的引用
    setObj(prev => {
      return {
        ...prev,
        b: 3
      }
    })
  }
  // 更新数组
  const updateObjArrValue = () => {
    setArr(prev => [...prev, 1])
  }

  return (
    <div>
      {/* <ReportButton></ReportButton> */}
      {/* <Counter defaultValue={countValue}></Counter>
      <hr />
      <button onClick={handleClick}>点击我</button><br />
      <hr />
      <button onClick={updateObjValue}>更新值</button><br />
      a:{obj.a}
      b:{obj.b}
      <hr />
      <button onClick={updateObjArrValue}>更新数组</button><br /> */}
      {/* 数组:{arr} */}
      {/* <Counter></Counter> */}
      {/* <hr />
      <UseEffectes></UseEffectes>
      <hr />
      <StudentList></StudentList>
      <hr /> */}
      <ThemeContext.Provider value={theme}>
        {/* <TestUseState></TestUseState>
        <TestUseState></TestUseState> */}
        <hr />
        <TransitionCase></TransitionCase>
        <hr />
        <TabView></TabView>
        <hr />
        <Counter ref={couterRef} defaultValue={10}></Counter>
        <hr />
        <Ticker></Ticker>
        <hr />
        <Ticker></Ticker>
        <hr />
        <TestInput a={10} ref={testInputRef}></TestInput>
        <button onClick={handleClick}>click me</button>
        <hr />
        <ListName></ListName>
        <button onClick={changeTheme}>changeTheme</button>
        <ForceUpateTest></ForceUpateTest>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
