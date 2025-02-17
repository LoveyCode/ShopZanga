import React from 'react'
import './Breadcrums.css'
import { Link, useLocation } from 'react-router-dom';
// import {Box, Breadcrumbs, Link, Typography} from '@mui/material'

const Breadcrums = (props) => {
  //  const {product} = props;
  // const location = useLocation()

  

  // let currentLink = ''

  // const crumbs = location.pathname.split('/')
  // .filter(crumb => crumb !== '')
  // .map(crumb => {
  //   currentLink =+ `/${crumb}`

  //   return (
  //     <div className='crumb' key={crumb}>
  //    <Link to ={currentLink}> {crumb} </Link>
  //    </div>
  //      )
  // })
   
  return (
 <div className='breadcrums'>
  <p className='breadcrums-link'> 
<Link to='/'>HOME <i class="ri-arrow-drop-right-line"></i></Link> 
<Link to='/'>SHOP <i class="ri-arrow-drop-right-line"></i></Link> 
{props.name}
</p>  


</div>
  )
}

export default Breadcrums



{/* <Box m={2}>
<Breadcrumbs separator='-'>
  <Link underline='hover' href='/'>Shop</Link>
  <Link underline='hover' href={product.category}>{product.category}</Link>
  <Link underline='hover' href={product.name}>{product.name}</Link>
</Breadcrumbs>
</Box> */}