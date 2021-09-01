#!/usr/bin/env node

const ObjectReader = require('./reader/object.js');
const fs = require('fs')
const Path = require('path') ;
const acorn = require("acorn");
const { argv } = require('process');

var args = process.argv.slice(2);
if(args[0]){
    const path = Path.join(__dirname, args[0])
    if(fs.existsSync(args[0]) ){
        var file=fs.readFileSync(args[0]).toString()
        var reader2 = new ObjectReader();
        var news = reader2.read(acorn.parse(file, {ecmaVersion: 2020}))
        if(args[1]){
            fs.writeFileSync( args[1], JSON.stringify(news, null, 2) , 'utf-8');
    
        }else{
            fs.writeFileSync('output.json', JSON.stringify(news, null, 2) , 'utf-8'); 
        }
        
    }else{
        console.log('Entered file is not found')
       
    }
     

}else{

    console.log('File name is Empty or Please enter a valid file name')

}



