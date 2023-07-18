const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{
  try {
        const user = await userModel.create(req.body)
        res.status(201).send({status : true , data : user})

  } catch (error) {
        res.status(500).send({status: false, message : "Internal server error"})
  }
}

const login = async (req,res)=>{
  try {
        const user = await userModel.findOne(req.body)
       
        if(!user){
            return res.send({status : true, data : 'user not found'})
        }
      let token = jwt.sign({userId : user._id.toString()}, 'SECRET_KEY', {expiresIn : "24h"})
      // console.log(token)
        res.cookie('x-api-key', token
        )
        // console.log(res)
      return   res.status(200).send({status : true , data : user, token : token})

  } catch (error) {
    console.log(error.message)
        res.status(500).send({status: false, message : "Internal server error"})
  }
}


module.exports = {register, login}