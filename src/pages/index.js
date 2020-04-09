import { useEffect, useState } from 'react';
import axios from 'axios';
import config from 'utils/config'
import { Row, Col, Button, Card, CardBody } from 'reactstrap';
import Link from 'next/link';
import classNames from 'classnames/bind';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import { BlogCard } from 'components/Blog';
import landPageSvg from '../assets/svg/landing-page-section.svg';
import styles from './_index.module.scss';
// https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp
// https://www.webdesignerdepot.com/2017/01/50-creative-card-ui-designs/

const cx = classNames.bind(styles);

const Index = () => {
  const { isMdLayout } = useResponsiveLayout();
  const [blogs, setBlogs] = useState(() => []);
  
  const fetchBlogs = async() => {
    const result = await axios.get(`${config.API_URL}/api/blogs`, {
      params: {
        limit: 3,
      }
    });
    setBlogs(result.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className={styles.sectionPage}>
        <div className="container">
          <Row>
            <Col xs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }}>
              <div>
                <h1 className={styles.sectionMainText}>
                  A one stop shop to learning the newest web technologies.
                </h1>
                <h4
                  className={cx({
                    sectionSecondaryText: true,
                    'mb-one': true,
                  })}
                >
                  Learning how to code has never been easier.
                </h4>
              </div>
              {
                isMdLayout ?
                <Button color="primary" size="lg">
                  Browse My Courses
                </Button> :
                <div className={styles.mobileSectionBrowse}>
                  <Button color="primary">Browse My Courses</Button>
                </div>

              }
            </Col>
            <Col xs={{ size: 12, order: 1 }} md={{ size: 6, order: 2 }}>
              <img className={styles.sectionImage} alt="img" src={landPageSvg} />
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.blogSection}>
        <Card className={styles.blogCard}>
          <CardBody>
            {
              isMdLayout ? (
                <div>
                  <h1
                    className={cx({
                      blogTitle: true,
                      bold: true,
                    })}
                  >
                    <span role="img" aria-label="book">📚</span> My Blogs <span role="img" aria-label="book">📚</span>
                  </h1>
                  <Link href="/blogs">
                    <Button color="link" className={styles.showAllButton}>
                      Show All Blogs
                    </Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h4
                    className={cx({
                      blogTitle: true,
                      bold: true,
                    })}
                  >
                    <span role="img" aria-label="book">📚</span> My Blogs <span role="img" aria-label="book">📚</span>
                  </h4>
                  <Link href="/blogs">
                    <Button color="link" className={styles.showAllButton}>
                      Show All Blogs
                    </Button>
                  </Link>
                </div>
              )
            }
          </CardBody>
        </Card>
        <div className="container">
          <Row>
            {
              blogs.map((blog) => {
                return (
                  <Col xs={12} md={6} lg={4} className="mb-one" key={blog._id}>
                    <BlogCard blog={blog} />
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </div>
      <div className={styles.sectionPage}>
        <div className="container">
          <Row>
            <Col xs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }}>
              <div>
                <h1 className={styles.sectionMainText}>
                  A one stop shop to learning the newest web technologies.
                </h1>
                <h4
                  className={cx({
                    sectionSecondaryText: true,
                    'mb-one': true,
                  })}
                >
                  Learning how to code has never been easier.
                </h4>
              </div>
              {
                isMdLayout ?
                <Button color="primary" size="lg">
                  Browse My Courses
                </Button> :
                <div className={styles.mobileSectionBrowse}>
                  <Button color="primary">Browse My Courses</Button>
                </div>

              }
            </Col>
            <Col xs={{ size: 12, order: 1 }} md={{ size: 6, order: 2 }}>
              <img className={styles.sectionImage} alt="img" src={landPageSvg} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps ({ req, res }) {
  const isServer = !!req;

  if (isServer) {
    console.log('server');
  } else {
    console.log('client');
  }

  return {
    props: {
      data: {},
    },
  };
}
export default Index;
