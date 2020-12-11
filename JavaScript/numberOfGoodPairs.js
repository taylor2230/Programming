var numIdenticalPairs = function(nums) {
    let cnt = 0;
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        let pos = i+1;
        while(pos < len) {
            nums[i] === nums[pos] ? cnt++ : null;
            pos++;
        }
    }

    return cnt;
};
