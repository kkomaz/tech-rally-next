import React from 'react';
import { FaYoutube, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import classNames from 'classnames/bind';
import styles from './_socials.module.scss';

const cx = classNames.bind(styles);

function Socials() {
  return (
    <div className={styles.socials}>
      <FaYoutube
        className={cx({
          'mr-one': true,
          youtube: true,
        })}
        size="4em" 
      />
      <FaTwitterSquare
        className={cx({
          'mr-one': true,
          twitter: true,
        })}
        size="4em" 
      />
      <FaInstagram
        className={cx({
          instagram: true,
        })}
        size="4em"
      />
    </div>
  )
}

export default Socials;
