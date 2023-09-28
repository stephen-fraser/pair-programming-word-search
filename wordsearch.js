//- pair programming exercise LHL with @Dechantg and @mxtchjohnston 


const transpose = function (matrix) {
  // Replace this code with your solution
  let transposedMatrix = []; 
  const numRows = matrix.length;
  const numCols = matrix[0].length; //Assumes equal length for all rows

  //rows x col becomes col x rows in transposed matrix
  //on first pass col is fixed at zero and iterates through rows until end.
  //take matrix row col for transposed col row
  for (let col = 0; col < numCols; col++) {
    transposedMatrix[col] = [];
    for (let row = 0; row < numRows; row++) {
      transposedMatrix[col][row] = matrix[row][col];
    }
  }
  return transposedMatrix;
}

const wordSearch = (letters, word) => { 

  //first making the horizontal array
  const horizontalJoin = letters.map(ls => ls.join(""));
  //second making a vertical array and combining it with the horizontal array
  const combinedArrays = horizontalJoin.concat(transpose(letters).map(ls => ls.join('')));
  //console.log(combinedArrays);
  //console.log(horizontalJoin);
  for (const line of combinedArrays) {
      if (line.includes(word)) {
          return true;
      }
  }

  return false;
};

module.exports = wordSearch
