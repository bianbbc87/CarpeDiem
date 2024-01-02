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
import "@/styles//Randing.css";
import { useNavigate } from "react-router-dom";
import { apiClient } from "@/api/ApiClient";

export default function Randing() {
  const navigate = useNavigate();

  // dummy data
  const data = [{ title: "알쓸신잡 제목" }, { content: "알쓸신잡 내용" }];

  // test code

  const getTest = () => {
    navigate("/IT", { state: data });
  };

  const getITData = async () => {
    try {
      const response = await apiClient.get(`info/getHome`);
      console.log("성공 : ", response);
      navigate("/IT", { state: response });
    } catch (error) {
      console.log("알쓸신잡 error", error);
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
        <BlackButton onClick={getITData}>오늘의 알쓸신잡</BlackButton>
        <YellowButtonR onClick={handleVoice}>
          <Carpediem />
        </YellowButtonR>
      </ITContainer>
    </RouletteWrapper>
  );
}
