import {
  RouletteWrapper,
  ITContainer,
  LogoImage,
  StyledParagraph,
  BlackButton,
  YellowButtonR,
  Carpediem,
  CarpediemText,
} from "@/styles/styles.jsx";
import { dummy } from "@/api/ITDummy";
import "@/styles//Randing.css";
import { useNavigate } from "react-router-dom";
import { apiClient } from "@/api/ApiClient";

export default function Randing() {
  const navigate = useNavigate();

  const dummydata = dummy;

  // 0 인덱스부터 14 인덱스까지의 날짜와 해당 날짜에 해당하는 데이터를 출력
  const currentDate = new Date();
  const indexDate = (currentDate.getDate() - 3) % 14;

  // 현재 날짜를 기준으로 0 인덱스부터 14 인덱스까지의 데이터를 가져옴
  const data = dummydata.data[indexDate];
  console.log("data : ", data);

  // test code

  const getTest = () => {
    navigate("/IT", { state: data });
  };

  const getITData = async () => {
    try {
      const response = await fetch("http://3.39.187.248/info/getHome");
      console.log("data : ", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleVoice = () => {
    navigate("/voice-recognition");
  };

  return (
    <RouletteWrapper>
      <ITContainer>
        <LogoImage />
        <div className="title">
          <StyledParagraph>
            <CarpediemText />
          </StyledParagraph>
        </div>
        <BlackButton onClick={getTest}>오늘의 알쓸신잡</BlackButton>
        <YellowButtonR onClick={handleVoice}>
          <Carpediem />
        </YellowButtonR>
      </ITContainer>
    </RouletteWrapper>
  );
}
