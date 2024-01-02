import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SliderButton = ({currentPage, setCurrentPage}) => {
  const navigate = useNavigate();
return (
<>
<SlideContainer>
        <SlideButton className={currentPage === "voice" ? "selected" : ""} onClick={()=>navigate("/voice-recognition")}>음성인식</SlideButton>
        <SlideButton className={currentPage === "voice" ? "" : "selected"} onClick={()=>navigate("/text")}>텍스트</SlideButton>
      </SlideContainer>
</>
)
}
export default SliderButton

const SlideContainer = styled.div`
  display: flex;
  width: 151.338px;
  height: 33.186px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--blue, #00A3FF);
  margin: 63px 0px 47px 0px;
  .selected {
    background: var(--icon-color, #FFF);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    color: black;
  }
`;

const SlideButton = styled.div`
  width: 72.091px;
  height: 28.569px;
  flex-shrink: 0;
  margin: 2px 2px;
  border-radius: 30px;
  text-align: center;
  line-height: 28.569px;
  color: white;
  font-size: 13px;
`;