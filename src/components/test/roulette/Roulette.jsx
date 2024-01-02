import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import { Wrapper } from "@/styles/styles";
import "@/styles//Roulette.css";

function Roulette() {
  //데이터
  const data = [
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

  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스

  const handleSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(Math.floor(Math.random() * 4));
      setMustSpin(true);
    }
  };

  const StopSpinning = () => {
    setMustSpin(false);
    alert(data[prizeNumber].option + "이 당첨되셨습니다");
  };

  return (
    <Wrapper>
      <Wheel
        spinDuration={0.2} // spin속도
        startingOptionIndex={Math.floor(Math.random() * data.length)}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={StopSpinning}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      <div>{prizeNumber}</div>
    </Wrapper>
  );
}

export default Roulette;
