import SearchLogin from './Components/SearchLogin/SearchLogin';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from  './Pages/ShopCategory';
import Product from  './Pages/Product'
import Cart from  './Pages/Cart'
import Home from  './Pages/Home/Home'
import LoginSignup from  './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.png';
import women_banner from './Components/Assets/women_banner.png';
import kids_banner from './Components/Assets/kids_banner.png';
import WishlistItems from './Components/WishlistItems/WishlistItems';
import OauthSuccess from './Pages/OauthSuccess';
import ScrollToTop from './scrollToTop';




function App() {
  return (
    <div >
    <BrowserRouter>
 <SearchLogin />

   <ScrollToTop />
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/men' element={<ShopCategory banner={men_banner} category = 'men'/>} />
  <Route path='/women' element={<ShopCategory banner={women_banner}  category = 'women'/>} />
  <Route path='/kids' element={<ShopCategory banner={kids_banner}  category = 'kids'/>} />
  <Route  path='/product' element= {<Product/>}>
  <Route path=':productId' element={<Product/>} />
  </Route>
  <Route path='/cart' element={<Cart/>} />
  <Route path='/wishlist' element={<WishlistItems/>}/>
  <Route path='/login' element={<LoginSignup />} />
  <Route path="/oauth-success" element={<OauthSuccess />} />

</Routes>
<Footer />
</BrowserRouter>

    </div>
  );
}

export default App;
