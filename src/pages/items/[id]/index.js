import axios from 'axios';

function ItemPage({ pageProps }) {
  const { product } = pageProps;

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('http://localhost:3000/api/products');

  const paths = data.products.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`http://localhost:3000/api/products/${params.id}`);

  return {
    props: {
      product: data,
    },
  };
};

export default ItemPage;
