let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_is_open= true;

let order = function(time, work){
    return new Promise ((resolve, reject)=>{
        if (is_shop_is_open){
            setTimeout(()=>{
                resolve ( work() );
            }, time)
            
        }else{
            reject (console.log ("the shop is closed"));
        }
    })
        
}

order ( 2000, ()=>{
        console.log( `${stocks.Fruits[0]} was selected`)
})

.then (()=>{

    return order (0000,()=>{
        console.log(`"production has started"`)
    })
})
 

.then ( () =>{
    return order (3000, () =>{
        console.log (`" ${ stocks.toppings[1]} toppings added "`)
    })
})