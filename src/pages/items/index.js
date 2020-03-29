import HeaderNav from 'components/HeaderNav';
import { Button } from 'reactstrap';
import Link from 'next/link';
import axios from 'axios';
import config from 'utils/config';

function ItemsPage (props) {
  const { products } = props;

  return (
    <div>
      <HeaderNav />
      <Link href="/">
        <Button color="link">Go Back Home</Button>
      </Link>
      <ul>
        {products.map((product) => (
          <Link href={`/items/${product._id}`}>
            <li>
              <Button color="link">{product.name}</Button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(`${config.API_URL}/api/products`);

  return {
    props: {
      products: data.products,
    },
  };
};

export default ItemsPage;
