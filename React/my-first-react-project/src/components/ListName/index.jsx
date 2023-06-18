import { useState, useEffect } from "react";
import { getList } from "./request";
import StudentItem from "./components/studentItem/index";
import useRequestLoadingDispatcher from "./components/useRequestLoadingDispatcher/index";


export default function ListName () {
  const [list, setList] = useState([]);
  const { loading, executeRequest } = useRequestLoadingDispatcher();

  const fetchFromServer = async () => {
    executeRequest(async () => {
      const res = await getList();
      setList(res.data);
    })
  }

  useEffect(() => {
    fetchFromServer();
  }, [])


  return (
    <div>
      {
        loading ? <p>加载中...</p> : list.map(student => <StudentItem {...student} />)
      }
    </div>

  )

}

