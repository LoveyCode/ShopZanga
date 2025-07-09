import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://zanga-dtb7.onrender.com/allproducts');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      console.log('Fetched products:', data);
      setAllProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch('https://zanga-dtb7.onrender.com/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    await fetchInfo();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allproducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allproducts.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='list-product'>
      <h1>All Products List</h1>

      <div className='listproduct-format-main '>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className='listproduct-allproduct'>
        <hr />

        {loading && <p className='status-msg'>Loading...</p>}
        {error && <p className='status-msg error'>Error: {error}</p>}
        {!loading && !error && currentItems.map((product, index) => (
          <React.Fragment key={product.id || index}>
            <div className='listproduct-format-main listproduct-format'>
              <img
                src={product.image?.url || product.image}
                alt={product.name}
                className='listproduct-product-icon'
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => remove_product(product.id)}
                src={cross_icon}
                alt='Remove'
                className='listproduct-remove-icon'
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>

      <div className='pagination'>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
