var decompressRLElist = function (nums) {
    let array = [];
    let index = 0;
    while (index < nums.length) {
        if (index % 2 === 0) {
            let repeat = 0;
            while (repeat < nums[index]) {
                array.push(nums[index + 1]);
                repeat++;
            }
            index += 2;
        }
    }
    return array;

};

//wrong because it splits more all numbers
var decompressRLElist = function (nums) {
    let array = [];
    let index = 0;
    while (index < nums.length) {
        if (index % 2 === 0) {
            let str = nums[index + 1].toString().repeat(nums[index]).split("");
            array = array.concat(str);
        }
        index += 2;
    }
    return array;

};

console.log(decompressRLElist([1, 1, 2, 3]));
