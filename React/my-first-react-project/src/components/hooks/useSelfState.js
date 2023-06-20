
let callIndex; // 代表当前到第几个 hook 了
const currentStateArr = [];

export default function useSelfState (initialState) {

  // callIndex等于undefined的时候，就是第一次调用
  if (callIndex === undefined) {
    callIndex = 0;
  }

  // 这里没有值才往里面添加
  if (!currentStateArr[callIndex]) {
    currentStateArr.push({
      isFist: false,
      state: typeof initialState === "function" ? initialState() : initialState
    })
  }
  const dispatchState = (() => {
    let _callIndex = callIndex; // 保存当前的 callIndex
    return (newState) => {
      // 直接修正这个callback
      callIndex = 0;
      // 实际上就是修改了 currentState 的值
      console.log("修改前的 currentState", currentStateArr[_callIndex].state);
      // 用来保存上一次的状态
      const prevState = currentStateArr[_callIndex].state;
      // 修改状态
      currentStateArr[_callIndex].state = typeof newState === "function" ? newState(prevState) : newState;

      console.log("修改后的 currentState", currentStateArr[_callIndex].state);
      // 重新渲染
      window.render();
    }
  })();

  const matchState = currentStateArr[callIndex++];

  return [matchState.state, dispatchState];
}