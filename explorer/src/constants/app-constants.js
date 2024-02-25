import pollachiImg from '../assets/pollachi.png';
import thanjavurImg from '../assets/thanjavur.png';
import chidambaramImg from '../assets/chidambaram.png';
import masinagudiImg from '../assets/masangudi.png';
import kumbakonamImg from  '../assets/kumbakonam.png';
import tirunelveliImg from '../assets/tirunelveli.png';

export const AppConstants = {
    MENU_LIST : ['Hotels', 'Bike Rentals', 'Restaurants'],
    
    BANNER: {
        WELCOME_MSG: "Welcome to Explorer",
        PROMO_MSG: "Your Adventure Travel Expert in the",
        SOUTH: "South",
        EXPLORE_BTN_TXT: "Explore"
    },

    DESTINATIONS_SECTION: {
        DESTINATIONS: "Destinations",
        SLOGAN: "Just for you. Because you and your bike are special to us!",
        READ_MORE_BTN_TXT: "Read more"
    },

    CONTACT_US_FORM: {
        CONTACT_US_HEADING: "Contact Us",
        CONTACT_US_DESCRIPTION: "Our Sales Team will reach out to you ASAP!",
        LABEL_NAME: "Name",
        LABEL_HOME_TOWN: "Your Home Town",
        LABEL_DESTINATION_PREFERENCE: "Where would you like to go?",
        LABEL_CONTACT_NO: "Contact Number",
        SUBMIT_BTN_TEXT: "Submit Interest",
        SUBMIT_MSG: "Thank You `${userName}` for expressing your interest in travelling with us. Our Sales team will get back with the best packages from `${source}` to `${destination}`"
    },

    PLACES_DROPDOWN_VALUES: ['Chidambaram', 'Masinagudi', 'Pollachi', 'Thanjavur', 'Kumbakonam', 'Tirunelveli'],

    API_URLS: {
        ALL_PLACES_URL: 'https://nijin-server.vercel.app/api/explorer',
        SPECIFIC_PLACE_URL: 'https://nijin-server.vercel.app/api/explorer/places/',
        SIMILAR_PLACES_URL: 'http://nijin-server.vercel.app/api/explorer/places/related/'
    },

    DESTINATION_IMG_URL: [pollachiImg, thanjavurImg, chidambaramImg, masinagudiImg, kumbakonamImg, tirunelveliImg ],

    SIMILAR_DESTINATIONS: {
        SIMILAR_DESTINATIONS_TXT: 'Similar Destinations',
        SIMILAR_DESTINATIONS_DESC: 'Because you liked '
    },

    PLACES_IMG: {
        'pollachi': pollachiImg,
        'thanjavur': thanjavurImg,
        'chidambaram': chidambaramImg,
        'masinagudi': masinagudiImg,
        'kumbakonam': kumbakonamImg,
        'tirunelveli': tirunelveliImg
    },

    ERROR_MSG: "Uh-oh! Some error occurred..."
}

