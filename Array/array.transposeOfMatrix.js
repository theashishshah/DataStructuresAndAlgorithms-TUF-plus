function rotateMatrix(matrix) {
    if(matrix.length <= 1) return matrix
    const N = matrix[0].length;
    // create 2D array
    const transposeArray = []
    for(let i = 0; i < N; i++){
        transposeArray.push(new Array(matrix.length).fill(0))
    }
    // console.log(transposeArray)

    for(let col = 0; col < N; col++){
        for(let row = N - 1; row >= 0; row--){
            // console.log(matrix[row][col])
            transposeArray[col][N - row - 1] = matrix[row][col]
        }
    }
    console.log(transposeArray)

    for(let row = 0; row < N; row++){
        for(let col = 0; col < N; col++){
            matrix[row][col] = transposeArray[row][col]
        }
    }
    // return matrix

}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateMatrix(matrix))