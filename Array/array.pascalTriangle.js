function nCr(n, r){
    if((n === 0 && r === 0 || (n === 0 && r === 1) || (n ===1 && r === 0))) return 1

    let result = 1;
    for(let i = 0; i < r; i++){
        result *= (n - i)
        result /= (i + 1)
    }

    return result
}

console.log(nCr(3, 1))