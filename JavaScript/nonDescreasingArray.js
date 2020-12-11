var checkPossibility = function (nums) {
    if (nums.length <= 2) {
        return true
    }
    let array = [];
    let unique = nums.filter((item, i, nums) => nums.indexOf(item) === i);
    if(unique.length < 2) {
        return true;
    } else {

    }
};

console.log(checkPossibility([3,4,2,3]));
