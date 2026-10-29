function fun() {
    var x = 10;
    //console.log(x);   // 10
    x = 50;              // reassign instead of re-declaring (cleaner)
    //console.log(x);   // 50

    if (20 == x) {       // this will NOT run since x = 50
        let y = 30;
        x = x + 20;
        console.log(y);  // 30

        let variable1 = 10;          // use 'let' since we reassign
        variable1 = variable1 + 10;
        console.log(variable1);      // 20
    }
}

fun();