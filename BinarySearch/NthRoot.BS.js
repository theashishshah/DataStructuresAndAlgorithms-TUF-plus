function  NthRoot(n, m) {
    for(let i = 1; i < m; i++){
          const ans = Math.pow(i, n)
          if(ans === m){
              return i
          }
          if(ans > m) break
    }
    return -1
  }
  console.log(NthRoot())
