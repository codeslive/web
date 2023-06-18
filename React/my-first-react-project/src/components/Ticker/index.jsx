import { useState, Fragment, useCallback, useRef } from "react";

export default function Ticker () {
  const [timeCount, setTimeCount] = useState(60);

  // useRef 会返回一个对象, 对象里面有一个 current属性
  // ref是可读可写的 它不像哪个state是必须调用setState
  const timerIdRef = useRef(null);
  // 开始倒计时
  const startTick = useCallback(() => {
    timerIdRef.current = setInterval(() => {
      setTimeCount(prev => prev - 1);
    }, 1000);
  }, []);
  // 停止倒计时
  const stopClick = useCallback(() => {
    if (timerIdRef.current) clearInterval(timerIdRef.current);
  })


  return (
    <Fragment>
      <button onClick={startTick}>开始倒计时</button>
      <span>{timeCount}</span>
      <button onClick={stopClick}>停止倒计时</button>
    </Fragment>
  )
}