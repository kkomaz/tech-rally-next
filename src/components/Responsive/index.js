/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} minWidth={0} maxWidth={767} />;
const Desktop = props => <Responsive {...props} minWidth={768} />;

export {
  Mobile,
  Desktop,
}
