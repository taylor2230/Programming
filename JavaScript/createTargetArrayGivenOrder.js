var createTargetArray = function(nums, index) {
    let target = Array(nums.length).fill(0);
    for(let i = 0;i < nums.length;i++) {
        target.splice(index[i],0,nums[i]);
        target.splice(nums.length,1);
    }
    return target;
};
