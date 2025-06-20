function floorCeilOfBST(root, key) {
    let ceil = -1
    let floor = -1
    let current = root
    while (current) {
        if (current.data === key) {
            floor = ceil = current.data
            break
        }
        if (current.data > key) {
            ceil = current.data
            current = current.left
        } else {
            floor = current.data
            current = current.right
        }
    }
    return [floor, ceil]
}