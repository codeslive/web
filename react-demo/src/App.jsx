import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  // 累加器
  const increment = () => {
    setCount(count + 1)
  }


  return (
    <div>
      <h2>当前求和为：{count}</h2>
      <button onClick={increment}>点我+1</button>
    </div>
  )
}

export default App
