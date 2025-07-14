class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.rank = new Array(n).fill(0)
    }

    ultimateParent(node) {
        if (this.parent[node] === node) return node
        return this.parent[node] = this.ultimateParent(this.parent[node])
    }

    unionByRank(u, v) {
        const pu = this.ultimateParent(u)
        const pv = this.ultimateParent(v)
        if (pu === pv) return
        if (this.rank[pu] < this.rank[pv]) this.parent[pu] = pv
        else if (this.rank[pv] < this.rank[pu]) this.parent[pv] = pu
        else {
            this.parent[pu] = pv
            this.rank[pv]++
        }
    }
}

class Solution {
    accountsMerge(accounts) {
        const n = accounts.length
        const djSet = new DisjointSet(n)
        const map = new Map()

        // go and add mail into map ds
        for (let i = 0; i < n; i++) {
            // iterate over mail
            for (let j = 1; j < accounts[i].length; j++) {
                let mail = accounts[i][j]
                if (!map.has(mail)) map.set(mail, i)
                else {
                    djSet.unionByRank(i, map.get(mail))
                }
            }
        }

        // get the merged mail
        const mergedMails = Array.from({ length: n }, () => [])
        for (const [mail, node] of map.entries()) {
            const parent = djSet.ultimateParent(node)
            mergedMails[parent].push(mail)
        }

        // now i've like this: 
        // [ [a1, a2, a2]
        //   [],
        //   [j1, j1],
        //   [s2, s3, g2]
        //]
        const ans = []
        for (let i = 0; i < n; i++) {
            if (mergedMails[i].length === 0) continue
            mergedMails[i].sort()
            const temp = [accounts[i][0], ...mergedMails[i]]
            ans.push(temp)
        }
        return ans
    }
}



/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.size = new Array(n).fill(1)
    }

    ultimateParent(node) {
        if (this.parent[node] === node) return node
        return this.parent[node] = this.ultimateParent(this.parent[node])
    }

    unionBySize(u, v) {
        const pu = this.ultimateParent(u)
        const pv = this.ultimateParent(v)
        if (pu === pv) return
        if (this.size[pu] < this.size[pv]) {
            this.parent[pu] = pv
            this.size[pv] += this.size[pu]
        } else if (this.size[pv] < this.size[pu]) {
            this.parent[pv] = pu
            this.size[pu] += this.size[pv]
        } else {
            this.parent[pu] = pv
            this.size[pv] += this.size[pu]
        }
    }

}

var accountsMerge = function (accounts) {
    const n = accounts.length
    const set = new DisjointSet(n)
    const map = new Map()
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const mail = accounts[i][j]
            if (!map.has(mail)) map.set(mail, i)
            else set.unionBySize(i, map.get(mail))
        }
    }

    // now merge the mail that belongs to the same person
    const mergedMails = Array.from({ length: n }, () => [])
    for (const [mail, node] of map.entries()) {
        // find the parent of the mail 
        const parent = set.ultimateParent(node)
        mergedMails[parent].push(mail)
    }

    // now you've list of merged mails, add them with account holder name

    const ans = []
    for (let i = 0; i < n; i++) {
        if (mergedMails[i].length === 0) continue
        mergedMails[i].sort()
        const temp = [accounts[i][0], ...mergedMails[i]]
        ans.push(temp)
    }
    return ans
};