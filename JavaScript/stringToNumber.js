var myAtoi = function(str) {
    return parseInt(str.replace(/[^0-9, -]/g, ''));
};
