import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import styles from './_submit-wrapper.module.scss';

function SubmitWrapper(props) {
  const { type } = props;

  const { isMdLayout } = useResponsiveLayout();

  // if medium layout or larger
  if (isMdLayout) {
    return (
      <div className={styles.submitWrapper}>
        <Button className="mr-one" color="secondary">
          Cancel
        </Button>
        <Button color="primary">
          {type === 'create' ? 'Submit' : 'Edit' }
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.submitWrapperMobile}>
      <Button color="primary" className="mb-half" size="lg">
        {type === 'create' ? 'Submit' : 'Edit' }
      </Button>
      <Button color="secondary" size="lg">
        Cancel
      </Button>
    </div>
  )
}

SubmitWrapper.defaultProps = {
  type: 'create'
}

SubmitWrapper.propTypes = {
  type: PropTypes.string,
}

export default SubmitWrapper;
