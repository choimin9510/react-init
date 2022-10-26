import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { userActions } from "./store/user";

import { Routes } from "./route/Routes";
import { Footer } from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const { id: userId, name: userName } = useSelector((state) => ({ id: state.user.id, name: state.user.name }), shallowEqual);
  const orderId = useSelector((state) => state.order.id);

  return (
    <div>
      <h1>Hello React</h1>
      <Routes />
      <div>
        {userId} - {userName}
      </div>
      <div>{orderId}</div>
      <input type="button" onClick={() => dispatch(userActions.setName("스토어 값 변경"))} value="이름 변경" />
      <Footer />
    </div>
  );
}

export default App;
