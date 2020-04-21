import { useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from 'utils/config';
import { Row, Col } from 'reactstrap';
import { QuillWrapper } from 'components/FormHelpers';
import formatDate from 'utils/date/formatDate';
import Layout from 'components/Layout';
import { useFetchUser } from 'utils/user';
import CommunityBanner from 'components/CommunityBanner';

function BlogsDetailPage (props) {
  const { blog = {} } = props;
  const { user } = useFetchUser();

  const date = useMemo(() => {
    return formatDate(blog.created_at);
  }, [blog.created_at]);

  return (
    <Layout user={user}>
      <div className="container">
        <Row>
          <Col xs={12} md={8}>
            <h1>{blog.title}</h1>
            <h4>{blog.sub_title}</h4>
            <div className="mb-one profile-detail-wrapper">
              <img
                className="profile-image"
                src="https://miro.medium.com/fit/c/48/48/0*74rUDAu4TpM5U-mo."
                alt="profile"
              />
              <div className="ml-one blog-author">
                <a
                  href="https://twitter.com/TheTechRally"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alexander Lee
                </a>
                <p style={{ marginBottom: 0 }}>{date}</p>
              </div>
            </div>
            <div className="iframeWrapper">
              <iframe
                className="iframe"
                title="blog-video"
                src={`https://www.youtube.com/embed/${blog.video_url}`}
                frameBorder="0"
                allowFullScreen=""
              />
            </div>
            <div>
              <QuillWrapper readOnly value={blog.description} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <CommunityBanner />
          </Col>
        </Row>
        <style jsx>{`
          .blog-author {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .profile-detail-wrapper {
            display: flex;
          }
          .profile-image {
            border-radius: 50%;
          }
          .iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .iframeWrapper {
            padding-bottom: 56.25%;
            position: relative;
            height: 0;
            overflow: hidden;
            margin-bottom: 2rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}

BlogsDetailPage.propTypes = {
  blog: PropTypes.object.isRequired,
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs`);

  const paths = data.map((blog) => ({
    params: {
      id: `${blog.title
        .toLowerCase()
        .split(' ')
        .join('-')}-${blog._id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const [id] = params.id.split('-').slice(-1);
  const { data } = await axios.get(`${config.API_URL}/api/blogs/${id}`);

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogsDetailPage;

