import Container from './Container.jsx';
export default function NotFound () {
  return (
    <div>
      {
        // 404 页面
        <Container>
          <h1>404</h1>
          <img style={{ margin: "20px 0" }} src="https://images.codeslive.top/static/202306202337400.webp" alt="404" />
        </Container>
      }
    </div >
  )
}

