import { useState, useEffect } from "react";

export default function StudentList () {
  const [studentList, setStudentList] = useState([]); // 很多学生数据, 需要循环学生数据, 生成学生列表

  const getStudentListFromServer = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setStudentList([{ name: "张三" }, { name: "李四" }]);
        resolve(true);
      }, 1000);
    })
  }
  
  // 这个是 React 的生命周期函数, 会在组件挂载完成后执行
  useEffect(() => {
    getStudentListFromServer();
  }) 

  return ( 
    <div>
      学生列表：
      {
        studentList.map(student => (
          <div key={student.name}>{student.name}</div>
        ))
      }
    </div>
  )
}