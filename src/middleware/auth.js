const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];   
    if(! token) token= req.headers["x-auth-token"];
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
  
  let decodedToken = jwt.verify(token, "lithium-sheetal");
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
    req.loggedId = decodedToken.userId;
  next()
} catch (err){
    res.send({msg:"Accessv Denied"});
}
};


const authorise = function(req, res, next) {
     let checkAuthorise = req.params.userId;
     if(checkAuthorise !== req.loggdId){
        return res.status(404).send({msg: "oooh!you are not valid user"});
     }
    next()
};



module.exports.authenticate = authenticate;
module.exports.authorise = authorise;