import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles, Theme } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '../../../assets/jss/material-dashboard-react/components/cardBodyStyle';

const useStyles = makeStyles((theme: Theme) => styles);

export default function CardBody(props: { className?: string; children: any; plain?: boolean; profile?: boolean }) {
  const classes = useStyles();
  const { className = '', children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== '',
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
