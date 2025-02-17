import React from 'react'
import './SearchDetails.css';
import { Link } from 'react-router-dom';

function SearchDetails(props) {
  return (
    <div className='search-details'>
    <div className="search-details-left">
<Link to={`/product/${props.id}`}><img  src={props.image} alt="" /> </Link>
    </div>
    <div className="search-details-right">
    <div className="search-details-name">
    <Link to={`/product/${props.id}`}>{props.name}</Link>
    </div>
    <div className="search-details-price">
    <div className="search-details-price-new">
${props.new_price}
  </div>
  <div className="search-details-price-old">
  ${props.old_price}
    </div>

    </div>

    </div>
    </div>
  )
}

export default SearchDetails