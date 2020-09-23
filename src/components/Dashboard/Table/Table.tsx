import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// core components
import { createTableClasses } from '../../../assets/jss/material-dashboard-react/components/tableStyle';
import { colors } from '../../../assets/jss/Colors';

interface StringArray {
  strings: string[];
}
type CustomTableProp = {
  tableHead: string[];
  tableData: string[][];
  tableHeaderColor: colors;
};
export default function CustomTable(props: CustomTableProp) {
  const classes = createTableClasses();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop: {} | null | undefined, key: string | number | undefined) => {
                return (
                  <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                // @ts-ignore
                {prop.map((prop: React.ReactNode, key: string | number | undefined) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
};

CustomTable.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
