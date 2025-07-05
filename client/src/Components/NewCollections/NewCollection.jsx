import React, { useState, useEffect } from 'react'
import './NewCollections.css'
import BestSeller from '../BestSeller/BestSeller';




function NewCollection() {
  const [new_collection, setNew_collection] = useState([])

useEffect(() =>{
  fetch('http://localhost:4000/newcollection')
.then((response)=>response.json())
.then((data)=>setNew_collection(data));

}, [])

  return (
     <div className="best-seller-wrapper">
<div className='best-seller-container'>
<div className="best-seller">
<hr />
<h1>NEW COLLECTIONS</h1>
  
     <div className="best-seller-item">
        {new_collection.map((item, i)=>{
            return <BestSeller key={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} 
            old_price={item.old_price}/>
             })}
             </div>
</div>
    </div>
    </div>

  )
}

export default NewCollection;