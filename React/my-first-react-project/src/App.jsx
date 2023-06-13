import { useState } from "react";
// import ReportButton from "./components/ReportButton";
import Counter from "./components/Counter";
function App () {

  const [countValue, setCountValue] = useState(10);
  const handleClick = () => {
    setCountValue(prev => prev + 1);
  }

  return (
    <div>
      {/* <ReportButton></ReportButton> */}
      <Counter defaultValue={countValue}></Counter>
      <button onClick={handleClick}>点击我</button>
      {/* <Counter></Counter> */}
    </div>
  )
}

export default App;
