import React, { useEffect, useState,  useContext  } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContent';
import BASE_URL from '../../apiConfig'
import './MenBestSeller.css';

import BestSeller from '../BestSeller/BestSeller';

const MenBestSeller= () => {
  const {all_product} = useContext(ShopContext) 
  const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number (productId))


  const [popularProduct, setPopular_product]=useState([])

  useEffect(() =>{
    fetch('http://localhost:4000/popularinmen')
    .then((response)=>response.json())
    .then((data)=>setPopular_product(data))

  },[])

  return (
<div className='best-seller-container'>

<div className="best-seller">
<hr />
    <h1> BEST SELLERS FOR MEN</h1>
   

      <div className="best-seller-item">
        {popularProduct.map((item, i)=>{
            return <BestSeller product={product}  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div> 
        </div> 
       
    </div>
 
  )
}

export default MenBestSeller
