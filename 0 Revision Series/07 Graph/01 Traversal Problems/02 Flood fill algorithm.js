class Solution {
    dfs(row, col, image, color, visited) {
        const rows = image.length
        const cols = image[0].length

        visited[row][col] = true
        image[row][col] = color
        const directons = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        for (const [dx, dy] of directons) {
            const nextRow = row + dx
            const nextCol = col + dy
            if (nextRow >= 0 && nextRow < rows &&
                nextCol >= 0 && nextCol < cols && !visited[nextRow][nextCol] && image[nextRow][nextCol] !== 0
            ) {
                this.dfs(nextRow, nextCol, image, color, visited)
            }
        }

    }
    floodFill(image, sr, sc, newColor) {
        const rows = image.length
        const cols = image[0].length
        const visited = new Array(rows).fill().map(() => Array(cols).fill(false))
        this.dfs(sr, sc, image, newColor, visited)
        return image
    }
}

