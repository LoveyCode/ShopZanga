import './Home.css';
import HeroSection  from '../../Components/HeroSection/HeroSection';
import WomenBestSeller from '../../Components/WomenBestSeller/WomenBestSeller';
import Offers from '../../Components/Offers/Offers';
import MenBestSeller from '../../Components/MenBestSeller/MenBestSeller';
import KidsBestSeller from '../../Components/KidsBestSeller/KidsBestSeller';
import NewCollection from '../../Components/NewCollections/NewCollection';
import Newsletter from '../../Components/Newsletter/Newsletter';



const Home = () => {


  return (
     <div className="content_body"> 
<HeroSection />
<WomenBestSeller/>
<MenBestSeller/>
<KidsBestSeller/> 
<Offers />
<NewCollection />
<Newsletter /> 
</div>
    
  )
}

export default Home