import React from 'react';
import { createTypographyStyle } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';
import { Grid } from '@material-ui/core';

export const Danger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = createTypographyStyle();
  return <Grid className={classes.defaultFontStyle + ' ' + classes.dangerText}>{children}</Grid>;
};
