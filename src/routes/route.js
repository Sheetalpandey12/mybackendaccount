const express = require('express');
const router = express.Router();


// let player =
// {
//     "name": "manish",
//     "dob": "1/1/1995",
//     "gender": "male",
//     "city": "jalandhar",
//     "sports": [
//     "swimming"
//     ]
//     }
//     ,
//     {
//         name : "manish",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "jalandhar",
//         "sports": [
//         "swimming"
//         ]
//         }

// problem 1
// -write an api which gives the missing number in an array of integers starting 
// from 1….e.g [1,2,3,5,6,7] answer = 4 is missing

//      router.get("/solution", function (req, res) {
//          let arr= [1,2,3,5,6,7]
//          expectedNumber = arr.length+1;    // 6+1 = 7
//          totalSum = expectedNumber*(expectedNumber+1)/2; //  7*7+1/2 = 28   n(n+1)/2
//           console.log(totalSum);
//          let sum = 0;
//          for(let i=0;i<arr.length;i++){
//             sum = sum +arr[i]
//          }
//          console.log(sum)   // 1+2+3+5+6+7 =24 
// ///LOGIC WILL GO HERE
//         res.send( {" missing number is": + totalSum - sum } );
// });




Q2.
// -write an api which gives the missing number in an array of integers
// starting from anywhere….e.g [33,34, 35, 37, 38]: 36 is missing

router.get("/solution2", function (req, res) {
//logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
//numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
let arr= [33, 34, 35, 37, 38]
    let n = arr.length+1;    // 5+1 = 6
     totalSum = (arr[0]*+arr[arr.length-1])*n/2   /// // no(no+1)/2  = 213
            console.log(totalSum);
                     let sum = 0;
          for(let i=0;i<arr.length;i++){
            sum = sum +arr[i]   
         }
          console.log(sum)   // 33+34+35+37+38 = 177
// ///LOGIC WILL GO HERE
         res.send( {" missing number is": + totalSum - sum } );
 });


        











// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;