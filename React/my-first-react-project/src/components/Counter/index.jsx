import { useState } from "react";
export default function Counter (props) {
  // 这会count的值变动了 它虽然是Counter内部的数据, 但是它凭什么能够让React去重新渲染组件呢
  // 我们要知道 函数组件内部的数据有很多种, 那我们要选能够通知React去重新渲染组件的数据
  // 那么我们需要在内部创造出一种数据, 这种数据可以和React产生直接关联, 从而使得当组件状态发生变化时, React可以重新更新页面
  const [count, setCount] = useState(props.defaultValue || 0);
  const increase = () => {
    setCount(prev => prev + 1);
  }

  const decrease = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span> 
      <button onClick={decrease}>-</button><br />
      <span>{props.defaultValue}</span>
    </div>
  )
}
