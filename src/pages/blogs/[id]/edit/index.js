import { BlogForm } from 'components/Blog';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import config from 'utils/config';
import axios from 'axios';

function BlogsIdEditPage(props) {
  const { blog: { _id, title, sub_title, video_url, image_url, description } } = props;
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

export const getServerSideProps = async ({ params }) => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs/${params.id}`);

  return {
    props: {
      blog: data,
    }
  }
}

export default BlogsIdEditPage