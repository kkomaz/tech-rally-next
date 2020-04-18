import { BlogForm } from 'components/Blog';
import { useRouter } from 'next/router'
import axios from 'axios';
import auth0 from 'utils/auth0';
import config from 'utils/config';

function BlogsCreatePage(props) {
  const { token } = props;
  const router = useRouter()

  const onSubmitSuccess = () => {
    router.push('/blogs');
  }

  return (
    <div className="container">
      <BlogForm onSubmitSuccess={onSubmitSuccess} token={token} />
    </div>
  )
}

export const getServerSideProps = async ({ params, req, res  }) => {
  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken({
    scopes: ['create:blogs']
  });

  return {
    props: {
      token: accessToken,
    }
  }
}

export default BlogsCreatePage