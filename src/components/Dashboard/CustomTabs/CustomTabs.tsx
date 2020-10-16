import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// core components
import { Card } from '../../common';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

import styles from '../../../assets/jss/material-dashboard-react/components/customTabsStyle';
import { colors } from '../../../assets/jss/Colors';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles(styles);
type CustomTabsProps = {
  headerColor: colors;
  title: string;
  tabs: {
    tabName: string;
    tabIcon: any;
    tabContent: React.ReactNode;
  }[];
  rtlActive?: boolean;
  plainTabs?: boolean;
};
export default function CustomTabs(props: CustomTabsProps) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant='scrollable'
          scrollButtons='auto'
        >
          {tabs.map((prop, key: string | number | undefined) => {
            let icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <SvgIcon component={prop.tabIcon} />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop: { tabContent: React.ReactNode }, key: string | number | undefined) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}
