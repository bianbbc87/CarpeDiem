import {RouletteWrapper, ITContainer, LogoImage, StyledParagraph, BlackButton, YellowButtonR} from "@/styles/styles.jsx";
import "@/styles//Randing.css";

export default function Randing() {
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
    <BlackButton>오늘의 알쓸신잡</BlackButton>
    <YellowButtonR>carpe diem!</YellowButtonR>
</ITContainer>
    </RouletteWrapper>
  )
}
