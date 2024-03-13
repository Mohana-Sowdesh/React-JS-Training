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
    SHOP_NOW_BTN_TXT: 'Shop Now',
    COPYRIGHTS_TXT: 'COPYRIGHTS',
  },
  PRODUCT_CARD: {
    ADD_TO_CART: 'ADD TO CART',
    ADD_TO_WISHLIST: 'ADD TO WISHLIST',
    FALLBACK_IMG_URL: '../assets/Fallback image.jpeg',
    GUARANTEE_TXT: 'GUARANTEE'
  },
  API_URLS: {
    CATEGORIES_URL: 'https://jsonmockserver.vercel.app/api/shopping/furniture/categories',
    PRODUCTS_URL: 'https://jsonmockserver.vercel.app/api/shopping/furniture/products?category='
  },
  CART: {
    MY_CART_TXT: 'MY CART',
    MY_WISHLIST_TXT: 'MY WISHLIST',
    PLACE_ORDER_BTN_TXT: 'PLACE ORDER',
    TOTAL_AMT_TXT: 'TOTAL AMOUNT'
  }
};
