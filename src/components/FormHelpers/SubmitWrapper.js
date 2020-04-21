import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import styles from './_submit-wrapper.module.scss';

function SubmitWrapper (props) {
  const { type, onCancel, isSubmitting, onDelete } = props;

  const { isMdLayout } = useResponsiveLayout();

  // if medium layout or larger
  if (isMdLayout) {
    return (
      <div className={styles.submitWrapper}>
        {
          type === 'edit' &&
          <Button className="mr-one" color="danger" onClick={onDelete}>
            Delete
          </Button>
        }
        <Button
          className="mr-one"
          color="secondary"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button color="primary" disabled={isSubmitting} type="submit">
          {type === 'create' ? 'Submit' : 'Edit'}
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.submitWrapperMobile}>
      {
        type === 'edit' &&
        <Button className="mb-half" color="danger" onClick={onDelete}>
          Delete
        </Button>
      }
      <Button
        color="primary"
        className="mb-half"
        size="lg"
        disabled={isSubmitting}
        type="submit"
      >
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
  onDelete: () => {},
};

SubmitWrapper.propTypes = {
  type: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitWrapper;
