import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Snack from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import styles from '../../../assets/jss/material-dashboard-react/components/snackbarContentStyle';
import { colors } from '../../../assets/jss/Colors';

const useStyles = makeStyles(styles);
type SnackbarProps = {
  message: React.ReactNode;
  color: colors;
  close: boolean;
  icon: any;
  place: any;
  open: boolean;
  rtlActive?: boolean;
  closeNotification: () => void;
};
export default function Snackbar(props: SnackbarProps) {
  const classes = useStyles();
  const { message, color, close, icon, place, open, rtlActive } = props;
  let action: {} | null | undefined = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key='close'
        aria-label='Close'
        color='inherit'
        onClick={() => props.closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal: place.indexOf('l') !== -1 ? 'left' : place.indexOf('c') !== -1 ? 'center' : 'right',
      }}
      open={open}
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: classes.root + ' ' + classes[color],
          message: classes.message,
          action: classNames({ [classes.actionRTL]: rtlActive }),
        },
      }}
    />
  );
}
