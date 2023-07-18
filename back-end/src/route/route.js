const express = require('express')

const router = express.Router()
const {register, login} = require('../controller/userController')



router.get("/", (req,res)=>{
    res.send("all ok ")
})


router.post("/register", register)
router.post('/login', login)


module.exports = router