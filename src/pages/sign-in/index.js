import { Card, CardTitle } from 'reactstrap';

function SignInPage () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        style={{ maxWidth: '800px' }}
        className="text-center"
        body
        outline
        color="primary"
      >
        <CardTitle>Log in to Tech Rally Admin</CardTitle>
      </Card>
    </div>
  );
}

export default SignInPage;
