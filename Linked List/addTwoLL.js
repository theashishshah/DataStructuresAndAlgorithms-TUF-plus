function addTwoNumbers(l1, l2) {
    let currNodeOne = l1
    let currNodeTwo = l2
    const resultanNode = new ListNode(currNodeOne.val + currNodeTwo.val)
    console.log(resultanNode)
    let temp = resultanNode
    while(currNodeOne.next !== null && currNodeTwo.next !== null){
        const newNode = new ListNode(currNodeOne.val + currNodeTwo.val)
        temp.next = newNode
        temp = newNode
        currNodeOne = currNodeOne.next
        currNodeTwo = currNodeTwo.next
    }

    while(currNodeOne.next !== null){
        const newNode = new ListNode(currNodeOne.val) 
        temp.next = newNode
        temp = temp.next
    }

    while(currNodeTwo.next !== null){
        const newNode = new ListNode(currNodeTwo.val)
        temp.next = newNode
        temp = newNode
    }

    return resultanNode
}