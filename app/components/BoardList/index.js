import React from 'react';

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


function BoardList({ boards }) {

  console.log(boards)

  //return 위쪽으로 정리하는 게 좋음
  return (
    <>
      {
        boards.length > 0 ? 
          boards.map(board => {
            <TableRow>
              <TableCell>{board.board_no}</TableCell>
              <TableCell>{board.user_no}</TableCell>
              <TableCell>{board.board_title}</TableCell>
              <TableCell>{board.board_content}</TableCell>
              <TableCell>{board.board_regdate}</TableCell>
              <TableCell>내용 보기</TableCell>
              <TableCell>삭제하기</TableCell>
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

export default BoardList;



// onClick={redirect} style={{cursor: 'pointer'}

// onClick={handleDelete} style={{cursor: 'pointer'}