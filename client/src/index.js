import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopContextProvider from './Context/ShopContent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ShopContextProvider>
  <App />
 </ShopContextProvider>    
);

