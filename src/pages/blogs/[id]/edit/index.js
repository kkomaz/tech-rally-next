import { BlogForm } from 'components/Blog';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import config from 'utils/config';
import auth0 from 'utils/auth0';
import axios from 'axios';
import Layout from 'components/Layout';
import { useFetchUser } from 'utils/user';

function BlogsIdEditPage (props) {
  const {
    blog: { _id, title, sub_title, video_url, image_url, description, image_key },
    token,
  } = props;
  const { user } = useFetchUser();
  const router = useRouter();

  const onSubmitSuccess = () => {
    router.push('/blogs');
  };

  return (
    <Layout user={user}>
      <div className="container">
        <BlogForm
          onSubmitSuccess={onSubmitSuccess}
          initialValues={{
            title,
            sub_title,
            video_url,
            image_url,
          }}
          description={description}
          imageKey={image_key}
          id={_id}
          type="edit"
          token={token}
        />
      </div>
    </Layout>
  );
}

BlogsIdEditPage.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
    video_url: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_key: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

export const getServerSideProps = async ({ params, req, res }) => {
  const session = await auth0.getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    });
    res.end();
  }

  const { data } = await axios.get(`${config.API_URL}/api/blogs/${params.id}`);

  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  return {
    props: {
      blog: data,
      token: accessToken,
    },
  };
};

export default BlogsIdEditPage;
