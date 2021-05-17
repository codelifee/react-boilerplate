/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR, LOAD_BOARDS, LOAD_BOARDS_SUCCESS, 
  LOAD_BOARDS_ERROR,
  STORE_BOARD,
  STORE_BOARD_SUCCESS,
  STORE_BOARD_ERROR
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
   repositories: false,
  },

  boardLoding: false,
  boardLodingError: false,
  boards: {},
  
  storeBoard: false,
  storeBoardError: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {


    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_BOARDS:
        draft.boardLoding = true;
        break;

      case LOAD_BOARDS_SUCCESS:
        draft.boards = action.boards;
        break;

      case LOAD_BOARDS_ERROR:
        draft.boardLodingError = true;
      break;

      case STORE_BOARD:
        break;

      case STORE_BOARD_SUCCESS:
        draft.storeBoard = true;
      
      case STORE_BOARD_ERROR: 
        draft.storeBoardError = true;

      default:
        return state; 
    }

  });


export default appReducer;
