var isPalindrome = function(x) {
    return x.toString().toLowerCase() == x.toString().toLowerCase().split('').reverse().join('');
};
