const {writeFile, writeFileSync, appendFile} = require('fs')

const newContent = 'This is some new text'

writeFile('text.txt', newContent, (err) => {
    if(err){
        console.error(err)
        return;
    }
    console.log("Content Written")
})

appendFile('text.txt', newContent, (err) => {
    if(err){
        console.error(err)
        return;
    }
    console.log("Content Written")
})