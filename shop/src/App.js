import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
// import bg from "./img/nike_main.jpg";

function App() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SeongLI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
        {/* style={{ backgroundImage : 'url(' + bg + ')' }} */}
        <div className="main-bg"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "./img/nike_1.jpg"} />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>0
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "./img/nike_2.jpg"} />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "./img/nike_3.jpg"} />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
