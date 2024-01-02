import { Wheel } from "react-custom-roulette";
import { useState, useEffect } from "react";
import { apiClient } from "@/api/ApiClient";
import Loading1 from "@/components/Loading/Loading";
import StarLight from "@/components/Roulette/StarLight";
import {
  RouletteWrapper,
  SpinBtn,
  RouletteTool,
  RoulettePin,
  ResultBox,
} from "@/styles/styles";
import "@/styles//Roulette.css";

function Roulette() {
  //더미 데이터
  const bg_color = ["#00A3FF", "#FFB13D"];
  const Data = [
    {
      option: "SAMSUNG 에어컨",
    },
    {
      option: "꽝",
    },
    {
      option: "Apple Vision Pro",
    },
    {
      option: "LG TV",
    },
    {
      option: "SAMSUNG 에어컨",
    },
    {
      option: "꽝",
    },
    {
      option: "Apple Vision Pro",
    },
    {
      option: "LG TV",
    },
    {
      option: "SAMSUNG 에어컨",
    },
    {
      option: "꽝",
    },
    {
      option: "Apple Vision Pro",
    },
    {
      option: "LG TV",
    },
    {
      option: "SAMSUNG 에어컨",
    },
    {
      option: "꽝",
    },
    {
      option: "Apple Vision Pro",
    },
    {
      option: "LG TV",
    },
    {
      option: "SAMSUNG 에어컨",
    },
    {
      option: "꽝",
    },
    {
      option: "Apple Vision Pro",
    },
    {
      option: "LG TV",
    },
  ];

  const [data, setData] = useState([]);
  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스
  const [spinState, setSpinState] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [spinText, setSpinText] = useState("룰렛 돌리기");

  // get method
  const getRouletteData = async () => {
    try {
      const response = await apiClient.get(`/api/v1/user/my-event`, searchData);

      setData(response);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getRouletteData();
  }, []);

  useEffect(() => {
    setMustSpin(false);
    setSpinState(false);
  }, [mustSpin]);

  // 룰렛 돌리기 함수
  const handleSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(Math.floor(Math.random() * 4));
      setMustSpin(true);

      // 3초 후
      setTimeout(() => {
        setSpinState(true);
        setSpinText("다시 돌리기");
      }, 3000);
    }
  };

  // 룰렛이 멈췄을 때
  const StopSpinning = () => {
    setMustSpin(false);
  };

  return (
    <RouletteWrapper>
      <Loading1 />
      <StarLight />
      <RouletteTool>
        <RoulettePin />
        <Wheel
          spinDuration={0.2}
          startingOptionIndex={Math.floor(Math.random() * data.length)}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={Data}
          onStopSpinning={StopSpinning}
          radiusLineColor={["tranparent"]}
          outerBorderColor={["tranparent"]}
          textColors={["#000"]}
          fontSize={[15]}
          backgroundColors={bg_color}
        />
      </RouletteTool>
      {!spinState ? (
        <div></div>
      ) : (
        <div>
          <ResultBox>
            <b>활동 내용</b>
            <br />
            {Data[prizeNumber].option}
          </ResultBox>
        </div>
      )}
      <SpinBtn onClick={handleSpinClick}>{spinText}</SpinBtn>
      <div>(test)선택되었습니다 : {prizeNumber}</div>
    </RouletteWrapper>
  );
}

export default Roulette;
