const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const validationToken= require("../midddleware/middlewareauth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)  

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",validationToken.Authentication, userController.getUserData)

router.put("/users/:userId",validationToken.Authentication, userController.updateUser)

router.delete("/users/:userId",validationToken.Authentication, userController.deletedData )


module.exports = router; 