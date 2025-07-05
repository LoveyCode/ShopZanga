import React from 'react';
import './SearchDetails.css';
import { Link } from 'react-router-dom';

function SearchDetails({ id, image, name, new_price, old_price }) {
  return (
    <Link to={`/product/${id}`} className='search-details'>
      <div className="search-details-left">
        <img src={image} alt={name} />
      </div>
      <div className="search-details-right">
        <div className="search-details-name">{name}</div>
        <div className="search-details-price">
          <span className="search-details-price-new">₦{new_price}</span>
          <span className="search-details-price-old">₦{old_price}</span>
        </div>
      </div>
    </Link>
  );
}

export default SearchDetails;























       
