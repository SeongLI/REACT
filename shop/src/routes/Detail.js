import { Component, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import styled from "styled-components";
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";
import { Context1 } from "./../App.js";

// 팀원과 이야기하기!!
// let ColorBtn = styled.button`
//   background: ${ props => props.bg}; // 외부라이브러리 그냥 쓰자!
//   color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding: 10px;
// `;

function Detail(props) {
  let 재고 = useContext(Context1); // 보관함 해체
  console.log(재고);

  let [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    // console.log(찾은상품);
    // localStorage.setItem('watched', [찾은상품.id])
    let 꺼냄 = localStorage.getItem("watched");
    꺼냄 = JSON.parse(꺼냄);
    꺼냄.push(찾은상품.id);
    // 중복제거
    꺼냄 = new Set(꺼냄);
    꺼냄 = Array.from(꺼냄);
    localStorage.setItem("watched", JSON.stringify(꺼냄));
  }, []);

  useEffect(() => {
    // mount, update 시 실행
    // useEffect 안에 있는 코드는 html 렌더링 후에 동작한다!!!

    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      console.log(2);
      clearTimeout(a);
    };
  }, []); // [] : useEffect 실행조건 넣을 수 있는 곳, 컴포넌트 mount시 1회만 실행하고 싶으면 이렇게!!

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  // 정리시간
  // useEffect(()=>{   }) 1. 재렌더링마다 코드실행 하고싶으면
  // useEffect(()=>{   }, []) 2. mount시 1회 코드실행하고 싶으면  // 5. 특정 state 변경시에만 실행하려면 [state명]
  // useEffect(()=>{
  //   return ()=>{
  //     3. unmount시 1회 코드실행하고 싶으면
  //   }
  // }, [])
  // 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return()=>{}

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {/* <div className="alert alert-warning">2초 이내 구매시 할인</div> */}
      {/* <ColorBtn bg = "blue">버튼</ColorBtn>
        <ColorBtn bg = "orange">버튼</ColorBtn> */}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/img/nike_" + id + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent shose={props.shoes} tab={tab} />
    </div>
  );
}

function TabContent({ tab, shose }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={"start " + fade}>
      {[<div>{shose[0].title}</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>
  );
}

// function TabContent(props) {
//   if (props.tab == 0) {
//     return <div>내용 0</div>;
//   } else if (props.tab == 1) {
//     return <div>내용 1</div>;
//   } else if (props.tab == 2) {
//     return <div>내용 2</div>;
//   }
// }

export default Detail;

// props 싫으면
// 1. Context API (리액트 기본문법)
// 2. Redux 등 외부라이브러리
