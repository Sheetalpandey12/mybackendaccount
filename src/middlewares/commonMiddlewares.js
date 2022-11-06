let checkHeader=async function(req,res,next){
    let headers = req.headers
    let headerType = headers["isFreeAppUser"]
    if(!headerType) {
        headerType = headers["isfreeappuser"]
    } 
    if(!headerType) {
        return res.send({status: false, message: "A mandatory header is missing"})
    }

    if(headerType == 'true') {
        req.headerStatusFree = true
    } else {
        req.headerStatusFree = false
    }

    next()
}
 
    
    
module.exports.IcheckHeader= checkHeader







// const validateHeader= function ( req, res, next) {
//     //console.log(req.headers.isFreeAppUser)
//     let data=req.headers.isFreeAppUser || req.headers.isfreeappuser
//    console.log(data)
//     if(data===undefined){
//         res.send("The request is missing a mandatory header ")
//     }
//     else{
//         next()
//     }
// }
// module.exports.validateHeader=validateHeader
// // Header Validation


// const validateUserId=function(req,res,next){
//     let demoStr="61951bfa4d9fe0d34da86344"
//     let user_id=req.body['userId']
//     //let product_id=req.body['productId']
//     if(user_id.length===demoStr.length){
//         next()
//     }
//     else{
//         res.send("Invalid UserId")
//     }
// }
// module.exports.validateUserId=validateUserId
// // UserId Validation


// const validateProductId=function(req,res,next){
//     let demoStr="61951bfa4d9fe0d34da86344"
//     //let user_id=req.body['userId']
//     let product_id=req.body['productId']
//     if(product_id.length===demoStr.length){
//         next()
//     }
//     else{
//         res.send("Invalid ProductId")
//     }
// }
// module.exports.validateProductId=validateProductId
// // ProductId Validation






// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// const myMiddleware = function(req, res, next){
//     req.month = "November"
//     console.log('I am inside a middleware!')
//     next()
// }

// const myOtherMiddleware = function(req, res, next){
//     // Setting an attribute 'wantsJson' in request
//     // The header value comparison is done once and
//     // the result can be used directly wherever required.
//     let acceptHeaderValue = req.headers["accept"]

//     if(acceptHeaderValue == "application/json") {
//         req.wantsJson = true
//     } else {
//         req.wantsJson = false
//     }
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
// module.exports.myMiddleware = myMiddleware
// module.exports.myOtherMiddleware = myOtherMiddleware
