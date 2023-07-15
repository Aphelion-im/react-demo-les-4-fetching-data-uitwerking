import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        setError(false);
        const response = await axios.get('https://fakestoreapi.com/products', {
          signal: controller.signal,
        });
        setData(response.data); /* Plaats de server response in de setData state */
      } catch (e) {
        console.error(e);
        // if (controller.signal.aborted) return;
        setError(true);

        if (axios.isCancel(e)) {
          console.log('The axios request was cancelled');
        } else {
          console.error(e);
        }
      }
      setLoading(false);
    };
    fetchData();

    return function cleanup() {
      console.log('Cleanup Product'); // Error op deze pagina
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: Could not fetch data! Product</p>}

      <ul className="product-list">
        {data.map((product) => {
          return (
            <li className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}> /* Secret sauce: Link naar productpagina */ 
                <div>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title.slice(0, 25)}</h3>
                </div>
                <span>€ {product.price}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
