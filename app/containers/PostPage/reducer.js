import produce from 'immer';
import { CHANGE_BOARD } from './constants';

// The initial state of the App
export const initialState = {
  boardTitle: '',
  boardContent: '',
};

/* eslint-disable default-case, no-param-reassign */
const writingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_BOARD:
        // Delete prefixed '@' from the github username
        draft.boardTtile = action.boardTitle;
        draft.boardContent = action.boardContent;
        break;
    }
  });

export default writingReducer;
