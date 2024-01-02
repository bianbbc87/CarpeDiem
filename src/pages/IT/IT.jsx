import {RouletteWrapper, ITContainer, PersonImage, YellowButton} from "@/styles/styles.jsx";
import "@/styles//IT.css";
import {useLocation, useNavigate} from "react-router-dom";

export default function IT() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || null;
  console.log("data : ", data);

  const handleVoice = () => {
    navigate("/voice-recognition");
  }

  return (
    <RouletteWrapper>
<ITContainer>
    <PersonImage />
    <h4>{data[0].title}</h4>
    <div className="container">
      {data[1].content}
    </div>
    <YellowButton onClick={handleVoice}>carpe diem!</YellowButton>
</ITContainer>
    </RouletteWrapper>
  )
}
