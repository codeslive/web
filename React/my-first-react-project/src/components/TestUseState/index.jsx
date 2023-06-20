import { useCallback, useState } from "react";
import useSelfState from "../hooks/useSelfState";
function TestUseState () {

  const [count, setCount] = useState(0);

  const [selfCount, setSelfCount] = useSelfState(0);
  const [words, setWords] = useSelfState(['hello', 'world']);

  const addCount = useCallback(() => {
    // setCount(prev => prev + 1);
    setSelfCount(prev => prev + 1);
  }, []);

  const reduceCount = useCallback(() => {
    // setCount(prev => prev - 1);
    setSelfCount(prev => prev - 1);
  }, []);

  const changeWords = useCallback(() => {
    // 生成随机
    const random = Math.random(10).toFixed(2);
    setWords(random);
  }, []);

  return (
    <div>
      {
        <div>
          count:<span>{count}</span>
          selfCount:<span>{selfCount}</span>
          <button onClick={addCount}>addCount</button>
          <button onClick={reduceCount}>reduceCount</button>
          words:{words}
          <button onClick={changeWords}>changeWords</button>
        </div>
      }
    </div>
  )
}

export default TestUseState;