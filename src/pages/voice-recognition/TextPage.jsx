import styled from 'styled-components';
import { Wrapper } from '../../styles/styles'
import SliderButton from '../../components/voice-recognition/SlideButton';
import NotiBalloon from '../../assets/images/notificate_balloon.svg'
import Pen from '@/assets/images/Pen.svg'
import { useState } from 'react';


const TextPage = () => {
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState("text");

return (
<>
  <Wrapper>
    <PageBody>
      <SliderButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Instructions className='instruction'>하단의 텍스트를 입력해 활동을 계획해보세요</Instructions>
      <VoiceRecord>
        <RecordButton>
          <MicIcon />
        </RecordButton>
      </VoiceRecord>
      <TextSection>
        <TextContainer value={content} onChange={(e)=> {setContent(e.currentTarget.value)}} />
      </TextSection>
      <SubmitButton>입력하기</SubmitButton>
      </PageBody>
  </Wrapper>
</>
)
}
export default TextPage

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .instruction {
    text-align: center;
    line-height: 43.409px;
    font-size: 13px;
  }
`;

const Instructions = styled.div`
  width: 274.08px;
  height: 43.309px;
  flex-shrink: 0;
  background: no-repeat center url(${NotiBalloon});
  margin-bottom: 15px;
`;

const VoiceRecord = styled(PageBody)`
  margin-bottom : 75px;
`;
const RecordButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 149.465px;
  border-radius: 100px;
  flex-shrink: 0;
  background: linear-gradient(164deg, #FFEC44 12.46%, #FFB800 88.89%);
  border: 4.118px solid #FFEE5F;
  box-shadow: 0px 5px 10px 0px rgba(255, 138, 0, 0.25);
  `;

const MicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 149px;
  background: no-repeat center url(${Pen});
  fill: white;
`;

const TextSection = styled.div`
  position: relative;
`;

const TextContainer = styled.textarea`
  width: 306px;
  height: 250.775px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray1, #CACDD4);
  background: var(--icon-color, #FFF);
  resize: none;
  outline: none;
  font-size: 15px;
  padding: 15px;
`;

const SubmitButton = styled.div`
  display: flex;
  width: 336px;
  height: 51px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--strok_1, #CFCFCF);
  background: var(--black, #000);
  color: #FFFFFF;
`;