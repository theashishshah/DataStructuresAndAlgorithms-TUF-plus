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


// using bfs
class Solution {
    floodFill(image, sr, sc, color) {
        // code here dfs
        const rows = image.length
        const cols = image[0].length
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const startingColor = image[sr][sc]

        const queue = []
        queue.push([sr, sc])
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        while (queue.length) {
            const [row, col] = queue.shift()
            image[row][col] = color
            visited[row][col] = true
            // traverse its neighbours
            for (const [dx, dy] of directions) {
                const nextRow = row + dx
                const nextCol = col + dy
                if (nextRow >= 0 && nextRow < rows &&
                    nextCol >= 0 && nextCol < cols &&
                    !visited[nextRow][nextCol] && image[nextRow][nextCol] === startingColor) {
                    queue.push([nextRow, nextCol])
                }
            }
        }
        return image

    }
}
