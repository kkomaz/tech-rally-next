import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';
import config from 'utils/config'
import { Row, Col, Button } from 'reactstrap';
import { BlogCard } from 'components/Blog';
import Layout from 'components/Layout';
import { useFetchUser } from 'utils/user';
import Paging from 'components/Paging';
import styles from './index.module.scss';

function BlogsPage(props) {
  const { blogs } = props;
  const { user } = useFetchUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);

  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
            currentBlogs.map((blog) => {
              return (
                <Col className="mb-one" xs={12} md={6} lg={4} key={blog._id}>
                  <BlogCard blog={blog} user={user} />
                </Col>
              )
            })
          }

          <Paging
            className={styles.pagingWrapper}
            perPage={blogsPerPage}
            length={blogs.length}
            paginate={paginate}
          />
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