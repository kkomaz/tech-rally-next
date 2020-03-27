import HeaderNav from 'components/HeaderNav';
import { Button } from 'reactstrap';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <HeaderNav />
      <Button color="primary">primary</Button>
      <Button color="info">info</Button>
      <Button color="secondary">secondary</Button>
      <Link href="/products">
        <Button color="link">products</Button>
      </Link>
      <Link href="/items">
        <Button color="link">items</Button>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const isServer = !!req;

  if (isServer) {
    console.log('server');
  } else {
    console.log('client');
  }

  return {
    props: {
      data: {},
    },
  };
}
export default Index;
