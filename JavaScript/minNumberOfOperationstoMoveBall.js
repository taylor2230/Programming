var minOperations = function(boxes) {
    let boxArray = boxes.split("");
    let moves = [];
    boxArray.forEach((element, index) => {
        let count = 0;
        for (let i = 0; i < boxArray.length; i++) {
            if (boxArray[i] !== "0" && i !== index) {
                count = count + Math.abs(i - index);
            }
        }
        moves[index] = count;
    });

    return moves;
};