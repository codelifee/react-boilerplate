export const handleDelete = () => {
    axios
    .delete("board", {
      data: {
        "board_no" : board_no
      }
    })
    .then((res) => {
      console.log(res)
      window.location.reload()
    })
    .catch((err) => console.log(err));
}

export const postBoard = () => {

    axios
    .post("board", form)
    .then((res) => {
        console.log(res)
        window.location.reload()
        alert("register completed")
    })
    .catch((err) => console.log(err));
};

export  async function fetchBoardDataAll() {
    const request = await axios.get("board/all")
    .then(res => {
        setBoards(res.data);
        
    })
    .catch(err => console.log(err))

    return request;
}

export async function fetchBoardData() {
    const request = await axios.get(`board/${boardId}`)
    .then(res => {
        setBoard(res.data[0])

    })
    .catch(err => console.log(err))

    return request;
}