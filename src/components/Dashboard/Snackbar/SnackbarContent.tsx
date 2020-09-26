import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Snack from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import styles from '../../../assets/jss/material-dashboard-react/components/snackbarContentStyle';
import { colors } from '../../../assets/jss/Colors';
const useStyles = makeStyles(styles);
type SnackbarContentProps = {
  message: React.ReactNode;
  color?: colors;
  close?: boolean;
  icon?: any;
  rtlActive?: boolean;
};
export default function SnackbarContent(props: SnackbarContentProps) {
  const classes = useStyles();
  const { message, color = colors.primary, close, icon, rtlActive } = props;
  let action: {} | null | undefined = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton className={classes.iconButton} key='close' aria-label='Close' color='inherit'>
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: classes.root + ' ' + classes[color],
        message: classes.message,
        action: classNames({ [classes.actionRTL]: rtlActive }),
      }}
      action={action}
    />
  );
}
