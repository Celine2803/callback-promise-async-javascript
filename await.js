let stocks={
    fruits:["strawberry","lemon","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let is_shop_open=false;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    });    
}

async function kitchen(){
    try{

        await time(2000)
        console.log(`${stocks.fruits[0]}`);

        await time(0000)
        console.log("production started");

        await time(2000)
        console.log("Fruit is chopped");

        await time(1000)
        console.log("added water and ice");

        await time(1000)
        console.log("machine is started");

        await time(2000)
        console.log("container ");

        await time(3000)
        console.log("toppings selected");

        await time(2000)
        console.log("ice cream selected");
    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("shop is closed")
    }
} 
kitchen()