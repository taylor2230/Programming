var removeDuplicates = function(nums) {
    //use native filter function, n is the value, index is the index of the number BUT it creates a new array
    return (nums.filter((n, index) => nums.indexOf(n) === index)).length;
};

var removeDuplicates2 = function(nums) {
    //iterates through array and removes based on next element matching
    nums.forEach(i => {
        let cnt=1;
        while(nums[nums.indexOf(i)] === nums[nums.indexOf(i)+cnt]) {
            nums.splice(nums.indexOf(i)+cnt, 1);
        }
    });
    return nums.length;
};

