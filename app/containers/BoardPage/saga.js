/**
 * Gets the repositories of the user from Github
 */

 import { call, put, select, takeLatest } from 'redux-saga/effects';
 import { LOAD_BOARDS } from 'containers/App/constants';
 import { boardsLoaded } from 'containers/App/actions';
 
 import request from 'utils/request';
//  import { makeSelectUsername } from 'containers/HomePage/selectors';

 
 /**
  * Github repos request/response handler
  */

 export function* getBoards() {
     const requestURL = 'http://localhost:4000/board/all';

     try {
       const boards = yield call(request, requestURL);
       yield put(boardsLoaded(boards))
     } catch (err) {
       console.log(err)
    }

 }

 
 /**
  * Root saga manages watcher lifecycle
  */
 export default function* boardsData() {
   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
   // By using `takeLatest` only the result of the latest API call is applied.
   // It returns task descriptor (just like fork) so we can continue execution
   // It will be cancelled automatically on component unmount
   yield takeLatest(LOAD_BOARDS, getBoards);
 }
 
