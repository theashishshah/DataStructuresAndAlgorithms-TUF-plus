function  maxDepth(root) {
        if(!root) return 0
        
        // using level order traversal
        const q = []
        let height = 0
        q.push(root)
        while(q.length){
            const size = q.length
            height++
            for(let i = 0; i < size; i++){
                const node = q.shift()
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
        }
        return height
    }