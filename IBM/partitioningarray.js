function partitionArray(k, numbers) {
    //step 1: check if array is empty or k = 1 return true
    //step 2: check if the k is larger than the array or if there is a remainer
    //step 3: based on k check if numbers can be split uniquely,sort the array for easy counting
    //step 4: take the number of counts of each element and determine if there are combinations

    if(k === 1 || numbers.length === 0) {
        return "Yes";
    } else if(k > numbers.length || numbers.length%k) {
        return "No";
    }

    numbers.sort();
    let array = [], pos = 0, prev = numbers[0];
    for(let i = 0; i < numbers.length;i++) {
        if(i === 0) {
            array[pos] = 1;
        } else if(numbers[i] === prev) {
            array[pos]++;
        } else {
            pos++;
            array[pos] = 1;
            prev = numbers[i];
        }
    }
    let groupNumber = Math.floor(numbers.length / k);
    if(groupNumber < Math.max(...array)) {
        return "No"
    }
    return "Yes"
}

console.log(partitionArray(3, [4, 8, 8, 8, 6, 4]))
