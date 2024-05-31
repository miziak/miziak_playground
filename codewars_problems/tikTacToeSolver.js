function isSolved(board) {
    for (let i = 1; i < 3; i++) {
        if (board[1][1] === board [0][0] && board[1][1] === board [2][2] && board[1][1] === i) return i //skos 1
        if (board[1][1] === board[0][2] && board[1][1] === board[2][0] && board[1][1] === i) return i //skos 2
        for (let k = 0; k < 3; k++) {
            if (board[k][0] === board[k][1] && board[k][0] === board[k][2] && board[k][0] === i) return i //poziom
            if (board[0][k] === board [1][k] && board[0][k] === board[2][k] && board[0][k] === i) return i //pion
        }
    }
    if (board.flat(Infinity).findIndex(element => element === 0) === -1) return 0
    else return -1
}



//rozwiązanie innego gościa


function isSolved(board) {
    board = board.join('-').replace(/,/g,'');
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
 }