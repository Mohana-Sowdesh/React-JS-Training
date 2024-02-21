import axios from "axios";
import { AppConstants } from "../constants/app-constants";

const errorHandler = () => {
    return { data: [] }
}

export const getDestinationData = async () => {
    const destinationsData = await axios.get(AppConstants.API_URLS.ALL_PLACES_URL).catch(errorHandler);
    return destinationsData.data;
}

