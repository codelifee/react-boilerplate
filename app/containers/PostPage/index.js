import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Root from 'components/Root';
import BoardContent from 'components/BoardContent';
import SmallBox from 'components/SmallBox';
import Box from 'components/Box';
import Input from 'components/Input';
import SmallInput from 'components/SmallInput';
import Button from './Button';
import saga from './saga';
import reducer from './reducer';

import { changeTitle, changeContent } from './actions' 
import { storeBoard } from '../App/actions';
import { makeSelectBoardError } from 'containers/App/selectors'

const key = 'home';

export function PostPage({
  registerLoding,
  error,
  onSubmitForm,
  onChangeBoard,
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  console.log(error)

  return (
    <Root style={{ marginTop: 70 }}>
      <BoardContent>
        <div>
          <div>user id</div>
          <SmallBox>
            <SmallInput
              name="user_no"
              type="textarea"
            />
          </SmallBox>
        </div>
        <div>
          <div>board title</div>
          <Box>
            <Input name="title" onChange={onChangeBoard} type="textarea" />
          </Box>
        </div>
        <div>
          <div>board content</div>
          <Box>
            <Input name="content" onChange={onChangeBoard} type="textarea" />
          </Box>
        </div>
        <div>
          <Button onClick={onSubmitForm}>Register</Button>
        </div>
      </BoardContent>
    </Root>
  );
}

// get state and map it to props here.
const mapStateToProps = createStructuredSelector({
  error: makeSelectBoardError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeBoard: e => {
      e.preventDefault();

      if(e.target.name === 'title') {
        dispatch(changeTitle(e.target.value));
      } else {
        dispatch(changeContent(e.target.value));
      }

      
    },

    onSubmitForm: e => {
      e.preventDefault();
      
      dispatch(storeBoard());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostPage);
