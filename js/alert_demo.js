function pow(base, exponent){
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let base = prompt("Enter base number: ");
let exponent = prompt("Enter exponent number: ");
let output = pow(base, exponent);
alert("Result: " + output);