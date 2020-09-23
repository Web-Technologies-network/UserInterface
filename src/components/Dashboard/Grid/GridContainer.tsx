import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridJustification } from '@material-ui/core/Grid';

const styles = {
  grid: {
    margin: '0 -15px !important',
    width: 'unset',
  },
};

const useStyles = makeStyles(styles);
type GridContainerProp = {
  children: React.ReactNode;
  justify?: GridJustification;
};
export default function GridContainer(props: GridContainerProp) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}
