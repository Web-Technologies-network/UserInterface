import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import GridItem from '../../Grid/GridItem';
import GridContainer from '../../Grid/GridContainer';
import Table from '../../Table/Table';
import Tasks from '../../Tasks/Tasks';
import CustomTabs from '../../CustomTabs/CustomTabs';
import { Danger, Card } from '../../../common';
import CardHeader from '../../Card/CardHeader';
import CardIcon from '../../Card/CardIcon';
import CardBody from '../../Card/CardBody';
import CardFooter from '../../Card/CardFooter';

import { bugs, website, server } from '../../variables/general';

import { dailySalesChart, emailsSubscriptionChart, completedTasksChart } from '../../variables/charts';

import styles from '../../../../assets/jss/material-dashboard-react/views/dashboardStyle';
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color='warning' stats icon>
              // @ts-ignore
              <CardIcon color='warning'>
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href='#pablo' onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color='success' stats icon>
              // @ts-ignore
              <CardIcon color='success'>
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color='danger' stats icon>
              // @ts-ignore
              <CardIcon color='danger'>
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color='info' stats icon>
              // @ts-ignore
              <CardIcon color='info'>
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card chart>
            // @ts-ignore
            <CardHeader color='success'>
              <ChartistGraph
                className='ct-chart'
                data={dailySalesChart.data}
                type='Line'
               // @ts-ignore
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{' '}
                increase in today sales.
              </p>
            </CardBody>
            // @ts-ignore
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card chart>
            // @ts-ignore
            <CardHeader color='warning'>
              // @ts-ignore
              <ChartistGraph
                className='ct-chart'
                data={emailsSubscriptionChart.data}
                type='Bar'
               // @ts-ignore
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            // @ts-ignore
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card chart>
            // @ts-ignore
            <CardHeader color='danger'>
              <ChartistGraph
                className='ct-chart'
                data={completedTasksChart.data}
                type='Line'
               // @ts-ignore
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            // @ts-ignore
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title='Tasks:'
            headerColor='primary'
            tabs={[
              {
                tabName: 'Bugs',
                tabIcon: BugReport,
                tabContent: <Tasks checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />,
              },
              {
                tabName: 'Website',
                tabIcon: Code,
                tabContent: <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />,
              },
              {
                tabName: 'Server',
                tabIcon: Cloud,
                tabContent: <Tasks checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} tasks={server} />,
              },
            ]}
          />
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={6}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color='warning'>
              // @ts-ignore
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>New employees on 15th September, 2016</p>
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <Table
                tableHeaderColor='warning'
                tableHead={['ID', 'Name', 'Salary', 'Country']}
                tableData={[
                  // @ts-ignore
                  ['1', 'Dakota Rice', '$36,738', 'Niger'],
                  // @ts-ignore
                  ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                  // @ts-ignore
                  ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                  // @ts-ignore
                  ['4', 'Philip Chaney', '$38,735', 'Korea, South'],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
