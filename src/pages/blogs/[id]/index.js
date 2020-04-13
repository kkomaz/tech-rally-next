import axios from 'axios';
import PropTypes from 'prop-types';
import config from 'utils/config';
import { Button, Row, Col } from 'reactstrap';
import { QuillWrapper } from 'components/FormHelpers';
import Socials from 'components/Socials';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import { FaFacebook } from "react-icons/fa";

function BlogsDetailPage (props) {
  const { blog = {} } = props;

  const { isMdLayout } = useResponsiveLayout();

  return (
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
              <p style={{ marginBottom: 0 }}>Jun 7, 2018</p>
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
          <div className="facebook-group">
            <img
              className="logo mb-one"
              src="https://tech-rally-test-bucket.s3.us-east-2.amazonaws.com/Profile_Picture.png"
              alt="logo"
              height="75"
              width="75"
            />
            <p>Looking to join a community of aspiring developers?</p>
            <p>
              Regardless of what level
            </p>
            <p className="facebook-group-text-detail">
              The TechRally Software Dev Lounge is the perfect
              place to ask questions and collaborate.
            </p>
          </div>
          <Button style={{ width: '100%' }} size="lg" color="primary" onClick={() => window.open('https://www.facebook.com/groups/811715242683243')}>
            Join Now!
            <FaFacebook className="ml-quarter mb-quarter" />
          </Button>
          
          <hr className="divider" />

          { isMdLayout && <Socials hideFb size="3.5em" /> }
        </Col>
      </Row>
      <style jsx>{`
        .facebook-group-text-detail {
          line-height: 2em;
        }
        .facebook-group {
          text-align: center;
        }
        .logo {
          border-radius: 100%;
        }
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
  );
}

BlogsDetailPage.propTypes = {
  blog: PropTypes.object.isRequired,
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs`);

  const paths = data.map((blog) => ({
    params: { id: blog._id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs/${params.id}`);

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogsDetailPage;
