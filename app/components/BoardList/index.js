import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { deleteBoard } from 'utils/myUtils/api';
import history from 'utils/history';

// 데이터 변경하는 로직 넣어보기 -> redux
function BoardList({ boards }) {
  const redirect = board => {
    // console.log(board)
    history.push({
      pathname: '/board',
      state: { info: board },
    });
    window.location.reload();
  };

  const boardList = [];

  {
    boards.length > 0 ? (
      boards.map(board => {
        const content = (
          <TableRow>
            <TableCell>{board.board_no}</TableCell>
            <TableCell>{board.user_no}</TableCell>
            <TableCell>{board.board_title}</TableCell>
            <TableCell>{board.board_content}</TableCell>
            <TableCell>{board.board_regdate}</TableCell>
            <TableCell
              onClick={() => redirect(board)}
              style={{ cursor: 'pointer' }}
            >
              내용 보기
            </TableCell>
            <TableCell
              onClick={() => deleteBoard(board.board_no)}
              style={{ cursor: 'pointer' }}
            >
              삭제하기
            </TableCell>
          </TableRow>
        );

        boardList.push(content);
      })
    ) : (
      <TableRow>
        <TableCell>Nothing is here</TableCell>
      </TableRow>
    );
  }

  // return 위쪽으로 정리하는 게 좋음
  return <>{boardList}</>;
}

export default BoardList;
