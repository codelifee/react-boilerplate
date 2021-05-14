import React, { useEffect, memo } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from 'components/Button'
import { Table, TableBody, TableHead } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import reducer from 'containers/App/reducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import { loadBoards } from 'containers/App/actions';
import Link from './Link'

import { FormattedMessage } from 'react-intl';
import BoardList from 'components/BoardList';
import {
  makeSelectBoards,
  makeSelectBoardLoading,
} from 'containers/App/selectors';
import messages from './messages';
import saga from './saga';

const key = 'board'; // const는 모아주고 대문자로

export function BoardPage({ boardLoding, boards, fetchBoards }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    fetchBoards();
  }, []);

  return (
    <Paper>
      <Link to={'/write'}>
        <FormattedMessage {...messages.registerButton} />
      </Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage {...messages.tableCell1} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.tableCell2} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.tableCell3} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.tableCell4} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.tableCell5} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.tableCell6} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.tableCell7} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <BoardList boards={boards} />\
        </TableBody>
      </Table>
    </Paper>
  );
}

// get state and map it to props here.
const mapStateToProps = createStructuredSelector({
  boardLoding: makeSelectBoardLoading(),
  boards: makeSelectBoards(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchBoards: evt => dispatch(loadBoards()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BoardPage);
