for (var index = 1; index <= 100; index++) {
    var cond1 = index % 3 == 0;
    var cond2 = index % 5 == 0;
    if (cond1 && cond2) {
        console.log("FizzBuzz");
        continue;
    }
    console.log(cond1 ? "Fizz" : (cond2 ? "Buzz" : index));
}
