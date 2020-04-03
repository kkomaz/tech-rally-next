import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  FormText,
} from 'reactstrap';
import { SubmitWrapper } from 'components/Form';
import { Formik, Field, Form } from 'formik';

function BlogForm(props) {
  return (
    <Row>
      <Col lg={{ size: 6, offset: 3 }} sm={{ size: 8, offset: 2 }}>
        <Card style={{ maxWidth: '800px' }} body>
          <CardTitle className="text-center">Create Blog</CardTitle>
          <Formik>
            {({ errors, isSubmitting }) => {
              return (
                <Form>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                      tag={Field}
                      name="title"
                      type="text"
                      component="input"
                      invalid={!!errors.title}
                    />
                    <FormFeedback>{errors.title}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="video_url">Video URL</Label>
                    <Input
                      tag={Field}
                      name="video_url"
                      type="text"
                      component="input"
                      invalid={!!errors.video_url}
                    />
                    <FormFeedback>{errors.video_url}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleFile">Image File</Label>
                    <Input type="file" name="file" tag={Field} />
                    <FormText color="muted">Upload a jpeg or png file</FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      tag={Field}
                      name="description"
                      type="text"
                      component="textarea"
                      invalid={!!errors.description}
                    />
                    <FormFeedback>{errors.description}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <SubmitWrapper />
                  </FormGroup>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Col>
    </Row>
  );
}

export default BlogForm;
