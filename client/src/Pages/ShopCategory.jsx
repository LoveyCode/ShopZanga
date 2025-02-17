import React, { useContext } from 'react'
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContent';
import BestSeller from '../Components/BestSeller/BestSeller';
import Navbar from '../Components/Navbar/Navbar';
import Breadcrums from '../Components/Breadcrums/Breadcrums';



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <>
      <Navbar />
  <Breadcrums /> 
    <div className='shop-category'>
    <img className='shopCategory-banner' src={props.banner} alt="" />
    <div className="shopCategory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <button className="shopCategory-sort">
        Sort by <i class="ri-arrow-drop-down-fill"></i>
      </button>
    </div>
    <div className="shopCategory-products">
      {all_product.map((item, i)=>{
        if(props.category===item.category){
          return <BestSeller key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
        else {
          return null;
        }
        
      })}
    </div>
    <div className="shopCategory-loadmore">
      Explore More
    </div>
    </div>
    </>
  )
}

export default ShopCategory