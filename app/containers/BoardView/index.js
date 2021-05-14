import React from 'react'
import { useParams } from "react-router";

import Root from './Root'
import BoardContent from './BoardContent'
import Header from './Header'
import Box from 'components/box'
import SmallBox from 'components/SmallBox'

function BoardView() {

    console.log(useParams)

    return (
        <Root> 
          <BoardContent>
            <Header>
                <div>user_name :  </div>
                <div>board_no : </div>
            </Header>
            <div>
                <div>
                    title
                </div>
                <Box>
                    box
                    {/* {board.board_title} */}
                </Box>
            </div>
            <div>
                <div>
                    date
                </div>
                <SmallBox>
                    small
                    {/* {board.board_regdate} */}
                </SmallBox>
            </div>
            <div>
                content
                <SmallBox>
                    small
                    {/* {board.board_content} */}
                </SmallBox>
            </div>
        </BoardContent>
    </Root>
    )
}

export default BoardView
