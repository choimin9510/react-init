import React from "react";

import { Link } from "react-router-dom";

export const Main = (props) => {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to="/sub">
        <li>1번상품</li>
      </Link>
    </>
  );
};
