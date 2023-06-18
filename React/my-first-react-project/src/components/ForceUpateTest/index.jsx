import useForceUpadate from "../hooks/useForceUpdate";
import useWindowScrollWatcher from "../hooks/useWindowScrollWatcher";
export default function ForceUpateTest () {
  const forceUpate = useForceUpadate();
  useWindowScrollWatcher(() => {
    console.log("滚动了");
  });
  return (
    <div style={{ height: "1000px" }}>
      <button onClick={forceUpate}>强制更新</button>
    </div>
  )
}