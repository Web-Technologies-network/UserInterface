import React from 'react';
import PropTypes from 'prop-types';
import { typographyClasses as classes } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';

export default function Info(props: { children: any }) {
  const { children } = props;
  return <div className={classes.defaultFontStyle + ' ' + classes.infoText}>{children}</div>;
}

Info.propTypes = {
  children: PropTypes.node,
};
