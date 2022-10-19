import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { userActions } from "./store/user";

import { publicProducts } from "../src/service/common";

import { Routes } from "./route/Routes";

function App() {
  const dispatch = useDispatch();
  const { id: userId, name: userName } = useSelector((state) => ({ id: state.user.id, name: state.user.name }), shallowEqual);
  const orderId = useSelector((state) => state.order.id);

  useEffect(() => {
    searchAction();
  }, []);

  // API 연동 테스트
  const searchAction = async () => {
    const { data } = await publicProducts();
    console.log(data);
  };

  return (
    <div>
      <h1>Hello React</h1>
      <Routes />
      <div>
        {userId} - {userName}
      </div>
      <div>{orderId}</div>
      <input type="button" onClick={() => dispatch(userActions.setName("스토어 값 변경"))} value="이름 변경" />
    </div>
  );
}

export default App;
