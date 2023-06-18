import { useState } from "react";
// 自定义 hooks 一定要以 use 开头
export default function useRequestLoadingDispatcher () {
  const [loading, setLoading] = useState(false);
  const executeRequest = async (promiseFn) => {
    setLoading(true);
    await promiseFn();
    setLoading(false);
  }

  return {
    loading,
    executeRequest
  }
}
