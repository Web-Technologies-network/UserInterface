import React from 'react';
import Button from '../CustomButtons/Button';
import { colors } from '../../../assets/jss/Colors';
import { useHeaderLinksStyle } from '../../../assets/jss/material-dashboard-react/components/headerLinksStyle';
import Dashboard from '@material-ui/icons/Dashboard';
import Hidden from '@material-ui/core/Hidden';

export const AdminNavbarDashboardButton: React.FC = () => {
  const classes = useHeaderLinksStyle();

  return (
    <Button
      color={window.innerWidth > 959 ? colors.transparent : colors.white}
      justIcon={window.innerWidth > 959}
      simple={!(window.innerWidth > 959)}
      aria-label='Dashboard'
      className={classes.buttonLink}
    >
      <Dashboard className={classes.icons} />
      <Hidden mdUp implementation='css'>
        <p className={classes.linkText}>Dashboard</p>
      </Hidden>
    </Button>
  );
};
