import React from 'react';
import { createTypographyStyle } from '../../../assets/jss/material-dashboard-react/components/typographyStyle';

export default function Quote(props: { text: React.ReactNode; author: React.ReactNode }): React.ReactElement {
  const { text, author } = props;
  const classes = createTypographyStyle();
  return (
    <blockquote className={classes.defaultFontStyle + ' ' + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}
