import chairsImg from "../assets/chairs.png";
import couchesImg from "../assets/couches.png";
import diningImg from "../assets/dining.png";

export const AppConstants = {
  HEADER: {
    LOGO: "SITBACK",
    MENU_LIST: [ 
      {
        name: "Couches",
        path: "/products/couches"
      },
      { 
        name: "Chairs",
        path: "/products/chairs"
      }, 
      {
        name: "Dining",
        path: "/products/dining"
      }
    ],
    USERNAME: "Nijin Vinodan",
  },
  HOME_PAGE: {
    TAGLINE: 'Your Home, With Love',
    CATCH_PHRASE: 'Come, Choose from millions of products',
    CATEGORIES_DETAILS: [
      {
        imageUrl: couchesImg,
        categoryName: "Couches",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        imageUrl: chairsImg,
        categoryName: "Chairs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        imageUrl: diningImg,
        categoryName: "Dining",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
    SHOP_NOW_BTN_TXT: 'Shop Now',
    COPYRIGHTS_TXT: 'COPYRIGHTS',
  },
  PRODUCT_CARD: {
    ADD_TO_CART: 'ADD TO CART',
    ADD_TO_WISHLIST: 'ADD TO WISHLIST'
  }
};
