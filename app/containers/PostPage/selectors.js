import { createSelector } from 'reselect';
import { initialState } from './reducer';

// where does this state come from?
const selectPost = state => state.post || initialState;

const makeSelectPost = () =>

  createSelector(
    selectPost,
    postState => postState.content,
  );

export { selectPost, makeSelectPost };
