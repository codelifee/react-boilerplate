import React from 'react'
import { useLocation } from "react-router";

import Root from './Root'
import BoardContent from './BoardContent'
import Header from './Header'
import Box from 'components/box'
import SmallBox from 'components/SmallBox'

function BoardView() {

    const location = useLocation();
    const board = location.state.info;

    return (
        <Root> 
          <BoardContent>
            <Header>
                <div>user_name : {board.user_no} </div>
                <div>board_no : {board.board_no} </div>
            </Header>
            <div>
                <div>
                    title
                </div>
                <Box>
                    {board.board_title}
                </Box>
            </div>
            <div>
                <div>
                    date
                </div>
                <SmallBox>
                    {board.board_regdate}
                </SmallBox>
            </div>
            <div>
                content
                <SmallBox>
                    {board.board_content}
                </SmallBox>
            </div>
        </BoardContent>
    </Root>
    )
}

export default BoardView
