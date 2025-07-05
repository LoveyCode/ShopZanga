import React, { useEffect, useState,  useContext  } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContent';
import './KidsBestSeller.css';
import BestSeller from '../BestSeller/BestSeller';

const KidsBestSeller= () => {



  const [popularProduct, setPopular_product]=useState([])

  useEffect(() =>{
    fetch('http://localhost:4000//popular/kids')
    .then((response)=>response.json())
    .then((data)=>setPopular_product(data))
  },[])

  return (
    <div className="best-seller-wrapper">
<div className='best-seller-container'>

<div className="best-seller">
<hr />
    <h1> BEST SELLERS FOR KIDS</h1>
   

      <div className="best-seller-item">
        {popularProduct.map((item, i)=>{
            return <BestSeller product={item} key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div> 
        </div>
       
    </div>
    </div>
 
  )
}

export default KidsBestSeller
