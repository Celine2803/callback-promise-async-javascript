function one(call_two){
    call_two()
    console.log("This is step one");


}
function two(){
    console.log("This is step two");
}
one(two);

// Another example
let order=(call_production)=>{
    console.log("Order has arrived start production");
   call_production() 
}
let production=()=>{
    console.log("Production has started");
}
order(production)

//Example2
let stocks={
    fruits:["strawberry","lemon","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let order1=(Fruit_name,call_production1)=>{
    setTimeout(() => 
    {console.log(`${stocks.fruits[Fruit_name]} was selected`);
    call_production1();//placing it inside the setTimeout of the first one to neable to run after fruit is selected.
},2000);
    
};
let production1=()=>{
    setTimeout(()=>{
        console.log("production has started on the selected fruit");
        
    setTimeout(()=>{
        console.log("the fruit has been chopped");

    setTimeout(()=>{
         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            
    setTimeout(()=>{
        console.log("started the machine");

    setTimeout(()=>{
        console.log(`ice cream has been placed in the ${stocks.holder[1]} `);

    setTimeout(()=>{
        console.log(`${stocks.toppings[1]} has been added`);

    setTimeout(()=>{
        console.log("Ice cream has been served")
    },1000)
    },3000)
    },2000)
          },1000)        
             },1000)
          },2000)
        },0000);
    
    };
    
order1(0,production1)



    
