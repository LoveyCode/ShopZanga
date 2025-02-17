import React from 'react'
import './RelatedProducts.css'
import menData from '../Assets/MenData'
import BestSeller from '../BestSeller/BestSeller';

const RelatedProducts = () => {
  return (
    <div className='related-products'>
    <div className="related-products-container">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {menData.map((item, i) => {
return <BestSeller key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
        </div>
    </div>
  )
}

export default RelatedProducts