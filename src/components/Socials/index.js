import React from 'react';
import PropTypes from 'prop-types';
import { FaYoutube, FaTwitterSquare, FaInstagram, FaFacebook } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './_socials.module.scss';

const cx = classNames.bind(styles);

function Socials (props) {
  const { hideYT, hideTwitter, hideIg, hideFb, color, size } = props;

  return (
    <div className={styles.socials}>
      {
        !hideYT &&
        <a
          href="https://www.youtube.com/c/techrally"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color,
          }}
        >
          <FaYoutube
            className={cx({
              'mr-one': true,
              youtube: true,
            })}
            size={size}
          />
        </a>
      }
      {
        !hideTwitter &&
        <a
          href="https://twitter.com/TheTechRally"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color,
          }}
        >
          <FaTwitterSquare
            className={cx({
              'mr-one': true,
              twitter: true,
            })}
            size={size}
          />
        </a>
      }
      {
        !hideIg &&
        <a
          href="https://www.instagram.com/thetechrally"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color,
          }}
        >
          <FaInstagram
            className={cx({
              instagram: true,
              'mr-one': true,
            })}
            size={size}
          />
        </a>
      }
      {
        !hideFb &&
        <a
          href="http://facebook.com/groups/softwaredevlounge"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color,
          }}
        >
          <FaFacebook
            className={cx({
              facebook: true,
            })}
            size={size}
          />
        </a>
      }
    </div>
  );
}

Socials.propTypes = {
  hideIg: PropTypes.bool,
  hideYT: PropTypes.bool,
  hideFb: PropTypes.bool,
  hideTwitter: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
}

Socials.defaultProps = {
  hideYT: false,
  hideIg: false,
  hideTwitter: false,
  hideFb: false,
  color: '#8860D0',
  size: "3em",
}

export default Socials;
