 
const jwt= require('jsonwebtoken')
 

const auth= async (req, res, next) => {
    try {
        const token= req.cookies['x-api-key']
        if(!token){
            return res.status(401).send({
                status: false,
                message: 'Unauthorized'
            })
        }

        jwt.verify(token, "SECRET_KEY", (err, decoded) => {
            if(err){
                return res.status(403).send({
                status: false,
                message: 'Unauthorized'
            })}else{
                req['x-api-key']= decoded.userId
                next()
            }
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            error: error.message
        })
    }
}

module.exports= {auth}