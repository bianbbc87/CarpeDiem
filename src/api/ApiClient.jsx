import axios from "axios";
import FormData from 'form-data';



export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,
});


export const getRouletteData = ({textData, navigate}) => {
  let data = new FormData();
  data.append('data', textData);
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '',
    headers: { 
      'Authorization': '', 
      ...data.getHeaders()
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    navigate("/roulette", {
      state: {
        data : response.data.map(element => element.optiontitle)
      }
    })
  })
  .catch((error) => {
    console.log(error);
  });
}

// 룰렛 페이지로 정보 넘기는 테스트용 함수
export const getRouletteDataTest = (textData, navigate) => {
  navigate("/roulette", {
    state: {
      data : dummyData.data.map(element => element.optionTitle)
    }
  })
};

//
const dummyData = {
  "status": 202,
  "message": "조회에 성공하였습니다",
  "data": [
    {
      "optionTitle": "스키/스노보드"
    },
    {
      "optionTitle": "눈싸움"
    },
    {
      "optionTitle": "눈사람 만들기"
    },
    {
      "optionTitle": "스케이트보드"
    },
    {
      "optionTitle": "스케이팅"
    },
    {
      "optionTitle": "빙하 탐험"
    },
    {
      "optionTitle": "야외 캠프파이어"
    },
    {
      "optionTitle": "눈에 편한 캠핑"
    },
    {
      "optionTitle": "워커 췬"
    },
    {
      "optionTitle": "눈썰매"
    }
  ],
  "succeess": true
}