import styled from "styled-components";
import { theme } from "@/styles/theme";
import R_Tool from "@/assets/images/Roulette/RouletteTool.svg";
import R_Pin from "@/assets/images/Roulette/RoulettePin.svg";
import Result from "@/assets/images/Roulette/ResultBox.svg";
import Prev from "@/assets/images/Roulette/PrevBox.svg";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${theme.yellow};
`;

/**  메인 페이지 스타일 **/
// ...

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
  width: 338px;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 8.213px;
  border: 1px solid var(--strok_1, #cfcfcf);
  background: var(--black, #000);
  color: #fff;
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
