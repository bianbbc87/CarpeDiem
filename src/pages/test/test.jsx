import { useLocation } from "react-router-dom";

export default function Test() {
  const location = useLocation();

  // 데이터 받아오기
  const Data = location.state || null;
  console.log("keyword Data : ", Data);

  return <div></div>;
}
