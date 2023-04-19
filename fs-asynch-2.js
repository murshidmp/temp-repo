const { readFile, writeFile} = require ('fs');


console.log (`start`);
readFile ('./sub-folder/first.txt', 'utf-8', (err,result) =>{

    if ( err ){
        console.log(err);
        return
    }
    const first = result;
    readFile ('./sub-folder/content/second.txt', 'utf-8', (err, result) =>{

        if (err){
            console.log (err);
            return
        }
        const second = result;
        writeFile ('./sub-folder/result_async.txt',`Here is the result : ${first}, ${second}`, (err, result) =>{

            if (err){
                console.log (err);
                return 
            }
            console.log (`done with the task`);
        });
    });
});

console.log (`Start the next task`);