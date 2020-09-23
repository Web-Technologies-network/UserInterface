import React from 'react';
import { createTypographyStyle } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';

export default function Primary(props: { children: React.ReactNode }): React.ReactElement {
  const { children } = props;
  const classes = createTypographyStyle();
  return <div className={classes.defaultFontStyle + ' ' + classes.primaryText}>{children}</div>;
}
