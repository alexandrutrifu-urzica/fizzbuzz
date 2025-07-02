import * as Collections from 'typescript'

function printResult(result: Array<string>, reverse: boolean) {
    let tempResult = reverse ? result.reverse() : result

    for (let entry of tempResult) {
        process.stdout.write(entry)
    }

    console.log()
}

// const maxNumber = parseInt(prompt("Enter upper limit: "))

for (let index = 1; index <= 255; index++) {
    let ok = false
    let result: Array<string> = []
    let reverse = index % 17 == 0

    if (index % 11 == 0) {
        if (index % 13 == 0) {
            result.push("Fezz")
        }

        result.push("Bong")
        printResult(result, reverse)
        continue
    }

    if (index % 3 == 0) {
        result.push("Fizz")
    }

    if (index % 13 == 0) {
        result.push("Fezz")
    }

    if (index % 5 == 0) {
        result.push("Buzz")
    }

    if (index % 7 == 0) {
        result.push("Bang")
    }

    if (result.length == 0) {
        console.log(index)
        continue
    }

    printResult(result, reverse)
}