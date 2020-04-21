import PropTypes from 'prop-types';
import axios from 'axios';
import config from 'utils/config'
import { Row, Col, Button, Card, CardBody } from 'reactstrap';
import Link from 'next/link';
import classNames from 'classnames/bind';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import { BlogCard } from 'components/Blog';
import Layout from 'components/Layout';
import { useFetchUser } from '../utils/user';

import landPageSvg from '../assets/svg/landing-page-section.svg';
import styles from './_index.module.scss';

const cx = classNames.bind(styles);

const Index = (props) => {
  const { isMdLayout } = useResponsiveLayout();
  const { blogs } = props;
   const { user } = useFetchUser();

  return (
    <Layout user={user}>
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
            <Col xs={12}>
              <div>
                <h1 className={styles.contactText}>
                  Contact
                </h1>
                <hr className="divider divider--xsmall" />
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
    </Layout>
  );
};

Index.propTypes = {
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

export default Index;
