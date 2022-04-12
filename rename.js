const {rename} = require('fs')

rename('text.txt', 'theText.txt', (err) => {
    if(err){
        console.error(err)
        return;
    }
    console.log("Content Written")
})