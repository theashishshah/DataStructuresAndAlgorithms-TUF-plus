class Solution {
    floodFill(image, sr, sc, newColor) {
        const rows = image.length
        const cols = image[0].length
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        const startingPixel = image[sr][sc]

        function bfs(row, col) {
            const queue = []
            visited[row][col] = true
            queue.push([row, col])
            image[row][col] = newColor
            while (queue.length) {
                const [crow, ccol] = queue.shift()
                for (const [dx, dy] of directions) {
                    const nrow = crow + dx
                    const ncol = ccol + dy
                    if (ncol < cols && nrow < rows && ncol >= 0 && nrow >= 0
                        && image[nrow][ncol] === startingPixel && !visited[nrow][ncol]
                    ) {
                        visited[nrow][ncol] = true
                        queue.push([nrow, ncol])
                        image[nrow][ncol] = newColor
                    }
                }
            }
        }
        bfs(sr, sc)
        return image
    }
}