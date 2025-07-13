//  import  Weather from "./Weather.json"

//  import hourlyForcast from "./Hourly-Forcast.json"

//  import dailyForcst from "./dailyForcast.json"

// function getCurrentWeather(){
//     return Weather.current
// }

// function getHourlyForcast(){
//     return hourlyForcast.hourly.data
// }

// function getDailyForcast(){
//     return dailyForcst.daily.data
// }

// export { getCurrentWeather , getHourlyForcast,getDailyForcast}



import axios from 'axios';

async function getWeatherData(endponit,place_id,measurmenSystem) {

const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endponit}`,
  params: {
   place_id,
    language: 'en',
    units: measurmenSystem
  },
  headers: {
    'x-rapidapi-key': '0f39a5c798msh219b74c750ccde2p10f53bjsn1e9155726da6',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  // console.log(response.data);

	return response.data
  
} catch (error) {
	console.error(error);
}
    
}
export default getWeatherData


 export async function searchResult(search_result){

const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
  params: {
    text: search_result,
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': '0f39a5c798msh219b74c750ccde2p10f53bjsn1e9155726da6',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data
} catch (error) {
	console.error(error);
}
}

