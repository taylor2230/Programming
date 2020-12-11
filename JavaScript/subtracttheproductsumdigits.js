var subtractProductAndSum = function(n) {
    n = n.toString();
    let i = 0;
    let sum = 0;
    let product = 1;
    while(i < n.length) {
        sum += parseInt(n[i]);
        product *= n[i];
        i++;
    }
    return product - sum;
};


console.log(subtractProductAndSum(234));
