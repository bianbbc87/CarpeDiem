import styled from 'styled-components'
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Wrapper } from '@/styles/styles';
import Mic from '../../assets/images/mic.svg'
import SmallMic from '../../assets/images/mic_s.svg'
import NotiBalloon from '../../assets/images/notificate_balloon.svg'
import { useState } from 'react';
import SliderButton from '../../components/voice-recognition/SlideButton';

const VoicePage = () => {
  const { transcript, listening } = useSpeechRecognition();
  const [currentPage, setCurrentPage] = useState("voice");
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }
return (
  <>
    <Wrapper>
      <PageBody>
      <SliderButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Instructions className='instruction'>하단의 버튼을 눌러 오늘의 활동을 계획해보세요</Instructions>
      <VoiceRecord>
        <RecordButton onClick={toggleListening}>
          <MicIcon />
        </RecordButton>
        {listening ? '음성인식 중지' : '음성인식 시작'}
      </VoiceRecord>
      <TextSection>
        <TextContainer className="transcript" value={transcript} onChange={() => {}} />
        <SmallMicIcon />
      </TextSection>
      </PageBody>
    </Wrapper>

  </>
)
}
export default VoicePage

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
  background: linear-gradient(164deg, #7CE0FF 12.46%, #0047FF 88.89%);
  border: 4.118px solid #72D3FF;
  box-shadow: 0px 5px 10px 0px rgba(36, 0, 255, 0.25);
`;

const MicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 149px;
  background: no-repeat center url(${Mic});
  fill: white;
`;

const TextSection = styled.div`
  position: relative;
`;

const TextContainer = styled.textarea`
  width: 338px;
  height: 51.126px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray1, #CACDD4);
  background: var(--icon-color, #FFF);
  resize: none;
  outline: none;
  line-height: 51px;
`;

const SmallMicIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 20px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background: no-repeat center url(${SmallMic});
`;