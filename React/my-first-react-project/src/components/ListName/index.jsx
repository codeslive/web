import { useState, useEffect, useCallback } from "react";
import { getList } from "./request";
import StudentItem from "./components/studentItem/index";
import useRequestLoadingDispatcher from "./components/useRequestLoadingDispatcher/index";


export default function ListName () {
  const [list, setList] = useState([]);
  const { loading, executeRequest } = useRequestLoadingDispatcher();

  // useCallback 只在创建函数引用得时候使用
  // 1. 第一个参数你要对应复制给变量的函数体 [函数声明]
  // 2. 第二个参数是依赖项, 当依赖项发生了变动以后 对应得函数引用会被从新生成

  // 每次函数组件重新渲染的时候, 函数都会被重新创建
  // 真理：用到函数的地方你都用 useCallback 包裹一下
  const fetchFromServer = useCallback(async () => {
    // 否则你拿的韩式上个时间得切片的函数
    executeRequest(async () => {
      const res = await getList();
      setList(res.data);
    })
  }, [executeRequest])

  useEffect(() => {
    fetchFromServer();
  }, [])


  return (
    <div>
      {
        loading ? <p>加载中...</p> : list.map(student => <StudentItem key={student.name} {...student} />)
      }
    </div>

  )

}

