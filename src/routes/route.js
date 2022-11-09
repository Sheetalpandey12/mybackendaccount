const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midd = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});

router.post("/users", userController.createUser); 

router.post("/login", userController.loginUser);   

//The userId is sent by front end  
router.get("/users/:userId",midd.Authentication,midd.authorization, userController.getUserData);
router.post("/users/:userId/posts",midd.Authentication,midd.authorization,userController.postMessage);

router.put("/users/:userId",midd.Authentication,midd.authorization, userController.updateUser);

module.exports = router;    