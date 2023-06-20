import { useState } from "react";
import NewsItem from "./NewsItem";
const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(i);
}
export default function NewsList () {

  const [news] = useState(arr);

  return (
    <div>
      {
        news.map(newDescriptor => <NewsItem newDescriptor={newDescriptor} />)
      }
    </div>
  )
}