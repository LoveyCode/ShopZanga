import React, { useContext }from 'react'
import './BestSeller.css'
import { Link } from 'react-router-dom';
import cart from '../Assets/cart.png';
import heart from '../Assets/heart.png';
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
      <div className="item-description-images">
        <img onClick={() => { addToCart(props.id); notification(); }} src={cart} className='cart' alt="cart" /> 
        <img onClick={() => { addToWishlist(props.id); wishlistnotification(); }} src={heart} className='heart-icon' alt="wish-list" /> 
      </div>
    </div>
    <p className='item-link'>
      <Link to={`/product/${props.id}`}>{props.name}</Link>
    </p>
    <div className="item-prices">
      <div className="item-price-new">${props.new_price}</div>
      <div className="item-price-old">${props.old_price}</div>
    </div>
  </div>
);

}

export default BestSeller

