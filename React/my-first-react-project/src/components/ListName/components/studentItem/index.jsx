import { useContext } from "react";
import ThemeContext from "../../../Context/themeContext";
export default function StudentItem (props) {
  // 接入上下文
  const contexValue = useContext(ThemeContext);

  return (
    <div style={{ background: contexValue === "light" ? "#fff" : "#666" }}>
      <p>名字：{props.name}————年龄：{props.age}</p>
    </div>
  )
}