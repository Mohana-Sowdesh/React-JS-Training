import axios from "axios";
import { AppConstants } from "../constants/app-constants";

const errorHandler = () => {
    return { data: [] }
}

export const getDestinationData = async () => {
    const destinationsData = await axios.get(AppConstants.API_URLS.ALL_PLACES_URL).catch(errorHandler);
    return destinationsData.data;
}

export const getSpecificDestinationData = async (destination) => {
    const destinationData = await axios.get(AppConstants.API_URLS.SPECIFIC_PLACE_URL + destination).catch(errorHandler);
    return destinationData.data;
}

export const getWeatherApiData = async (destination) => {
    const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=89c33f3704d1b01a0ef1db831f428d04&units=metric`).catch(errorHandler);
    return weatherData;
}

