import React from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";

// import { CompletePage } from "pages/CompletePage";
// import { ConfirmationPage } from "pages/ConfirmationPage";
// import { LimitCheckPage } from "pages/LimitCheckPage";
import { Main } from "../pages/Main";
import { Sub } from "../pages/Sub";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/sub" element={<Sub />} />
      {/*<Route path="/loan-setup" element={<LoanSetupPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/complete" element={<CompletePage />} /> */}
      {/* 일치하는 경로 없을 경우 메인으로 */}
      <Route path="*" element={<Navigate replace to="/main" />} />
    </ReactRouterRoutes>
  );
};
