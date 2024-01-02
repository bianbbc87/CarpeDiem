import {RouletteWrapper, ITContainer, PersonImage, YellowButton} from "@/styles/styles.jsx";
import "@/styles//IT.css";

export default function IT() {
  return (
    <RouletteWrapper>
<ITContainer>
    <PersonImage />
    <h4>오늘의 알쓸신잡</h4>
    <div className="container">
      {/* 알쓸신잡 데이터 추가 */}
    </div>
    <YellowButton>carpe diem!</YellowButton>
</ITContainer>
    </RouletteWrapper>
  )
}
