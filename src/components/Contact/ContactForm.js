import React from 'react';
import { Card, FormFeedback, FormGroup, Input, Label, Button } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import classNames from 'classnames/bind';
import { FaLocationArrow } from 'react-icons/fa';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';

import styles from './_contact-form.module.scss';

const cx = classNames.bind(styles);

function ContactForm () {
  const { isMdLayout } = useResponsiveLayout();

  const validate = (values) => {
    const errors = {};

    if (!values.message) {
      errors.message = 'Required';
    }

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const onSubmit = (values, options) => {
    console.log(values);
  };

  return (
    <Card
      className={cx({
        card: isMdLayout,
      })}
    >
      <div className={styles.titleWrapper}>
        <img
          className="mb-one"
          alt="img"
          src="https://tech-rally-test-bucket.s3.us-east-2.amazonaws.com/IMG_6133.jpg"
          style={{ maxWidth: '500px' }}
        />
        <p className={styles.title}>I love to hear from you!</p>
        <p className={styles.title}>Please drop me a line if you have any questions</p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ errors, isSubmitting, touched }) => {
          return (
            <Form
              className={cx({
                formSmall: !isMdLayout
              })}
            >
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  tag={Field}
                  name="name"
                  type="text"
                  component="input"
                  invalid={!!errors.name && touched.name}
                />
                {errors.name && touched.name && (
                  <FormFeedback>{errors.name}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  tag={Field}
                  name="email"
                  type="text"
                  component="input"
                  invalid={!!errors.email  && touched.email}
                />
                {errors.email && touched.email && (
                  <FormFeedback>{errors.email}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Message</Label>
                <Input
                  tag={Field}
                  name="message"
                  type="text"
                  component="textarea"
                  invalid={!!errors.message && touched.message}
                  rows={10}
                />
                <FormFeedback>{errors.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Button
                  className={cx({
                    submit: true,
                  })}
                  color="primary"
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <FaLocationArrow className="mr-half" />
                  Send Message
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}

export default ContactForm;
