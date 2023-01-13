// runs at the same time all the outputs then can delay one element by setTimeout()
console.log("I");
console.log("Take");
 setTimeout(()=>{
    console.log("show");},3000)
console.log("some");
console.log("time to");
