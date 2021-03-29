/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    if (s.length <= 1) {
        return 0;
    }

    let depth = 0,
        maxFound = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            depth++;
            maxFound = depth > maxFound ? maxFound = depth : maxFound;
        } else if (s[i] === ")") {
            depth--;
        }
    }
    return maxFound;
};