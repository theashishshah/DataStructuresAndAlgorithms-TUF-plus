/**
 *
 * still didn't get the exact logic but got the some idea: what im thinking is:  we're maintaining high to see what's the highest numbe of opening bracket we can see through the entire string, and we're maitaining low to see how many we're current opening bracket as we proceed, am I on the right track? but whenever we are encountering *, it can be ( or ) or "", but if * is (, then as we're taking care highest seen opening bracket by high, so we've to add one more to it, and if it is ), then as we're taking care of current opening bracket using low, we've to decrease by one, right? but our current opening bracket (low) can't go beyong 0, if that's case where it is going beyond zero, we'll treat astrick as "", am I on the right track? and make low to zero
 */

/**
 * okay, so we're maintaining low to see at any point of the string, how many min possible open bracket we could hvae  cuz if we encounter any closing bracket before this point low will be decreaee, right? and to see how many open bracket we could possibly have at any point of the string, we're using high, right?
 */

function isValid(s) {
    if (s.length === 1) return false;
    let low = 0;
    let high = 0;
    for (const ch of s) {
        if (ch === '(') {
            low++;
            high++;
        } else if (ch === ')') {
            low--;
            high--;
        } else {
            low--;
            high++;
        }
        if (high < 0) return false;
        if (low < 0) low = 0;
    }

    return low === 0;
}

/**
 * give your tought process later on here: 
 */