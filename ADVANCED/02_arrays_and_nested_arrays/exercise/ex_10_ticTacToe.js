function ticTacToe(input) {
    function hasWin(m, player) {
        if (m[0][0] == player && m[0][1] ==player && m[0][2] == player) { // case 1 horizontal 0
            return true;
        } else if (m[1][0] == player && m[1][1] ==player && m[1][2] == player) { // case 2 horizontal 1
            return true;
        } else if (m[2][0] == player && m[2][1] ==player && m[2][2] == player) { // case 3 horizontal 2
            return true;
        } else if (m[0][0] == player && m[1][0] ==player && m[2][0] == player) { // case 4 vertical 0
            return true;
        } else if (m[0][1] == player && m[1][1] ==player && m[2][1] == player) { // case 5 vertical 1
            return true;
        } else if (m[0][2] == player && m[1][2] ==player && m[2][2] == player) { // case 6 vertical 2
            return true;
        } else if (m[0][0] == player && m[1][1] ==player && m[2][2] == player) { // case 7 promary diagonal
            return true;
        } else if (m[0][2] == player && m[1][1] ==player && m[2][0] == player) { // case 8 secondary diagonal
            return true;
        }
    }

    function noFreeSpaces(m) {
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                if(m[i][j] == false) {
                    return false;
                } 
            }
        }
        return true;
    }

    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let currentPlayer = 'X';
    let hasWon = false;
    for (let i = 0; i < input.length; i++) {
        const [x, y] = input[i].split(' ');

        if (noFreeSpaces(playField)) {
            break;
        }

        if (playField[x][y] == "X" || playField[x][y] == "O") {
            console.log('This place is already taken. Please choose another!');
        } else {
            playField[x][y] = currentPlayer;

            if (hasWin(playField, currentPlayer)) {
                hasWon = true;
                break;
            }
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X'; 
        }
    }
    if (hasWon) {
        console.log(`Player ${currentPlayer} wins!`);
    } else {
        console.log(`The game ended! Nobody wins :(`);
    }
    for (let row of playField) {
        console.log(row.join('\t'));
    }
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);

ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);