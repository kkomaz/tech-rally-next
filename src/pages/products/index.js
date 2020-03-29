import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderNav from 'components/HeaderNav';
import { Button } from 'reactstrap';
import Link from 'next/link';
import axios from 'axios';
import config from 'config';

function ProductsPage(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(`${config.API_URL}/api/products`);
    setProducts(data.products);
  };

  useEffect(() => {
    if (!props.products) {
      fetchProducts();
    } else {
      setProducts(props.products);
    }
  }, []);

  return (
    <div>
      <HeaderNav />
      <Link href="/">
        <Button color="link">Go Back Home</Button>
      </Link>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
};

ProductsPage.getInitialProps = async ({ req }) => {
  const isServer = !!req;

  if (isServer) {
    const { data } = await axios.get(`${config.API_URL}/api/products`);
    return { products: data.products };
  }

  return {};
};

// export const getServerSideProps = async () => {
//   const { data } = await axios.get(`${config.API_URL}/api/products`);

//   console.log(data);

//   return {
//     props: {
//       products: data.products,
//     },
//   };
// };

export default ProductsPage;
