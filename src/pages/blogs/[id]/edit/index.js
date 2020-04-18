import { BlogForm } from 'components/Blog';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import config from 'utils/config';
import auth0 from 'utils/auth0';
import axios from 'axios';

function BlogsIdEditPage(props) {
  const { blog: { _id, title, sub_title, video_url, image_url, description }, token } = props;
  const router = useRouter()

  const onSubmitSuccess = () => {
    router.push('/blogs');
  }

  return (
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
        id={_id}
        type="edit"
        token={token}
      />
    </div>
  )
}

BlogsIdEditPage.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
    video_url: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export const getServerSideProps = async ({ params, req, res  }) => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs/${params.id}`);
  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  return {  
    props: {
      blog: data,
      token: accessToken,
    }
  }
}

export default BlogsIdEditPage