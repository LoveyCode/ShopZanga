import React, { useRef, useContext, useState, useEffect} from 'react';
import './SearchLogin.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import heart from '../Assets/heart.png';
import login_icon from '../Assets/login_icon.png'
import navbar_menu_icon from '../Assets/navbar_menu_icon.png'
import navbar_close from '../Assets/navbar_close.png';
import search_icon from '../Assets/search_icon.png';
import cross_icon from '../Assets/cross_icon.png'
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContent';
import SearchDetails from '../SearchDetails/SearchDetails';



function SearchLogin() {
const {getTotalCartItems, getTotalWishlistItems, all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number (productId))



const menuRef = useRef();

const [search, setSearch]= useState([]);
const [searchData, setSearchData] = useState([])
const [searchInput, setSearchInput] = useState("")
const [selectedItem, setSelectedItem] = useState(-1)

// const handleChange = e => {
//   setSearch(e.target.value)
// }
// passing search in the dependency array[] means that search will run whenever we change value

useEffect (() => {
if(searchInput !=="") {
fetch ('http://localhost:4000/allproducts')
.then((response) => response.json())
.then((data) => setSearch(data)
)}
}, [search])

const filterdata = (event) =>{
  setSearchInput(event.target.value)
  setSearchData(search.filter( f => f.name.toLowerCase().includes(event.target.value)))
}

const navbarMenuToggle = (e) => {
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open')
}

// const handleClose= () => {
//   setSearch("")
//   setSearchData([])
// }

// const handleKeyDown = e =>{
//   if (e.key === "ArrowUp" && selectedItem > 0){
//     setSelectedItem(prev => prev -1)
//   }
//   else if (e.key === "ArrowDowm" && selectedItem < searchData.length -1){
//     setSelectedItem(prev => prev +1)
//   }
//   else if (e.key === "Enter" && selectedItem >= 0){
//     window.open(searchData[selectedItem].product)
//   }
// }


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
          onChange={filterdata}
          // onKeyDown={handleKeyDown}
          />

        <button className="search_button">Search</button>
        </div>


        </div>
        <div className="search-login-cart">
        {/* // if localStorage has auth-token */}
        {localStorage.getItem('auth-token')
        ?<button  onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
            :<Link to='/login'> <img src={login_icon} className='login-icon' alt='login' /></Link>}

            <Link to='/cart'><img src={cart} className='cart' alt="" /> </Link>
            <div className="search-cart-count">
            {getTotalCartItems ()}
            </div>
           <Link to='/wishlist'> <img src={heart} className='heart-icon' alt="" /> </Link>
            <div className="search-cart-count">
            {getTotalWishlistItems ()}
            </div>
        </div>
        </div>

        <hr />
        <div className='nav-block'>
     <div className='nav-inner-block'>
     <ul className= "nav-menu-list">
            <li > <Link to='/'>Shop</Link> </li>
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
            <li > <Link to='/'>Shop</Link> </li>
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

              // This can only work only if your map format will be in achor tag or Something that can 
              // only show the name of the product not the whole schema, you cant add a classname to an 
              // imported component

              // className ={selectedItem === index ? 'search_suggestion-line active'
              //   : 'search_suggestion-line' }
               />
      
          })
        }
        {/* <img src={ navbar_close} className='result-box-close' onClick={handleClose} alt="" /> */}
        </div>
     </div> 
      
      :<></>
        }
      
    </div>
  )
}

export default SearchLogin
{/* */}


{/* <li onClick={() => {setMenu("shop")}}> <Link to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
<li onClick={() => {setMenu("men")}}><Link to='/men' > Men</Link> {menu==="men"?<hr/>:<></>}</li>
<li onClick={() => {setMenu("women")}}><Link to='/women' >Women</Link> {menu==="women"?<hr/>:<></>}</li>
<li onClick={() => {setMenu("kids")}}><Link to='/kids' >Kids</Link>{menu==="kids"?<hr/>:<></>}</li>  */}