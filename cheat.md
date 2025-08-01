
"ashish".charCodeAt(index)
Math.round(): gives the round of value


```js
const map = new Map()
map.set(2, 3)
map.set(4, 5)
map.forEach((value, key, map) => {
    console.log("Value", value)
    console.log("Key", key)
    console.log("map", map)
    return
})
```

```js
const str = "+3-4+2+3-1"
console.log(eval(str)) // will give output
```

```js
let str = "ashish"
let len = str.length // to get the length of the string
```

```js 
The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
to find the first element index which satify the condition
eg:
const arr = [5, 1, 0, 2];
const firstNonZero = arr.findIndex(x => x !== 0);
const ans = arr.slice(firstNonZero)
console.log(ans) // [ 5, 1, 0, 2 ]


const arr = [0, 0, 0, 5, 1, 0, 2];
const firstNonZero = arr.findIndex(x => x !== 0);
const ans = arr.slice(firstNonZero)
console.log(ans)  // [ 5, 1, 0, 2 ]

```