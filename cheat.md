
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

## Regarding map data structure
```js
// You're not getting a simple array — you're getting a Map Iterator.
map.keys()     // => Map Iterator over keys
map.values()   // => Map Iterator over values
map.entries()  // => Map Iterator over [key, value] pairs

// Now you can do these things on it
for (const key of map.keys()) {
    console.log(key);
}
const keys = [...map.keys()];
const values = [...map.values()];
const entries = [...map.entries()];

const iter = map.keys();
console.log(iter.next()); // { value: firstKey, done: false }
console.log(iter.next()); // { value: secondKey, done: false }
// Eventually: { value: undefined, done: true }

for (const key of map.keys()) {
    console.log("Over Iterator", key);
}


const map = new Map()
map.set(-1, 13)
map.set(1, 434)
map.set(-5, "Ehlo")
map.set(10, "papa")
map.set(0, 35)

const ans = map.keys()
console.log(ans)
// console.log("But you can also spread it into array", [...ans]) 
let next = ans.next();

while (!next.done) {
    console.log("Keys", next.value);
    console.log("Status: ", next.done)
    next = ans.next(); // advance only once
}
/**
 * [Map Iterator] { -1, 1, -5, 10, 0 }
Keys -1
Status:  false
Keys 1
Status:  false
Keys -5
Status:  false
Keys 10
Status:  false
Keys 0
Status:  false
*/

```