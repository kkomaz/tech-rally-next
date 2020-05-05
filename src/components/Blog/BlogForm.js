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
import { useRouter } from 'next/router'

// TODO: Add validations
function BlogForm (props) {
  const [description, setDescription] = useState(() => props.description || '');
  const { initialValues, type, id, token, imageKey } = props;
  const router = useRouter()

  const handleFileSubmit = (method, url, formData, options) => {
    return axios({
      method,
      url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` 
      },
    }).then(() => {
      options.setSubmitting(false);
      props.onSubmitSuccess();
    });
  };

  const onDelete = async () => {
    try {
      await axios.delete(`${config.API_URL}/api/blogs/${id}/delete`, {
        params: {
          image_key: imageKey,
        },
        headers: {
        'Content-Type': 'multipar t/form-data',
        'Authorization': `Bearer ${token}` 
        },
      });
      router.push('/blogs');
    } catch (e) {
      console.log(e.message);
    }
  }

  const onSubmit = (values, options) => {
    const { title, video_url, file, sub_title } = values;
    let formData;
    let request;

    if (file) {
      formData = new FormData();

      formData.append('image', file);
      formData.append('title', title);
      formData.append('sub_title', sub_title);
      formData.append('video_url', video_url);
      formData.append('description', description);
    }

    if (type === 'create') {
      request = handleFileSubmit(
        'post',
        `${config.API_URL}/api/blogs/create`,
        formData,
        options
      );
    } else {
      request = file
        ? handleFileSubmit('put', `${config.API_URL}/api/blogs/${id}/update`, formData, options)
        : axios.put(`${config.API_URL}/api/blogs/${id}/update`, { ...values, description }, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(() => {
          options.setSubmitting(false);
          props.onSubmitSuccess();
        });
    }

    return request;
  };

  const onCancel = (resetForm) => {
    resetForm();
  };

  return (
    <Row>
      <Col lg={{ size: 6, offset: 3 }} sm={{ size: 8, offset: 2 }}>
        <Card style={{ maxWidth: '800px' }} body>
          <CardTitle className="text-center">
            {type === 'create' ? 'Create Blog' : 'Edit Blog'}
          </CardTitle>
          <Formik
            initialValues={initialValues}
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
                    <Label for="title">Subtitle</Label>
                    <Input
                      tag={Field}
                      name="sub_title"
                      type="text"
                      component="input"
                      invalid={!!errors.sub_title}
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
                      onDelete={onDelete}
                      onCancel={() => onCancel(resetForm)}
                      type={type}
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
  description: PropTypes.string,
  id: PropTypes.string,
  initialValues: PropTypes.object,
  onSubmitSuccess: PropTypes.func,
  token: PropTypes.string.isRequired,
  type: PropTypes.string,
  imageKey: PropTypes.string,
};

BlogForm.defaultProps = {
  onSubmitSuccess: () => {},
  initialValues: {
    title: '',
    sub_title: '',
    video_url: '',
    file: '',
  },
  description: '',
  id: '',
  type: 'create',
  imageKey: '',
};

export default BlogForm;
