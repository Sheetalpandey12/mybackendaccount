const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logger')
//importing external package
const underscore = require('underscore')

const abc = require('../Logger/Logger')
const xyz = require('../util/helper')
const pqr = require('../validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    // //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)



//  Problem - 1
    console.log(abc.welcomefunction());

//  Problem - 2
    console.log(xyz.PrintDate());
    console.log(xyz.PrintMonth());
    console.log(xyz.getBatchInfo());

//  Problem - 3
    console.log(pqr.TrimData());
    console.log(pqr.Lowercase());
    console.log(pqr.Uppercase());
    
 //  Problem - 4

    //Q1.
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(lodash.chunk(month,3))

    //Q2.
    let OddNum = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(OddNum,9))

    //Q3.
    let Array1 =  [1,2,3]
    let Array2 =  [2,3,4]
    let Array3 =  [4,5,6]
    let Array4 =  [6,7,8]
    let Array5 =  [8,9,10]
    console.log(lodash.union(Array1,Array2,Array3,Array4,Array5))

    //Q4.
    let pairs = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
    console.log(lodash.fromPairs(pairs))



    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

