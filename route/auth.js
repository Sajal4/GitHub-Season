const exp = require("express").Router()
const users=require("../db")
const {check,validationResult}= require("express-validator");
const bcrypt= require("bcrypt");
const { Router } = require("express");
const jwtToken= require("jsonwebtoken")

exp.post('/signup',[
    check("email","Please provide a valid mail")
    .isEmail(),
    check("password","Please provide a valid password of 6 charector")
    .isLength({
        min:6
    })
],async(req,res)=>{
    const{email,password} = req.body
    // validating email & password
    const err= validationResult (req)
    if (!err.isEmpty()) {
        return res.status(400).json({err:err.array()});
    }
    // validate if user is esist or not
    let user = users.find((user)=>{
        return user.email==email;
    })
    if (user) {
        return res.status(400).json({
            "errors": [
                { "msg":"Already exsisted" }
            ]
        });
    }
    const hasedPassword= await bcrypt.hash(password,10)
    console.log(hasedPassword);
    users.push({
        email,
        password:hasedPassword
    })
    const token = await jwtToken.sign({
        email,

    },"1234567890",{
        expiresIn: 36000
    })
    res.json({
        token
    })
    // console.log(email,password)
    // res.send("Auth is working")
});
    
    exp.post ("/login",async (req,res)=>{
        const {password, email}=req.body;

        let user= users.find((user)=>{
            return user.email===email;

        })
        if (user) {
            return res.status(400).json({
                "errors": [
                    { "msg":"Invalid Cradential, Please try to reguster" }
                ]
            });
        }
        let match = await bcrypt.compare(password,user.password)
    if (user) {
        return res.status(400).json({
            "errors": [
                { "msg":"Already exsisted" }
            ]
        });
    }
    const token = await jwtToken.sign({
        email,
    },"1234567890",{
        expiresIn: 36000
    })
    res.json({
        token
    })

})
    
exp.get("/All",(req,res)=>{
    res.json(users)
})
module.exports = exp;

