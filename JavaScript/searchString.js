var strStr = function(haystack, needle) {

    if(haystack === "" && needle !== "") {return 0}
    if(haystack.includes(needle)) {
        return haystack.indexOf(needle[0]);
    } else {
        return -1;
    }
};
