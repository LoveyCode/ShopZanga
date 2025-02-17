import  {useContext} from 'react'
import './WishlistItems.css'
import { ShopContext } from '../../Context/ShopContent'




const WishlistItems = () => {
 
    const {all_product, wishlistItems, removeFromWishlist, addToCart} = useContext (ShopContext);
  return (
    <div className='wishlistItems'>
<div className="wishlistItems-format-main">
   <p>Product</p>
   <p>Title</p>
   <p>Price</p>
   <p>Total</p>
   <p>Remove</p>
</div>
<hr/>
{all_product.map((e) =>{
    if(wishlistItems[e.id] >0)
    {
       return <div>
       <div className="wishlistItems-format wishlistItems-format-main">
    <img src={e.image} alt="" className='wishlistIcon-product-icon' />
    <p>{e.name}</p>
    <p>${e.new_price}</p>
    <p>${e.new_price * wishlistItems[e.id]}</p>
    <i class="ri-close-line" onClick= {() => {removeFromWishlist (e.id)}} alt="" ></i>
    <button className='addtocart-btn' onClick={() =>{addToCart (e.id)}}>ADD TO CART</button>
</div> 
<hr />
</div>


    }
    return null;
})}


    </div>
  )
}

export default WishlistItems