import { Row, Col, Button } from 'reactstrap';
import classNames from 'classnames/bind';
import useResponsive from 'utils/responsive/useResponsive';
import landPageSvg from '../assets/svg/landing-page-section.svg';
import styles from './_index.module.scss';
// https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp

const cx = classNames.bind(styles);

const Index = () => {
  const { isDesktop } = useResponsive();

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
                isDesktop ?
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
        <div className="container">
          <Row>
            <Col sm={12} md={6}>
              <div>
                <h1>
                  A one stop shop to learning the newest web technologies.
                </h1>
                <h4 className={styles.sectionSecondaryText}>
                  Learning how to code has never been easier.
                </h4>
              </div>
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
