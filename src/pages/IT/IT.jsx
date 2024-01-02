import {
  RouletteWrapper,
  ITContainer,
  PersonImage,
  YellowButton,
  ITTitle,
  ITContent,
  GroomImage,
  Carpediem,
} from "@/styles/styles.jsx";
import "@/styles//IT.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function IT() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || null;
  console.log("data : ", data);

  const handleVoice = () => {
    navigate("/voice-recognition");
  };

  return (
    <RouletteWrapper>
      <ITContainer>
        <GroomImage />
        <PersonImage />
        <ITTitle>{data[0].title}</ITTitle>
        <ITContent>{data[1].content}</ITContent>
        <YellowButton onClick={handleVoice}>
          <Carpediem />
        </YellowButton>
      </ITContainer>
    </RouletteWrapper>
  );
}
