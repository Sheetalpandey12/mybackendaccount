const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {  
  let data = req.body
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) { 
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
    },
    "lithium-sheetal"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};


const getUserData = async function (req, res) {
      let token = req.headers["x-Auth-token"];
      if (!token) token = req.headers["x-auth-token"];
    
      //If no token is present in the request header return error
      if (!token) return res.send({ status: false, msg: "token must be present" });
    
      console.log(token);
      
    
      let decodedToken = jwt.verify(token, "lithium-sheetal");
      if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
    
      res.send({ status: true, data: userDetails });
     };



const updateUser = async function (req, res) {
 let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send({status:false,msg:"No such user exists"});
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: true , data: updatedUser });
};
     


const postMessage = async function (req, res) {
    let user = await userModel.findById(req.params.userId)
   const message = req.body.message;
    const updatedPosts = user.posts
    updatedPosts.push(message)
    const updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
     return res.send({status: true, data: updatedUser})
}

const deletedData = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");   
  }

  let updatedData = await userModel.findOneAndUpdate({ _id: userId },{isDeleted:true},{new:true});
  res.send({ status:true, data:updatedData }); 
};






module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports. deletedData= deletedData;

