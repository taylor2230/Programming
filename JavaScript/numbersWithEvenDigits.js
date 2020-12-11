var findNumbers = function(nums) {
    let cnt = 0;
    for(let i = 0; i < nums.length; i++) {
        nums[i].toString().length % 2 === 0 ? cnt++ : null;
    }
    return cnt;
};
