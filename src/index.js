import { gameboard } from "./gameboard";
import { generateMoves } from "./generateMoves";

let knightMoves = (start, end) => {
    let board = gameboard(8, 8);
    console.log(board);

    let queue = [start];
    let found = false;
    let visited = new Set(); // Store visited positions

    while (queue.length > 0) {
        let currentPlace = queue.shift();

        if (currentPlace[0] == end[0] && currentPlace[1] == end[1]) {
            found = true;
            break;
        }

        let moves = generateMoves(currentPlace);
        for (let move of moves) {
            let [x, y] = move;
            let newPosition = `${x},${y}`; // Convert the move to a string for easier Set comparison

            if (x >= 0 && x < 8 && y >= 0 && y < 8 && !visited.has(newPosition)) {
                queue.push(move);
                console.log(newPosition)
                visited.add(newPosition); // Mark the new position as visited
                board[x][y] = currentPlace;
            }
        }
    }

    if (found) {
        let path = [];
        let currentPosition = end;

        // Backtrack to find the path from end to start
        while (currentPosition[0] != start[0] || currentPosition[1] != start[1]) {
            path.push(currentPosition);
            currentPosition = board[currentPosition[0]][currentPosition[1]];
        }

        path.push(currentPosition);
        path.reverse();

        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        for (let square of path) {
            console.log(square);
        }
    } else {
        console.log('Path not found');
    }
}

knightMoves([3, 3], [4, 3]);