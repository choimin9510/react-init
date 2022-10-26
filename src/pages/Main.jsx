import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { publicProducts } from "../service/common";

export const Main = (props) => {
  useEffect(() => {
    searchAction();
  }, []);

  // API 연동 테스트
  const searchAction = async () => {
    const { data } = await publicProducts();
    console.log(data);
  };

  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to="/sub">
        <h1>서브 페이지 이동</h1>
      </Link>
    </>
  );
};
