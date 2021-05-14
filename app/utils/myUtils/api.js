import axios from './axios';

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
  axios
    .post('board', form)
    .then(res => {
      window.location.reload();
      alert('register completed');
    })
    .catch(err => console.log(err));
};

export async function fetchBoardData(boardId) {
  const request = await axios
    .get(`board/${boardId}`)
    .then(res => {})
    .catch(err => console.log(err));

  return request;
}