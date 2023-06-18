import { useState } from "react";
// import ReportButton from "./components/ReportButton";
import Counter from "./components/Counter";
import UseEffectes from "./components/useEffect";
import StudentList from "./components/StudentList";
import ListName from "./components/ListName";
function App () {

  const [obj, setObj] = useState({
    a: 1,
    b: 2
  });

  const [countValue, setCountValue] = useState(10);
  const handleClick = () => {
    setCountValue(prev => prev + 1);
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
      <ListName></ListName>
    </div>
  )
}

export default App;
