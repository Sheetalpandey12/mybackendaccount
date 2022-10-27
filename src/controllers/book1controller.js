const book1Model= require("../models/book1Model")
const author1Model= require("../models/authorModel")

const createbooks= async function (req, res) {
    let data= req.body
    let savedData= await book1Model.create(data)
    res.send({msg: savedData})
}

const getAuthorBook= async function (req, res) {
    let allUsers= await book1Model.find() 
    res.send({msg: allUsers})
}

const getAuthorBookList= async function (req, res) {
    let arr1= await author1Model.find({author_name:"Chetan Bhagat"})
    const [obj]=arr1
    let id=obj.author_id
    let allbooks=await book1Model.find({author_id:id})  
    res.send({msg: allbooks}) 
  };
    const updateBookprice= async function (req, res) { 
        let obj1= await book1Model.findOne({name:"Two states"})
        let id = obj1.author_id
        let obj2=await author1Model.findOne({author_id:id}).select({author_name:1,_id:0})
        let allbooks=await book1Model.findOneAndUpdate(
          { name:"Two states"}, 
          {$set:{price:100}},
          {new:true},
        ).select({price:1,_id:0}) 

        res.send({msg: [obj2,allbooks]})
        };
    const bookcost= async function (req, res) {
        let allbooks=await book1Model.find({price:{$gte:50,$gte:100}})
        let saveData = []

        for (index of allbooks){
            let data = await author1Model.findOne({author_id:(index.author_id)})
            .select({author_Name:1,_id:0})

            saveData.push(index)
            saveData.push(data)
        }

        res.send({msg: saveData})
    };

module.exports.createbooks= createbooks
module.exports.getAuthorBook= getAuthorBook
module.exports.getAuthorBookList=getAuthorBookList
module.exports.updateBookprice=updateBookprice
module.exports.bookcost= bookcost
