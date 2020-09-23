import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridSize } from '@material-ui/core/Grid';

const styles = {
  grid: {
    padding: '0 15px !important',
  },
};
const useStyles = makeStyles(styles);
type GridItemProp = {
  children: React.ReactNode;
  xs: GridSize;
  sm: GridSize;
  md: GridSize;
}
export default function GridItem(props: GridItemProp) {
  const classes = useStyles();
  const { children,xs, sm, md, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}
