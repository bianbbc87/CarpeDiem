import Spinner from "@/assets/images/Spinner/Spinner2.gif";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  border: 1px solid blue;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.44);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55%;
  align-items: center;
  color: #00a3ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: normal;
`;

export default function Loading() {
  return (
    <Wrapper>
      <LoadingContainer>
        <img src={Spinner} alt="로딩" width="30%" />
        룰렛을 생성하고 있습니다..
      </LoadingContainer>
    </Wrapper>
  );
}
