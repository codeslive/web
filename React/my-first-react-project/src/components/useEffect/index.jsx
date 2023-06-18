import { useEffect, useState } from "react";

export default function useEffects () {
  const [bool, setBool] = useState(true);
  useEffect(() => {
    console.log("hello world");
  }, [bool]);

  return (
    <div>
      <button onClick={() => setBool(prev => !prev)}>点击我取反</button>
    </div>
  )
}