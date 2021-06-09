const express = require('express');
const members = require("../../Members");
const router = express.Router();

// get members
router.get("/", (req, res) => {
    res.json(members);
})
// get member by name
router.get("/:name", (req, res) => {
    const found = members.some(member => member.name == req.params.name); // true or false

    if(found){
        res.json(members.filter(member => member.name == req.params.name));
    }
    else{
        res.status(400).json({msg: "Member not found!"});
    }
})

// router.post("/", (req, res) => {

// });


module.exports = router;