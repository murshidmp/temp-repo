let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_is_open = true;



async function order () {
    try {
        await abc;
    }
    catch (error){
        console.log (`abc doesnot exist `, error)
    }
    finally {
        console.log (` runs code anyways`);
    }

}

order ();