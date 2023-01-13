
let stocks={
    fruits:["strawberry","lemon","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let order=(time,work)=>{
    return new Promise((resolve,reject) =>
    {
        let is_shop_open=false;

if(is_shop_open){
    setTimeout(()=>{ 
        resolve(work())},time)
   
}
else{
    reject (console.log("our shop is closed"))
}
    })
};

order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))
.then(()=>{
    return order(0000,()=>console.log("Production has started"))
})

.then(()=>{
   return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then(()=>{
    return order(1000,()=>console.log("started the machine"))
})

.then(()=>{
    return order(2000,()=>console.log(`Ice Cream was put in ${stocks.holder[1]}`))
})

.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was added`))
})

.then(()=>{
    return order(2000,()=>console.log("Ice Cream is served"))
})

.catch(()=>{
    console.log("The customer went");
})

.finally(()=>{
    console.log("Day ended shop is closed");
})