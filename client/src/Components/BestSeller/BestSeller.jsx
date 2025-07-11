import React, { useContext }from 'react'
import './BestSeller.css'
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { ShopContext } from '../../Context/ShopContent';
import toast, { Toaster } from 'react-hot-toast';

function BestSeller(props) {
    const {addToCart, addToWishlist} = useContext(ShopContext);
  const notification = () => toast.success(`${props.name} has been added to cart`);
  const wishlistnotification = () => toast.success(`${props.name} has been added to wishlist`);


const imageUrl = props.image;

return (
  <div className="item"> 
    <Link to={`/product/${props.id}`}>
      <img src={imageUrl} alt={props.name} />
    </Link>
    <Toaster />
    <div className="item-description">
      <Link to={`/product/${props.id}`}>
        <img className='item-description-big-img' src={imageUrl} alt={props.name} />
      </Link>
      <div className="item-addcart-addwishlist">
          <FiShoppingCart className='icon' onClick={() => { addToCart(props.id); notification(); }} /> 
        <FiHeart className='icon' onClick={() => { addToWishlist(props.id); wishlistnotification(); }}  /> 
      </div>
    </div>
    <p className='item-link'>
      <Link to={`/product/${props.id}`}>{props.name}</Link>
    </p>
    <div className="item-prices">
      <div className="item-price-new">${props.new_price}</div>
      <div className="item-price-old">${props.old_price}</div>
    </div>
    <div className='mobile-addcart-addwishlist'>
      <button onClick={() => { addToCart(props.id); notification(); }}>   <FiShoppingCart className='small-icon'/>  </button>
      <button onClick={() => { addToWishlist(props.id); wishlistnotification(); }} >  <FiHeart className='small-icon' /> </button>
    </div>
  </div>
);

}

export default BestSeller

