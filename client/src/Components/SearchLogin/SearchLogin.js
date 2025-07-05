
import { useRef, useContext, useState, useEffect} from 'react';
import './SearchLogin.css';
import logo from '../Assets/logo.png';
import navbar_menu_icon from '../Assets/navbar_menu_icon.png'
import navbar_close from '../Assets/navbar_close.png';
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContent';
import SearchDetails from '../SearchDetails/SearchDetails';



function SearchLogin() {
const {getTotalCartItems, getTotalWishlistItems, all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number (productId))


  const menuRef = useRef();

  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput !== "") {
      fetch('https://zanga-dtb7.onrender.com/allproducts')
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter((f) =>
            f.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          setSearchData(filtered);
        });
    } else {
      setSearchData([]);
    }
  }, [searchInput]);

  const navbarMenuToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='container'>
    <div className='search-bar'>
    <div className="search_container">
        <img src={logo} alt="" /> 
        <div className="search-input-button">
        <input 
        className='text-search' type="text"
         id='search'
          placeholder='Search Products & Categories' 
          autoComplete='off' 
          value={searchInput}
          onChange={handleSearchChange}
          />

        <button className="search_button">Search</button>
        </div>
        </div>

        
        <div className="search-login-cart">
          {localStorage.getItem('auth-token') ? (
            <button onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
              
            }}>Logout</button>
          ) : (
            <Link to='/login'><FiUser className='icon' /></Link>
          )}

          <Link to='/cart'><FiShoppingCart className='icon' /></Link>
          <div className="search-cart-count">{getTotalCartItems()}</div>

          <Link to='/wishlist'><FiHeart className='icon ' /></Link>
          <div className="search-cart-count">{getTotalWishlistItems()}</div>
        </div>
      </div>



        <hr />
        <div className='nav-block'>
     <div className='nav-inner-block'>
     <ul className= "nav-menu-list">
            <li > <Link to='/'>Home</Link> </li>
            <li ><Link to='/men'> Men</Link></li>
            <li ><Link to='/women'>Women</Link></li>
            <li ><Link to='/kids'>Kids</Link></li>
            </ul> 
        </div>
    </div>
  
       <div className="small-device-search">
        <img className='nav-icon' onClick={navbarMenuToggle} src={navbar_menu_icon} alt="" />
        <div ref={menuRef}  className="nav-menu-space">
        <ul  className= "nav-list">
            <li > <Link to='/'>Home</Link> </li>
            <li ><Link to='/men'> Men</Link></li>
            <li ><Link to='/women'>Women</Link></li>
            <li ><Link to='/kids'>Kids</Link></li>
            <img className='nav-icon nav-menu-hidden' onClick={navbarMenuToggle} src={ navbar_close} alt="" />
            </ul> 

            </div>
        <input className='icon-search' type="text" id='search' placeholder='Search..'/>
        <button className="small_search_button">Search</button>
        </div>
        {
          searchInput !== "" ?
      
        <div className="result-box-container"> 
       <div className="result-box">
     
        {
          searchData.map((data, index)=>{
             return <SearchDetails product={product} 
             key={index} 
             id={data.id} 
             name={data.name} 
             image={data.image} 
              new_price={data.new_price} 
              old_price={data.old_price}

               />
      
          })
        }

        </div>
     </div> 
      
      :<></>
        }
      
    </div>
  )
}

export default SearchLogin








