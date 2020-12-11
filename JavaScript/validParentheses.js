var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    let char = s.split('');
    let stack = [];
    for (let c of char) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    return stack.length === 0;

};
