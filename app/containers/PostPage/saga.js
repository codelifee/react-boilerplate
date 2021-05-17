/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { STORE_BOARD } from '../App/constants';
import { boardStored, storeBoardError } from 'containers/App/actions';

import {postBoard} from 'utils/myUtils/api';
import { makeSelectPost } from 'containers/PostPage/selectors';
import request from 'utils/request'



export function* uploadBoard() {
  const board = yield select(makeSelectPost());
  const requestURL = 'http://localhost:4000/boards';

  const options = {
    method: "POST",
    body: JSON.stringify(board),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }

  try {
    const response = yield call(request, requestURL, options)

    console.log(response)

    yield put(boardStored());

  } catch(err) {
    console.log(err)

    yield put(storeBoardError());
  }


  
}

export default function* boardPost() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount


  yield takeLatest(STORE_BOARD, uploadBoard);
}
