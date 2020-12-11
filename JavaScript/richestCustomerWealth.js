var maximumWealth = function(accounts) {
    let max = 0;
    accounts.forEach(element => {
        let wealth = element.reduce((a, b) => { return a + b }, 0);
        wealth > max ? max = wealth : null;
    });

    return max;
};

console.log(maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5]
]));