import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { useUser } from 'utils/user';
import { useRouter } from 'next/router';
import formatDate from 'utils/date/formatDate';
import styles from './_blog-card.module.scss';

const cx = classNames.bind(styles);

function BlogCard (props) {
  const {
    blog: { _id, title, image_url, sub_title, created_at },
  } = props;

  const router = useRouter();
  const { user } = useUser();

  const date = useMemo(() => {
    return formatDate(created_at);
  }, [created_at]);

  const onCardClick = () => {
    if (!user) {
      router.push(
        `/blogs/[${_id}]`,
        `/blogs/${title
          .toLowerCase()
          .split(' ')
          .join('-')}-${_id}`
      );
    }
  };

  return (
    <Card
      className={cx({
        cardStyle: true,
        'blog-card': true,
      })}
      onClick={onCardClick}
    >
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{sub_title}</CardSubtitle>
        <h6 className="mt-half">{date}</h6>
        {user && (
          <div className="mt-half">
            <Link
              href={`blogs/[${_id}]`}
              as={`blogs/${title
                .toLowerCase()
                .split(' ')
                .join('-')}-${_id}`}
            >
              <Button color="primary" className="mr-half">
                Show
              </Button>
            </Link>
            <Link href={`blogs/${_id}/edit`}>
              <Button className="mr-half">Edit</Button>
            </Link>
          </div>
        )}
      </CardBody>
      <CardImg src={image_url} height="200px" />
    </Card>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogCard;
