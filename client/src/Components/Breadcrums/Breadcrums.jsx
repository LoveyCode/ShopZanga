
import './Breadcrums.css';
import { Link } from 'react-router-dom';

const Breadcrums = ({ name, product }) => {
  const formatName = name?.charAt(0).toUpperCase() + name?.slice(1).toLowerCase(); // Capitalize

  return (
    <div className='breadcrums'>
       <p className="breadcrums-link">
        <Link to="/">Home</Link> / <Link to="/">Product</Link> /{' '}
        <span>{product?.id}</span>
        {name && <> / <Link to={`/${name}`}>{formatName}</Link></>}
      </p>  
    </div>
  );
}

export default Breadcrums;
