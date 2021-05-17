import { CHANGE_TITLE, CHANGE_CONTENT } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeTitle(boardTitle) {
  return {
    type: CHANGE_TITLE,
    boardTitle,
  };
}

export function changeContent(boardContent) {
  return {
    type: CHANGE_CONTENT,
    boardContent,
  };
}
