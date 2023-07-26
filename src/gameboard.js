export let gameboard = (rows, columns) => {
    let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(columns).fill(0)); // Fill each row with initial values (e.g., 0)
  }
  return matrix;
}