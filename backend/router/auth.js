const express = require('express');
const router = express.Router();

require('../db/conn')
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send(`hello from server`)
})

router.post('/register', (req, res) => {

    const {name, email, phone, password, cpassword} = req.body

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error : "plz fill the remaining field"})
    }

    User.findOne({email:email})
    .then((employeeExist) => {
        if(employeeExist){
            return res.status(422).json({error : "Employee already exist"})
        }

        const user = new User({name, email, phone, password, cpassword})

        user.save().then(() => {
            res.status(201).json({message : "user register successsfuly"})
        }).catch((err) => res.status(500).json({error : "Failed to register"}))
        
    }).catch(err => { console.log(err)})
})

module.exports = router