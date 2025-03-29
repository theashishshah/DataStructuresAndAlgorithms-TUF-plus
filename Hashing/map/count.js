const arr = [1, 2, 3, 4, 1, 1, 2, 8]
// count how many times each number occures using map data structure

const mapOne = new Map()

arr.forEach(ele  => {
    if(mapOne.has(ele)){
        mapOne.set(ele, mapOne.get(ele) + 1)
    }else{
        mapOne.set(ele, 1)
    }
    
});
// console.log(mapOne)
// console.log(Array.from(mapOne))

// mapOne.forEach((val, key, map) =>{
//     // console.log(map)
//     console.log("Value: ", val)
//     console.log("Key: ", key)
// })

mapOne.forEach(ele => console.log("Kuchh to: ", ele))