import styled from "styled-components";
import { theme } from "@/styles/theme";
import R_Tool from "@/assets/images/Roulette/RouletteTool.svg";
import R_Pin from "@/assets/images/Roulette/RoulettePin.svg";
import Result from "@/assets/images/Roulette/ResultBox.svg";
import Prev from "@/assets/images/Roulette/PrevBox.svg";
import ITLogo from "@/assets/images/IT/logo2.svg";
import ITPerson from "@/assets/images/IT/Person.svg";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${theme.yellow};
`;

/**  랜딩 페이지 스타일 **/
export const LogoImage = styled.div`
margin-top: 104px;
  width: 190px;
  height: 180px;
  display: flex;
  align-items: center;
  background-image: url(${ITLogo});
  background-repeat: no-repeat;
`;

export const StyledParagraph = styled.div`
  margin-top: 45px;
font-family: Nanum Pen;
font-size: 16px; 
line-height: 1.5; 
color: #333; 
text-align: center;
`;

export const BlackButton = styled.button`
  color: white;
  font-family: Pretendard;
  margin-top: 52px;
    width: 309px;
    height: 74px;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 7%;
`;
export const YellowButtonR = styled.button`
  color: blue;
  font-family: Nanum Pen;
  margin-top: 17px;
    width: 309px;
    height: 74px;
    justify-content: center;
    align-items: center;
    background-color: yellow;
    border: 1px solid #dadad7;
    border-radius: 8%;
`;

/** 알쓸신잡 페이지 **/
export const ITContainer = styled.div`
position: absolute;
top: 18px;
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 3%;
  text-align: center;
`;

export const PersonImage = styled.div`
margin-top: 107px;
  width: 125px;
  height: 202px;
  display: flex;
  background-image: url(${ITPerson});
  background-repeat: no-repeat;
`;

export const YellowButton = styled(YellowButtonR)`
  color: blue;
  font-family: Nanum Pen;
  margin-top: 80px;
    width: 309px;
    height: 74px;
    justify-content: center;
    align-items: center;
    background-color: yellow;
    border: 1px solid #dadad7;
    border-radius: 8%;
`;

/**  룰렛 페이지 **/
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  border: 1px solid blue;
  background-color: #fff;
  align-items: center;
`;

export const RouletteWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  border: 1px solid blue;
  background-color: #00a3ff;
  align-items: center;
`;

export const SpinBtn = styled.button`
  position: absolute;
  top: 720px;
  display: flex;
  width: ${(props) => props.width || "338px"};
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 8.213px;
  border: 1px solid #cfcfcf;
  background-color: ${(props) => props.bg || "#000"};
  color: ${(props) => props.color || "#fff"};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 800;
  z-index: 1000;
`;

export const RouletteTool = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 355px;
  margin-top: 134px;
  background-image: url(${R_Tool});
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  transform: scale(1);
`;

export const RoulettePin = styled.div`
  top: -5px;
  position: absolute;
  background-image: url(${R_Pin});
  width: 48px;
  height: 50px;
  background-repeat: no-repeat;
  z-index: 100;
`;

export const ResultBox = styled.div`
  display: flex;
  margin-top: 60px;
  width: 338px;
  height: 122px;
  background-image: url(${Result});
  background-repeat: no-repeat;
  outline: none;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
`;

export const PrevBox = styled.div`
  display: flex;
  margin-top: 60px;
  width: 338px;
  height: 122px;
  background-image: url(${Prev});
  background-repeat: no-repeat;
  outline: none;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
`;
/**  서브 페이지1 스타일 **/
// ...

/** 서브 페이지2 스타일 **/
