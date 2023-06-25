export const createHistoryEvent = (type) => {
    // orign 是原始的history[type]方法
    const origin = history[type];
    // 重写history[type]方法
    return function () {
        const res = origin.apply(this, arguments);
        const e = new Event(type);
        window.dispatchEvent(e);
        return res;
    };
};
