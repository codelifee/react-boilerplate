import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Table, TableBody, TableHead } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import saga from './saga';
import reducer from 'containers/App/reducer';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import { loadBoards } from 'containers/App/actions';
import H2 from 'components/H2';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BoardList from 'components/BoardList';
import {
  makeSelectBoards,
  makeSelectBoardLoading
} from 'containers/App/selectors';


const key = 'board';  //const는 모아주고 대문자로

export function BoardPage({
  boardLoding,
  boards,
  fetchBoards,
}) {


  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    fetchBoards()
   
  }, []);

  console.log(Array.isArray(boards))

  var boardList=[];

        {boards.length > 0 ? 
          boards.map(board => {
            {console.log("aaa"+board.board_title)}     
            // <H2>{board.board_title}</H2>               
           let  aaa = (
            <TableRow>
              <TableCell>{board.board_no}</TableCell>
              <TableCell>{board.user_no}</TableCell>
              <TableCell>{board.board_title}</TableCell>
              <TableCell>{board.board_content}</TableCell>
              <TableCell>{board.board_regdate}</TableCell>
              <TableCell>내용 보기</TableCell>
              <TableCell>삭제하기</TableCell>
            </TableRow>
            )
            boardList.push(aaa)
          }):
          <TableRow>
            <TableCell>Nothing is here</TableCell>
          </TableRow>
        }

  return (
    <Paper>
        <button>
          <FormattedMessage {...messages.registerButton} />
        </button>
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
               {/* <BoardList boards={boards} />\ */}
{boardList}
              
            </TableBody>
        </Table>
    </Paper>
  );
}

// // 참고
// BoardPage.propTypes = {
//   fetchBoards: PropTypes.func,
//   boardLoding: PropTypes.bool,
//   boards: PropTypes.object,
// };
  
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