import  { useContext,  useEffect} from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { ShopContext } from '../Context/ShopContent';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';



const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number (productId))

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]); // trigger scroll reset whenever the product changes

  if (!product) return <div>Loading product...</div>;
  return (
    <>
  
    <div>
     <Breadcrums product={product} /> 
      <ProductDisplay product={product} />
      <DescriptionBox />
       <RelatedProducts product={product} />
      {/* <RelatedProducts /> */}
    </div>
    </>
  )
}

export default Product