function getNumberOfOptions(priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops, budgeted) {
    if(priceOfJeans.length === 0 && priceOfShoes.length === 0 && priceOfSkirts.length === 0 && priceOfTops.length === 0) {
        return 0;
    }

    if(budgeted === 0) {
        return 0;
    }

    let combo = 0;
    for (let i = 0; i < priceOfJeans.length; i++) {
        for (let j = 0; j < priceOfShoes.length; j++) {
            for (let k = 0; k < priceOfSkirts.length; k++) {
                for (let l = 0; l < priceOfTops.length; l++) {
                    (priceOfJeans[i] + priceOfShoes[j] + priceOfSkirts[k] + priceOfTops[l]) <= budgeted ? combo++ : null;
                }
            }
        }
    }
    return combo;
}

console.log(getNumberOfOptions([2,3],[4],[2,3],[1,2],10));
