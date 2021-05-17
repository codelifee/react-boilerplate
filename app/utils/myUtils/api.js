import axios from './axios';
import {boardStored, storeBoardError} from 'containers/App/actions';

export const deleteBoard = board_no => {
  axios
    .delete('board', {
      data: {
        board_no,
      },
    })
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(err => console.log(err));
};

export const postBoard = form => {

  console.log(form)

  return axios
    .post('boards', form)
    // .then(res => {
    //   // window.location.reload();
    //   boardStored()
    //   // alert('register completed');
    // })
    // .catch(err => {
    //   storeBoardError()
    //   // alert('error')
    // });
};


export async function fetchBoardData(boardId) {
  const request = await axios
    .get(`board/${boardId}`)
    .then(res => {})
    .catch(err => console.log(err));

  return request;
}
