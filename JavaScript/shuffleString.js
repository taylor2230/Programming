var restoreString = function(s, indices) {
    let word = Array(indices.length).fill(0);
    for(let i = 0; i < indices.length; i++) {
        word[indices[i]] = s[i];
    }
    return word.join("");
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
