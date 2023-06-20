import { useCallback, useState, useTransition } from "react";

export default function TransitionCase () {
  const [inputValue, setInputValue] = useState("");
  const [recommendList, setrecommendList] = useState([]);
  const [isPending, startTransition] = useTransition();
  // 输入框内容变化时的回调
  const handleChange = useCallback((event) => {
    startTransition(() => {
      setInputValue(event.target.value);
      const _innerRecommendList = [];
      // 处理大量数据 使用useTransition优化 这是因为react会在每次渲染时都会去比较前后两次的虚拟dom树，如果数据量过大，会导致渲染时间过长，从而导致页面卡顿
      for (let i = 0; i < 500; i++) {
        _innerRecommendList.push(`${event.target.value}_react_${i}`);
      }
      setrecommendList(_innerRecommendList);
    })

  }, []);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {
        isPending ? (<div>正在计算中……</div>) : (
          recommendList.map(elm => {
            return <div key={elm}>{elm}</div>
          })
        )
      }
    </div>
  )
}