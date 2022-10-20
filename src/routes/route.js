const { json } = require('express');
const express = require('express');
const router = express.Router();



let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]


router.post("/player", function (req, res) {

    let obj = req.body.element

for(i of players){
    if (i.name == obj.name) {
         return res.send({ msg: "name already exits" })
    }}
    
        players.push(obj)
        console.log(obj)
        res.send({ msg: players, status: true })
    
})


module.exports = router;