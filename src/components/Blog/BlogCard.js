import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
// https://stackoverflow.com/questions/11426275/how-can-i-show-dots-in-a-span-with-hidden-overflow (CSS Styling)

function BlogCard(props) {
  const { blog: { title, image_url } } = props;

  return (
    <Card className="blog-card">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>Common mistakes too many people make</CardSubtitle>
      </CardBody>
      <CardImg src={image_url} height="200px" />
    </Card>
  )
}

export default BlogCard;
