import {RouletteWrapper, ITContainer, LogoImage, StyledParagraph, BlackButton, YellowButtonR} from "@/styles/styles.jsx";
import "@/styles//Randing.css";
import {useNavigate} from "react-router-dom";
import {apiClient} from "@/api/ApiClient";

export default function Randing() {
    const navigate = useNavigate();

    // dummy data
    const data = [
        {title: "알쓸신잡 제목"},
        {content: "알쓸신잡 내용"}
    ]

    // test code

    const getTest = () => {
        navigate("/IT", {state: data});
    }

  const getITData = async () => {
    try {
      const response = await apiClient.get('경로');

      navigate("/IT", {state: response});
    } catch(error) {
      console.log("알쓸신잡 error", error);
    }
  }

  const handleVoice = () => {
    navigate("/voice-recognition");
  }

  return (
    <RouletteWrapper>
<ITContainer>
    <LogoImage />
    <div className="title">
      <StyledParagraph>
        다채로운 당신의 하루를 위해 <br/>
        carpe diem!
      </StyledParagraph>
    </div>
    <BlackButton onClick={getTest}>오늘의 알쓸신잡</BlackButton>
    <YellowButtonR onClick={handleVoice}>carpe diem!</YellowButtonR>
</ITContainer>
    </RouletteWrapper>
  )
}
