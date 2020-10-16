import React from 'react';
import classNames from 'classnames';
import { createCardClasses } from '../../../assets/jss/material-dashboard-react/components/cardStyle';
import { Grid } from '@material-ui/core';

export const Card: React.FC<{
  [x: string]: any;
  className?: any;
  children: any;
  plain?: any;
  profile?: any;
  chart?: any;
}> = ({ className, children, plain, profile, chart, ...rest }) => {
  const classes = createCardClasses();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined,
  });
  return (
    <Grid className={cardClasses} {...rest}>
      {children}
    </Grid>
  );
};
