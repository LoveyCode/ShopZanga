import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RelatedProducts.css';
import { ShopContext } from '../../Context/ShopContent'; 
import BestSeller from '../BestSeller/BestSeller';

const RelatedProducts = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const product = all_product.find((item) => item.id === Number(productId));

  useEffect(() => {
    if (product) {
    const relatedItems = all_product
    .filter((p) => p.id !== product.id && p.category === product.category)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 4); // Pick 4 randomly

      setRelated(relatedItems);
      setLoading(false);
    }
  }, [product, all_product]);

  if (!product) return <div>Loading related products...</div>;

  return (
<div className="best-seller-wrapper">
<div className='best-seller-container'>

<div className="best-seller">
<hr />
    <h1> RELATED PRODUCTS</h1>
   

      <div className="best-seller-item">
     {loading ? (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
) : related.length === 0 ? (
  <p className="no-related">No related products found.</p>
) : (
            related.map((item, i) => (
              <BestSeller
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
          )}
        </div>
      </div>
    </div>
      </div>
  );
};

export default RelatedProducts;
