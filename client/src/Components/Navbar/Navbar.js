import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

 


    // const [menu, setMenu] = useState("shop")
  return (
    <div className='container2'>
     <div className='sell-space'>
    {/* <p>Sell on Zanga</p> */}
     <ul className= "nav-menu">
            <li><Link to='/'>Shop</Link> </li>
            <li> <Link to='/men'> Men</Link> </li>
            <li><Link to='/women'>Women</Link> </li>
            <li><Link to='/kids'>Kids</Link></li>
       
            {/* <li onClick={() => {setMenu("shop")}}> <Link to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
            <li onClick={() => {setMenu("men")}}><Link to='/men' > Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("women")}}><Link to='/women' >Women</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to='/kids' >Kids</Link>{menu==="kids"?<hr/>:<></>}</li> */}
        </ul> 
        </div>
    </div>
  )
}

export default Navbar