const express = require("express")
const app = express();
const jwt = require ("jsonwebtoken")


app.use (express.json());




//creating middleware to fetch user
const fetchUser = async (req, res, next)=>{
    // storing auth-token in the token variable
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors: 'please authenticate using valid token'})
    } else{
        try{
            const data = jwt.verify(token, process.env.JWT_SECRET_WORD);
            req.user = data.user;
            next();
        }catch(error){
res.status(401).send({errors:'please authenticate using valid token '})
        }
    }
}

module.exports = fetchUser;