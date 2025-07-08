class Solution {
    bellman_ford(n, edges, source) {
      const dist = Array(n).fill(1e9);
      dist[source] = 0;
      for (let i = 0; i < n - 1; i++) {
        for (const [from, to, weight] of edges) {
          if (dist[from] !== 1e9 && dist[from] + weight < dist[to]) {
            dist[to] = dist[from] + weight;
          }
        }
      }
  
      // now you've found the sortest path
      // try to get negative cycle
  
      for (const [from, to, weight] of edges) {
        if (dist[from] !== 1e9 && dist[from] + weight < dist[to]) return [-1];
      }
  
      return dist;
    }
  }
  