var searchInsert = function (nums, target) {
    if (target <= nums[0]) {
        return 0
    }
    let spot = null;
    for (let i = 0; i < nums.length; i++) {
        if (target > nums[i] && target <= nums[i + 1]) {
            spot = i + 1;
            break;
        }
    }

    return spot !== null ? spot : spot = nums.length;
};
