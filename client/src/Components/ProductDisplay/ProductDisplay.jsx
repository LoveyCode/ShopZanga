import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContent';
import toast, { Toaster } from 'react-hot-toast';

const ProductDisplay = ({ product }) => {
  const { addToCart, addToWishlist } = useContext(ShopContext);
const imageUrl = product.image;

  const notification = () => toast.success(`${product.name} has been added to cart`);
  const wishlistNotification = () => toast.success(`${product.name} has been added to wishlist`);

  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={imageUrl} alt={product.name} />
          <img src={imageUrl} alt={product.name} />
          <img src={imageUrl} alt={product.name} />
          <img src={imageUrl} alt={product.name} />
        </div>

        <div className="productDisplay-img">
          <img className='productDisplay-main-img' src={imageUrl} alt={product.name} />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>

        <div className="productDisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star dull" />
          <p>(122)</p>
        </div>

        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">₦{product.old_price}</div>
          <div className="productDisplay-right-price-new">₦{product.new_price}</div>
        </div>

        <div className="productDisplay-right-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nibh et arcu
            tempus convallis in sit amet leo...
          </p>
        </div>

        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <div className="cart-wishlist-btn">
          <button onClick={() => { addToCart(product.id); notification(); }}>ADD TO CART</button>
          <Toaster />
          <button onClick={() => { addToWishlist(product.id); wishlistNotification(); }}>ADD TO WISHLIST</button>
        </div>

        <p className='productDisplay-right-category'>
          <span>Category :</span> {product.category}
        </p>
        <p className='productDisplay-right-category'>
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
