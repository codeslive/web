import { useCallback, useRef, forwardRef } from "react";

function TestInput (props,parentRef) {
  const inputElementRef = useRef(null);

  console.log("TestInput render");

  const handleClick = useCallback(() => {
    // 获取真实 dom
    inputElementRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={parentRef} className="input-example" />
      <button onClick={handleClick}>click me</button>
    </div>
  )

}

export default forwardRef(TestInput);