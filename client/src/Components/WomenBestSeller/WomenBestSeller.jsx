import { useEffect, useState } from 'react';


import './WomenBestSeller.css';


import BestSeller from '../BestSeller/BestSeller';

const WomenBestSeller= () => {


  const [popularProduct, setPopular_product]=useState([])

  useEffect(() =>{
    fetch('https://zanga-dtb7.onrender.com/popular/women')
    .then((response)=>response.json())
    .then((data)=>setPopular_product(data))
  },[])

  return (
      <div className="best-seller-wrapper">
<div className='best-seller-container'>
<div className="best-seller">
<hr />
    <h1>BEST SELLERS FOR WOMEN</h1>
   

      <div className="best-seller-item">
        {popularProduct.map((item, i)=>{
            
            return <BestSeller 
            product={item} 
            key={i} 
            id={item.id} 
            name={item.name}  
             image={item.image} 
            new_price={item.new_price}
             old_price={item.old_price}
             />
               })}
        </div> 
        </div>
    </div>
    </div>
 
  )
}

export default WomenBestSeller
