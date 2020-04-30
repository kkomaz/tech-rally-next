import Layout from 'components/Layout';
import { useFetchUser } from 'utils/user';
import { Row, Col } from 'reactstrap';
import CommunityBanner from 'components/CommunityBanner';
import classNames from 'classnames/bind';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function About() {
  const { user } = useFetchUser();
  const { isMdLayout } = useResponsiveLayout();

  return (
    <Layout user={user}>
      <div className="container">
        <Row>
          <Col xs={12} md={9}>
            <div
              className={cx({
                about: isMdLayout,
                aboutSmall: !isMdLayout,
              })}
            >
              <img
                className={cx({
                  imageContainer: isMdLayout,
                  imageContainerSmall: !isMdLayout,
                })}
                alt="img"
                src="https://tech-rally-test-bucket.s3.us-east-2.amazonaws.com/headshot.png"
              />
              <div className={styles.aboutInfo}>
                <h1>
                  <span role="img" aria-label="wave">👋🏻</span> Hey I&apos;m Alex
                </h1>
                <div className="mt-one">
                  <p className={styles.aboutText}>
                    Welcome to the <span className={styles.highlight}>TechRally</span> page!
                  </p>
                  <p className={styles.aboutText}>
                    I am currently a <span className={styles.highlight}>Senior Software Engineer</span> based in New York City.  I took a
                    non traditional route of learning how to code by attending a coding bootcamp
                    called Flatiron School.
                  </p>
                  <p className={styles.aboutText}>
                    I create content on my Youtube channel with the goal to help aspiring developers break into the industry.  As
                    someone who has been in the shoes of starting all over again, I hope to provide some positive words of encouragement
                    to keep pursuing your goals!
                  </p>
                  <p className={styles.aboutText}>
                    If you have ANY questions, I am available on all platforms!
                  </p>

                  <p className={styles.aboutText}>-Alex Lee</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <CommunityBanner />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default About;
