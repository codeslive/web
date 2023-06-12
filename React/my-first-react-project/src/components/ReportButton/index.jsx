export default function ReportButton () {
  const handleClick = () => {
    alert("You clicked me!")
  }
  return(
    <button onClick={handleClick}>Click me!</button>
  )
}