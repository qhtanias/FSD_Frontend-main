function paramDemo(a, b, c) {
    console.log("Sum:", a + b + c);   // a + b + c = 30
}

paramDemo(10, 10, 10);   // Output: Sum: 30


function opOverload(arg1, arg2) {
    // if the two args are numbers, print "Both are numbers"
    // if the two args are strings, print "Both are strings"
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return "Both are numbers";
    } else if (typeof arg1 === "string" && typeof arg2 === "string") {
        return "Both are strings";
    }
}

// Demo
console.log(opOverload(1, 2));         // Both are numbers
console.log(opOverload("a", "b"));     // Both are strings
console.log(opOverload(1, "b"));       // undefined (mixed types)