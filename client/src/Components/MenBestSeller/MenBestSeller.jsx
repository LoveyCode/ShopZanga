import { useEffect, useState  } from 'react';
import '../sharedcss/bestSellerLayout.css';

import BestSeller from '../BestSeller/BestSeller';

const MenBestSeller= () => {




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


<div className='h1-container'> 
    <h1>BEST SELLERS FOR MEN</h1>
    </div>
   

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

export default MenBestSeller
