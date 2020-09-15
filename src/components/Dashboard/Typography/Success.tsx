import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import { createTypographyStyle } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';

export default function Success(props: { children: any }) {
  const { children } = props;
  const { defaultFontStyle, successText } = createTypographyStyle();
  return <div className={defaultFontStyle + ' ' + successText}>{children}</div>;
}

Success.propTypes = {
  children: PropTypes.node,
};
