import styled from "styled-components";
import { theme } from "@/styles/theme";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${theme.yellow};
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
  background-color: red;
`;

/**  서브 페이지1 스타일 **/
// ...

/** 서브 페이지2 스타일 **/
