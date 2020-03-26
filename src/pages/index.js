import HeaderNav from 'components/HeaderNav';
import { Button } from 'reactstrap';

const Index = () => {
  return (
    <div>
      <HeaderNav />
      <Button color="primary">primary</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="link">link</Button>

      Hello Next.js
    </div>
  )
}

export default Index;
