import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from '../../Grid/GridItem';
import GridContainer from '../../Grid/GridContainer';
import Table from '../../Table/Table';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardBody from '../../Card/CardBody';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
};
// @ts-ignore
const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      // @ts-ignore
      <GridItem xs={12} sm={12} md={12}>
        // @ts-ignore
        <Card>
          // @ts-ignore
          <CardHeader color='primary'>
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p>
          </CardHeader>
          // @ts-ignore
          <CardBody>
            <Table
              tableHeaderColor='primary'
              tableHead={['Name', 'Country', 'City', 'Salary']}
              tableData={[
                // @ts-ignore
                ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                // @ts-ignore
                ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                // @ts-ignore
                ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                // @ts-ignore
                ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                // @ts-ignore
                ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                // @ts-ignore
                ['Mason Porter', 'Chile', 'Gloucester', '$78,615'],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      // @ts-ignore
      <GridItem xs={12} sm={12} md={12}>
        // @ts-ignore
        <Card plain>
          // @ts-ignore
          <CardHeader plain color='primary'>
            <h4 className={classes.cardTitleWhite}>Table on Plain Background</h4>
            <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p>
          </CardHeader>
          // @ts-ignore
          <CardBody>
            <Table
              tableHeaderColor='primary'
              tableHead={['ID', 'Name', 'Country', 'City', 'Salary']}
              tableData={[
                // @ts-ignore
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                // @ts-ignore
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                // @ts-ignore
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                // @ts-ignore
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                // @ts-ignore
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'],
                // @ts-ignore
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
