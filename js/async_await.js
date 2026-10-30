async function fun() {
    console.log("Having fun")
    return -1;
    
}
fun().then(console.log("After fun has finished executing, I am getting printred"));