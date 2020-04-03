import React from 'react';
import {
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
import { SubmitWrapper } from 'components/FormHelpers';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import config from 'utils/config';

// https://codesandbox.io/s/lkkjpr5r7

function BlogForm(props) {
  const onSubmit = (values, options) => {
    const { title, video_url, file, description } = values;
    const formData = new FormData();

    formData.append("image", file);
    formData.append("title", title);
    formData.append("video_url", video_url);
    formData.append("description", description);

    return axios({
      method: 'post',
      url: `${config.API_URL}/api/blogs/create`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(() => {
      options.setSubmitting(false);
    });
  };

  const onCancel = () => {
    console.log('canceling');
  }

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }
  //   return errors;
  // };

  return (
    <Row>
      <Col lg={{ size: 6, offset: 3 }} sm={{ size: 8, offset: 2 }}>
        <Card style={{ maxWidth: '800px' }} body>
          <CardTitle className="text-center">Create Blog</CardTitle>
          <Formik
            initialValues={{ title: '', video_url: '', file: '' }}
            // validate={validate}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({ errors, isSubmitting, setFieldValue }) => {
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
                    <FormFeedback>{errors.email}</FormFeedback>
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
                    <Label for="file">Image File</Label>
                    <Input id="file" name="file" type="file" onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }} />
                    <FormText color="muted">Upload a jpeg or png file</FormText>
                  </FormGroup>
                  <FormGroup>
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
                    <SubmitWrapper isSubmitting={isSubmitting} onCancel={onCancel} />
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
