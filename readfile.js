const fs = require('fs')

//asynch
fs.readFile('text.txt', (err, data) => 
{
    //callbackfunction in queue
    if(err){
        console.error(err);
        return;
    }
    console.log(data.toString());
})

