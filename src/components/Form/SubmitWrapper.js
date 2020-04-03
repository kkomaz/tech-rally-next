import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import styles from './_submit-wrapper.module.scss';

function SubmitWrapper (props) {
  const { type, onCancel, onSubmit, isSubmitting } = props;

  const { isMdLayout } = useResponsiveLayout();

  // if medium layout or larger
  if (isMdLayout) {
    return (
      <div className={styles.submitWrapper}>
        <Button className="mr-one" color="secondary" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button color="primary" onClick={onSubmit} disabled={isSubmitting}>{type === 'create' ? 'Submit' : 'Edit'}</Button>
      </div>
    );
  }

  return (
    <div className={styles.submitWrapperMobile}>
      <Button color="primary" className="mb-half" size="lg" onClick={onSubmit} disabled={isSubmitting}>
        {type === 'create' ? 'Submit' : 'Edit'}
      </Button>
      <Button color="secondary" size="lg" onClick={onCancel} disabled={isSubmitting}>
        Cancel
      </Button>
    </div>
  );
}

SubmitWrapper.defaultProps = {
  type: 'create',
};

SubmitWrapper.propTypes = {
  type: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitWrapper;
