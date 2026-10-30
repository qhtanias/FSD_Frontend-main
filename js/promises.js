let promise = new Promise(function (resolve, reject) {
    //the function will get automatically executed when the promise is constrcuted!
    setTimeout(() => resolve("done") , 10 );

});