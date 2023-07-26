export let generateMoves = (currentPlace) => {
    let [x, y] = currentPlace;
    return [
        [x+1, y+2],
        [x-1, y+2],
        [x+2, y+1],
        [x-2, y+1],
        [x+2, y-1],
        [x-2, y-1],
        [x+1, y-2],
        [x-1, y-2],
    ];
    
}