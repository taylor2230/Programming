function minMoves(arr) {
    let cnt = 0, len = arr.length, cntZero = new Array(len);
    cntZero.fill(0, 0, len)
    console.log(cntZero);
    cntZero[len - 1] = 1 - arr[len - 1];
    for(let i = len - 2; i >= 0; i--) {
        cntZero[i] = cntZero[i+1];
        if(arr[i] === 0) {
            cntZero[i]++;
        }
    }
    console.log(cntZero);
    for(let i = 0; i < len; i++) {
        arr[i] === 1 ? cnt += cntZero[i] : null;
    }
    return cnt;
}

console.log(minMoves([0, 1, 0, 1]));
