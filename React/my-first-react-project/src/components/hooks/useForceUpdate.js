import { useState } from "react";

export default function useForceUpadate () {
  const [_, setForceObj] = useState({});
  const forceUpdate = () => {
    setForceObj({});
  }
  return forceUpdate;
}