function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <= n; i++) {
        let string = "";
        i % 3 === 0 ? string += "Fizz" : null;
        i % 5 === 0 ? string += "Buzz" : null;
        string === "" ? string = i : null;
        console.log(string);
    }
}
