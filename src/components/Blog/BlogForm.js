import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { SubmitWrapper, QuillWrapper } from 'components/FormHelpers';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import config from 'utils/config';

// TODO: Add validations
// TODO: Add edit form initialValues
function BlogForm (props) {
  const [description, setDescription] = useState('');

  const onSubmit = (values, options) => {
    const { title, video_url, file } = values;
    const formData = new FormData();

    formData.append('image', file);
    formData.append('title', title);
    formData.append('video_url', video_url);
    formData.append('description', description);

    return axios({
      method: 'post',
      url: `${config.API_URL}/api/blogs/create`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(() => {
      options.setSubmitting(false);
      props.onSubmitSuccess();
    });
  };

  const onCancel = (resetForm) => {
    resetForm();
  };

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
            {({ errors, isSubmitting, setFieldValue, resetForm }) => {
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
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      onChange={(event) => {
                        setFieldValue('file', event.currentTarget.files[0]);
                      }}
                    />
                    <FormText color="muted">Upload a jpeg or png file</FormText>
                  </FormGroup>
                  <FormGroup>
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <QuillWrapper value={description} onChange={setDescription} />
                    </FormGroup>
                    <SubmitWrapper
                      isSubmitting={isSubmitting}
                      onCancel={() => onCancel(resetForm)}
                    />
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

BlogForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
}

BlogForm.defaultProps = {
  onSubmitSuccess: () => {}
}

export default BlogForm;
