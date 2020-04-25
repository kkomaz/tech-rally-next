import PropTypes from 'prop-types';
import { BlogForm } from 'components/Blog';
import { useRouter } from 'next/router'
import auth0 from 'utils/auth0';

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

BlogsCreatePage.propTypes = {
  token: PropTypes.string.isRequired,
}

export const getServerSideProps = async ({ req, res  }) => {
  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken({});

  return {
    props: {
      token: accessToken,
    }
  }
}

export default BlogsCreatePage