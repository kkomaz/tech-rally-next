import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';
import config from 'utils/config'
import { Row, Col, Button } from 'reactstrap';
import { BlogCard } from 'components/Blog';

function BlogsPage(props) {
  const { blogs } = props;

  return (
    <div className="container">
      <Link href="/blogs/create">
        <Button color="primary" className="mb-one">
          Create Blog
        </Button>
      </Link>
      <Row>
        {
          blogs.map((blog) => {
            return (
              <Col className="mb-one" xs={12} md={6} lg={4} key={blog._id}>
                <BlogCard blog={blog} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

BlogsPage.propTypes = {
  blogs: PropTypes.array.isRequired,
}

export const getStaticProps = async () => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs`, {
    params: {
      limit: 3,
    }
  });

  return {
    props: {
      blogs: data,
    }
  }
}

export default BlogsPage