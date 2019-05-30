function doSomething() {
    for (var index = 0; index < 5; index++) {
        console.log(index);
    }
    console.log("Finally:", index);
}
console.log(doSomething() + "Write");
