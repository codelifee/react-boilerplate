import produce from 'immer';
import { CHANGE_TITLE, CHANGE_CONTENT } from './constants';

// The initial state of the App
export const initialState = {
  content : {
    boardTitle: '',
    boardContent: '',
  }
};

/* eslint-disable default-case, no-param-reassign */
const postReducer = (state = initialState, action) =>
  produce(state, draft => {


    switch (action.type) {
      case CHANGE_TITLE:
        // Delete prefixed '@' from the github username
        state.content.boardTitle = action.boardTitle;
        break;
    }

    switch (action.type) {
      case CHANGE_CONTENT:
        // Delete prefixed '@' from the github username
        state.content.boardContent = action.boardContent;
        break;
    }
  });


export default postReducer;
