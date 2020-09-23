import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { colors } from '../../../assets/jss/Colors';

import { createButtonStyles } from '../../../assets/jss/material-dashboard-react/components/buttonStyle';

enum sizes {
  'sm',
  'lg',
}
export default function RegularButton(props: {
  color: colors;
  round?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  simple?: boolean;
  size?: sizes;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
  muiClasses?: object;
  href?: string;
  target?: string;
  fullWidth?: boolean;
  onClick?: (event: any) => void;
}) {
  const classes = createButtonStyles();
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size = sizes.sm,
    block,
    link,
    justIcon,
    className = '',
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
}
