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
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import styles from './styles.module.scss';

function SignInPage() {
  const onSubmit = (values, options) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      options.setSubmitting(false);
    }, 400);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  return (
    <Row>
      <Col
        lg={{ size: 6, offset: 3 }}
        sm={{ size: 8, offset: 2 }}
      >
        <Card style={{ maxWidth: '800px' }} body>
          <CardTitle className="text-center">Log in to Tech Rally Admin</CardTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={validate}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({ errors, isSubmitting }) => {
              return (
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email Address</Label>
                    <Input
                      tag={Field}
                      name="email"
                      type="email"
                      component="input"
                      invalid={!!errors.email}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input tag={Field} name="password" type="password" component="input" />
                  </FormGroup>
                  <FormGroup>
                    <Button className={styles.submit} color="primary" type="submit" disabled={isSubmitting}>
                      Sign In
                    </Button>
                  </FormGroup>
                </Form>
              );
            }}
          </Formik>
          <Button color="link">
            Forgot password?
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default SignInPage;
