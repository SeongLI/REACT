/* eslint-disable */

import { useState } from "react";
import "./App.css";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import Card from "./component/Card";
import axios, { Axios } from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SeongLI</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/" className="no-underline">
              Home
            </Link> */}
            {/* 깨알 상식 : { navigate(-1) } => 뒤로 1, { navigate(+1) } => 앞으로 1 */}
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              className="no-underline"
            >
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
              className="no-underline"
            >
              {" "}
              Detail{" "}
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outlined" color="secondary">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
              {/* 데이터가져와서 html로 보여주기!! */}
              <button
                onClick={() => {
                  // 로딩중 UI 띄우기

                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      let copy = [...shoes, ...결과.data]; // JSON으로 받아오지만, axois가 array로 자동으로 바꿔줌
                      setShoes(copy);
                      // 로딩중 UI 숨기기
                    })
                    .catch(() => {
                      // 로딩중 UI 숨기기
                    });

                    
                }}
              >
                더보기
              </button>
            </>
          }
        />
        {/* 페이지 여러개 만들고 싶으면 : URL파라미터 써도 된다!! /detail/아무거나 라는 뜻 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

export default App;

//       <Route path="/about" element={<About />}>
//          {/* nested route 접속시엔 element 2개나 보인다. (필수) 어디에 보여줄지 작성해야함*/}
//          <Route path="member" element={<div>멤버임</div>} />
//          <Route path="location" element={<div>위치정보임</div>} />
//        </Route>
//        <Route path="/event" element={<Event/>}>
//          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
//          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
//        </Route>

// function About() {
//   return (
//     <div>
//       <h4>회사정보입니다.</h4>
//       <Outlet></Outlet>
//     </div>
//   );
// }

// function Event() {
//   return (
//     <div>
//       <h4>오늘의 이벤트</h4>
//       <Outlet></Outlet>
//     </div>
//   );
// }

// ajax 쓰는 옵션
// 1. XMLHttpRequest
// 2. fetch()
// 3. axios 같은거
