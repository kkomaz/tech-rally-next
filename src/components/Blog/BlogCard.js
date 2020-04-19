import React, { useMemo } from 'react';
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
import { useUser } from 'utils/user';
import { useRouter } from 'next/router'
import formatDate from 'utils/date/formatDate';

import styles from './_blog-card.module.scss';
// https://stackoverflow.com/questions/11426275/how-can-i-show-dots-in-a-span-with-hidden-overflow (CSS Styling)

const cx = classNames.bind(styles);

function BlogCard(props) {
  const { blog: { _id, title, image_url, key, sub_title, created_at } } = props;
  const router = useRouter()
  const { user } = useUser();

  console.log(user);

   const date = useMemo(() => {
     return formatDate(created_at)
   }, [created_at]);

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

  const onCardClick = () => {
    if (!user) {
      router.push(`/blogs/[${_id}]`, `/blogs/${title.toLowerCase().split(' ').join('-')}-${_id}`);
    }
  }

  return (
    <Card
      className={cx({
        cardStyle: true,
        'blog-card': true
      })}
      onClick={onCardClick}
    >
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{sub_title}</CardSubtitle>
        <h6 className="mt-half">{date}</h6>
        {
          user &&
          <div className="mt-half">
            <Link href={`blogs/[${_id}]`} as={`blogs/${title.toLowerCase().split(' ').join('-')}-${_id}`}>
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
        }
      </CardBody>
      <CardImg src={image_url} height="200px" />
    </Card>
  )
}

export default BlogCard;
