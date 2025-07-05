import { useEffect, useState  } from 'react';


import './MenBestSeller.css';

import BestSeller from '../BestSeller/BestSeller';

const MenBestSeller= () => {

  const backendUrl = 'https://zanga-dtb7.onrender.com';


  const [popularProduct, setpopularProduct]=useState([])

  useEffect(() =>{
    fetch('https://zanga-dtb7.onrender.com/popular/men')
    .then((response)=>response.json())
    .then((data)=>setpopularProduct(data))

  },[])

  return (
<div className="best-seller-wrapper">
<div className='best-seller-container'>

<div className="best-seller">
<hr />
    <h1> BEST SELLERS FOR MEN</h1>
   

      <div className="best-seller-item">
        {popularProduct.map((item, i)=>{
        const imageUrl = `${backendUrl}/images/${item.image}`;
            return <BestSeller 
            product={item} 
            key={i} 
            id={item.id} 
            name={item.name}  
            image={imageUrl} 
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

export default MenBestSeller
