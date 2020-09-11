import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import { typographyClasses as classes} from '../../../assets/jss/material-dashboard-react/components/typographyStyle';

export default function Muted(props: { children: any }) {
  const { children } = props;
  return <div className={classes.defaultFontStyle + ' ' + classes.mutedText}>{children}</div>;
}

Muted.propTypes = {
  children: PropTypes.node,
};
