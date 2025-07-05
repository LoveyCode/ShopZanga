
import './Offers.css'
import offerPics from '../Assets/offerPics.png';

const Offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
<h1>Exclusive <br />
Offers for you</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
</div>
<div className="offers-right">
<img src={offerPics} alt="" />
</div>
    </div>
  )
}

export default Offers