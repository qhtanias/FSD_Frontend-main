try {
    console.log("Start of try block");
    lalalalala;   // ReferenceError: lalalalala is not defined

    console.log("End of try block (never reached)");
} catch (err) {
    console.log("Error has occurred!");
}