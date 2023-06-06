
export let a = 1;
// 实现一个累加
for (let i = 0; i < 10; i++) {
  a += i;
}


// 冒泡排序
export function bubbleSort(arr: number[]) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 从第一个元素开始，每次都把最大的元素放到最后
    for (let j = 0; j < len - i - 1; j++) {
      // 如果前面的数比后面的数大，就交换位置
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      // console.log(arr);
    }
  }
  return arr;
}
