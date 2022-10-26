import React from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";

import { Main } from "../pages/Main";
import { Sub } from "../pages/Sub";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/sub" element={<Sub />} />
      {/* 일치하는 경로 없을 경우 메인으로 */}
      <Route path="*" element={<Navigate replace to="/main" />} />
    </ReactRouterRoutes>
  );
};
