import React, { useState, useEffect } from 'react'
import './NewCollections.css'
import BestSeller from '../BestSeller/BestSeller';
import BASE_URL from '../../apiConfig'



function NewCollection() {
  const [new_collection, setNew_collection] = useState([])

useEffect(() =>{
  fetch(`${BASE_URL}/products/newcollections`)
.then((response)=>response.json())
.then((data)=>setNew_collection(data));

}, [])

  return (
<div className="newCollection-container">
<div className="newCollection">
<hr />
<h1>NEW COLLECTIONS</h1>
  
    <div className="newCollection-item">
        {new_collection.map((item, i)=>{
            return <BestSeller key={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} 
            old_price={item.old_price}/>
             })}
             </div>
</div>
    </div>

  )
}

export default NewCollection;