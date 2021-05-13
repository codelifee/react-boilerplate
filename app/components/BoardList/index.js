import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


function BoardView({ boards }) {

  console.log(boards)

  return (
    <>
      {
        boards ? 
          boards.map(board => {
            <TableRow>
              <TableCell>{board.board_no}</TableCell>
              <TableCell>{board.user_no}</TableCell>
              <TableCell>{board.board_title}</TableCell>
              <TableCell>{board.board_content}</TableCell>
              <TableCell>{board.board_regdate}</TableCell>
              {/* <TableCell onClick={redirect} style={{cursor: 'pointer'}}>내용 보기</TableCell>
              <TableCell onClick={handleDelete} style={{cursor: 'pointer'}}>삭제하기</TableCell> */}
            </TableRow>
          })
          :
          <TableRow>
            <TableCell>Nothing is here</TableCell>
          </TableRow>
       
      }
    </>
  )
}

// BoardView.propTypes = {
//   boards
// };

export default BoardView;