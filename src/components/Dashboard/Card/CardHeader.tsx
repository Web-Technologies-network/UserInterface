import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../assets/jss/Colors';
// core components
import { createCardHeaderStyle } from '../../../assets/jss/material-dashboard-react/components/cardHeaderStyle';

export default function CardHeader(props: {
  className?: string;
  children?: React.ReactNode;
  color: colors;
  plain?: boolean;
  stats?: boolean;
  icon?: boolean;
}) {
  const classes = createCardHeaderStyle();
  const { className = '', children, color, plain, stats, icon, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className.trim() !== '',
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
