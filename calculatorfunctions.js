var num1 = 0 // The first number the user enters
var num2 = 0 // The second number the user enters
var swap = false
var op = "+"
var sinceOperated = 0
function changeOp(op) {
    this.op = op
    swap = true;
    sinceOperated++
}
function operate(aNum1, aNum2) {
    x = parseFloat(aNum1)
    y = parseFloat(aNum2)

    if (isNaN(x) || isNaN(y)) {
        if (isNaN(x) && isNaN(y)) {
            //document.getElementById("outputText").innerHTML = "ERROR"
            reset()
        } else {
            //document.getElementById("outputText").innerHTML = "ERROR"
            reset()
        }
        return 0;
    }
    if (op == "+") {
        output = x + y;
    } else if (op == "-") {
        output = x - y;
    } else if (op == "/") {
        output = x / y;
    } else if (op == "*") {
        output = x * y;
    }
    num1 = output
    num2 = 0
    if (Math.abs(output).toString().length >= 9) {
        if (Math.abs(output).toString().indexOf(".") <= 7) {
            output = parseFloat(output.toString().substring(0, 8))
            document.getElementById("outputText").innerHTML = output
        } else {
            document.getElementById("outputText").innerHTML = "Too long"
            sleep(2000).then(() => { reset(); });
        }
    } else {
        document.getElementById("outputText").innerHTML = output.toString()
    }
    sinceOperated = 0
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setNum(num) {
    if (!swap) {
        if (Math.abs(num1).toString().length >= 8) {
            return
        }
    } else {
        if (Math.abs(num2).toString().length >= 8) {
            return
        }
    }
    if (sinceOperated == 0) {
        reset()
        sinceOperated++
    }
    if (!swap) {
        num1 = parseFloat(num1.toString() + num.toString())
        document.getElementById("outputText").innerHTML = num1.toString()
    } else {
        num2 = parseFloat(num2.toString() + num.toString())
        document.getElementById("outputText").innerHTML = num2.toString()
    }
}
function reset() {
    num1 = 0
    num2 = 0
    swap = false
    document.getElementById("outputText").innerHTML = 0
}