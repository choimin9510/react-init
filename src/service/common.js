import http from "../server/http";

// 목록 조회
export const publicProducts = () => {
  return http.get("/api/v1/main");
};

// // 세부 정보 조회
// export const ntfData = (nftId) => {
//   return http.post(`/collection/${nftId}`, {});
// };
