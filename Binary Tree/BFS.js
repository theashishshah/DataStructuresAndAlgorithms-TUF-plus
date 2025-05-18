function BFS(root){
    if(!root) return []
        const q = []
        q.push(root)
        const result = []
        while(q.length > 0){
            const currentWidth = q.length
            const currentLevelNodes = []
            for(let i = 0; i < currentWidth; i++){
                const currentNode = q.shift()
                currentLevelNodes.push(currentNode.data)
                if(currentNode.left) q.push(currentNode.left)
                if(currentNode.right) q.push(currentNode.right)
            }
            result.push(currentLevelNodes)
        }
        return result
}