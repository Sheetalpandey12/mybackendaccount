const author1Model= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await author1Model.create(data)   
    res.send({msg: savedData})
}

const getAuthorData= async function (req, res) {
    let allUsers= await author1Model.find()
    res.send({msg: allUsers})
}


module.exports.createAuthor=createAuthor
module.exports.getAuthorData= getAuthorData