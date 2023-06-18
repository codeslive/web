import { useState, useEffect } from "react";
import { getList } from "./request";

export default function ListName () {
  const [list, setList] = useState([]);
  const fetchFromServer = async () => {
    const res = await getList();
    console.log(res);
  }

  useEffect(() => {
    fetchFromServer();
  }, [])

  return (
    <div></div>
  )
}

