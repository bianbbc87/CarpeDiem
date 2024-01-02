import axios from "axios";
import FormData from 'form-data';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,
});


export const getRouletteData = ({textData, navigate}) => {
  let data = new FormData();
  data.append('data', 'textData');
  
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
        data : response.data
      }
    })
  })
  .catch((error) => {
    console.log(error);
  });
}
