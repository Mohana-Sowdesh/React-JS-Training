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

