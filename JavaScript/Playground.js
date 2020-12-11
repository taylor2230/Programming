var runningSum = function (nums) {
    let sums;
    nums = nums.map(elem => sums = (sums || 0) + elem);
    return nums;
}

var shuffle = function (nums, n) {
    let x = nums.slice(0, n);
    let y = nums.slice(n, nums.length);
    let num = 0;
    let output = [];
    while (num < n) {
        output.push(x[num], y[num]);
        num++;
    }
    return output
};

var kidsWithCandies = function (candies, extraCandies) {
    let max = candies.reduce(function (a, b) {
        return Math.max(a, b)
    });
    let array = [];
    candies.forEach(elem => {
        let bool = (elem + extraCandies) >= max;
        array.push(bool);
    });

    return array;
};

var defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};

var numberOfSteps = function (num) {
    let steps = 0;
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        steps++
    }
    return steps;
};

var xorOperation = function (n, start) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(start + (2 * i));
    }
    return bit = array.reduce(function (a, b) {
        return a ^ b;
    }, 0);
};

var numJewelsInStones = function (J, S) {
    let cnt = 0;
    let jL = J.split("");
    S.split("").forEach(e => {
        if (jL.indexOf(e) !== -1) {
            cnt++
        }
    });
    return cnt;
};

var smallerNumbersThanCurrent = function (nums) {
    let array = [];
    nums.forEach(e => {
        let cnt = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < e) {
                cnt++;
            }
        }
        array.push(cnt);
    });
    return array;
};

var twoSum = function (nums, target) {
    let index = Array(2).fill(0);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            index[0] = i;
            index[1] = i + 1;
            break;
        } else {
            for (let y = i + 1; y < nums.length; y++) {
                if (nums[y] + nums[i] === target) {
                    index[0] = i;
                    index[1] = y;
                    break;
                }
            }
        }
    }
    return index;
};

var addTwoNumbers = function (l1, l2) {
    let lst1 = [];
    let lst2 = [];
    let final = [];
    let num;
    while(l1.length) {
        num=0;
        num = l1.length;
        lst1.push(l1[num]);
        num--;
    }
    while(l2.length) {
        num=0;
        num = l2.length;
        lst2.push(l2[num]);
        num--;
    }
    let sum = (parseInt(lst1.join(""))+parseInt(lst2.join(""))).toString().split("");
    while(sum.length) {
        num=0;
        num = sum.length;
        final.push(sum[num]);
        num--;
    }
    return final;
};
