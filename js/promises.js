let promise = new Promise(function (resolve, reject) {
    // The executor function runs automatically when the promise is constructed
    console.log("Executing asynchronously");

    setTimeout(() => resolve("done"), 1000);
    // state -> fulfilled, result -> "done"
});

promise.then(
    (result) => console.log(result),
    (error) => console.log(error)
);