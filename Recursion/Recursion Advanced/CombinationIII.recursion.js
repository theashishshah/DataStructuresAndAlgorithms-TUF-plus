function backtrack(index, k, sum, arr, ans, currentList){
    if (sum === 0 && k === 0) {
        ans.push([...currentList])
        return
    }

    if (sum < 0 || k < 0 || index === arr.length || (k === 0 && sum > 0)) return

    currentList.push(arr[index])
    sum -= arr[index]
    k--
    this.backtrack(index + 1, k, sum, arr, ans, currentList)
    currentList.pop()
    sum += arr[index]
    k++
    this.backtrack(index + 1, k, sum, arr, ans, currentList)
}