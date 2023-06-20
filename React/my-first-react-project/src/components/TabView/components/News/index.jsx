import { useState } from "react";
import NewsItem from "./NewsItem";
const arr = [];

for (let i = 0; i < 1500; i++) {
  arr.push(i);
}
export default function NewsList () {

  const [news] = useState(arr);

  return (
    <div>
      {
        // 绑上key
        news.map((item, index) => {
          return <NewsItem key={index} item={item} />
        }
        )
      }
    </div>
  )
}