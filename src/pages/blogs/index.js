import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';
import config from 'utils/config'
import { Row, Col, Button } from 'reactstrap';
import { BlogCard } from 'components/Blog';
import Layout from 'components/Layout';
import { useFetchUser } from 'utils/user';

function BlogsPage(props) {
  const { blogs } = props;
  const { user } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="container">
        {
          user &&
          <Link href="/blogs/create">
            <Button color="primary" className="mb-one">
              Create Blog
            </Button>
          </Link>
        }
        <Row>
          {
            blogs.map((blog) => {
              return (
                <Col className="mb-one" xs={12} md={6} lg={4} key={blog._id}>
                  <BlogCard blog={blog} user={user} />
                </Col>
              )
            })
          }
        </Row>
      </div>
    </Layout>
  )
}

BlogsPage.propTypes = {
  blogs: PropTypes.array.isRequired,
}

export const getStaticProps = async () => {
  const { data } = await axios.get(`${config.API_URL}/api/blogs`);

  return {
    props: {
      blogs: data,
    }
  }
}

export default BlogsPage