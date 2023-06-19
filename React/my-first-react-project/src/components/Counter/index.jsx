import { useState, useCallback, useMemo, forwardRef, useImperativeHandle } from "react";
function Counter (props, ref) {

  console.log("props.count", props.defaultValue);



  // 这会count的值变动了 它虽然是Counter内部的数据, 但是它凭什么能够让React去重新渲染组件呢
  // 我们要知道 函数组件内部的数据有很多种, 那我们要选能够通知React去重新渲染组件的数据
  // 那么我们需要在内部创造出一种数据, 这种数据可以和React产生直接关联, 从而使得当组件状态发生变化时, React可以重新更新页面
  // const [count, setCount] = useState(props.defaultValue || 0);

  const [count, setCount] = useState(0);

  // ref.current = count;

  useImperativeHandle(ref, () => {
    return count + "" + Math.random();
  }, [count]);


  // 由于没有给 getCountValue做任何性能的处理, 每次组件的重新渲染他都毫无例外的参与了引用的变化
  // 不给任何一路来的后果, 是不是使用拿的首次渲染时的时间切片：0

  const addCount = useMemo(() => () => {
    setCount(prev => prev + 1);
  }, []);

  const getCountValue = useCallback(() => {
    console.log("最新的countValue", count);
  }, [count]);

  return (
    <div>
      <button onClick={addCount}>+</button>
      <span>{count}</span>
      <button onClick={getCountValue}>获取countValue</button><br />
      <span>{props.defaultValue}</span>
    </div>
  )
}

export default forwardRef(Counter);
