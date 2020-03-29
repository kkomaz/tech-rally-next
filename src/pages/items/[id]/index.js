import axios from 'axios';
import config from 'utils/config';

function ItemPage(props) {
  const { product } = props;

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${config.API_URL}/api/products`);

  const paths = data.products.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`${config.API_URL}/api/products/${params.id}`);

  return {
    props: {
      product: data,
    },
  };
};

export default ItemPage;
