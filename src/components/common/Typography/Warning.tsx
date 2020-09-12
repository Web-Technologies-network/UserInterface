import React from 'react';
import { typographyClasses as classes } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';
import { Grid } from '@material-ui/core';

export const Warning: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Grid className={classes.defaultFontStyle + ' ' + classes.warningText}>{children}</Grid>
);
