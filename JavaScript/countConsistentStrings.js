//use regex to find take the inputted allowed letters and look for strings where there is not a match
//count++ when the is not a match with the listed letters

var countConsistentStrings = function(allowed, words) {
    const regex = new RegExp(`[^${allowed}]`);
    let count = 0;
    for (let i = 0; i < words.length; ++i) {
        if (!regex.test(words[i])) {
            count++;
        }
    }
    return count;
};