import React from 'react';
import PropTypes from 'prop-types';
import { createTypographyStyle } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';

export default function Info(props: { children: any }) {
  const { children } = props;
  const classes = createTypographyStyle();
  return <div className={classes.defaultFontStyle + ' ' + classes.infoText}>{children}</div>;
}

Info.propTypes = {
  children: PropTypes.node,
};
