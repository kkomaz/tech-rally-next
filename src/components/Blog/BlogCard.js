import React from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import Link from 'next/link';
import axios from 'axios';
import classNames from 'classnames/bind';
import config from 'utils/config';
import { useRouter } from 'next/router'
import styles from './_blog-card.module.scss';
// https://stackoverflow.com/questions/11426275/how-can-i-show-dots-in-a-span-with-hidden-overflow (CSS Styling)

const cx = classNames.bind(styles);

function BlogCard(props) {
  const { blog: { _id, title, image_url, key } } = props;
  const router = useRouter()

  const onDelete = async () => {
    try {
      await axios.delete(`${config.API_URL}/api/blogs/${_id}/delete`, {
        data: {
          key,
        },
      });
      router.push('/blogs');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Card
      className={cx({
        cardStyle: true,
        'blog-card': true
      })}
    >
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>Common mistakes too many people make</CardSubtitle>
        <div className="mt-half">
          <Link href={`blogs/${_id}`}>
            <Button color="primary" className="mr-half">
              Show
            </Button>
          </Link>
          <Link href={`blogs/${_id}/edit`}>
            <Button className="mr-half">
              Edit
            </Button>
          </Link>
          <Button color="danger" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </CardBody>
      <CardImg src={image_url} height="200px" />
    </Card>
  )
}

export default BlogCard;
