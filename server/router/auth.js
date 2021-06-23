const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate')

require('../db/conn')
const User = require('../model/userSchema')

router.get('/' , (req,res)=>{
    res.send(`this is router js`)
})

router.post('/register' , (req,res)=>{
   const {name , email, phone , work , password , cpassword} = req.body
   if(!name || !email || !phone || !work || !password || !cpassword){
       return res.status(422).json({error:" plz fill all the feilds"})
   }

   User.findOne({email:email})
   .then((userExist)=>{
       if(userExist){
       return res.status(422).json({error:"user already exits"})
   } else if(password != cpassword){

    return res.status(422).json({error:"user already exits"})

   }else{

    const user = new User({name , email, phone , work , password , cpassword}) 
   user.save().then(()=>{
       res.status(201).json({message:"registration successful"})
   }).catch((err)=>res.status(500).json({error:"registration failed"}))

   }
   
}).catch(err => {console.log(err)})

})

//login method
router.post('/signin' , async(req, res)=>{
    try{
        let token;
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({error:'plz fill the form correctly'})
        }

        const userlogin = await User.findOne({email:email})

        if(userlogin){
            const isMatch = await bcrypt.compare(password , userlogin.password)
            token = await userlogin.generateAuthToken()
            console.log(token)

            res.cookie("jwtoken" , token , {
                expires : new Date(Date.now() + 25982000000),
                httpOnly:true
            })


        if(!isMatch){
          res.status(400).json({error: 'invalid credential'})
        }else{
           res.json({message : 'user Signin successful'})
        }
        }else{
            res.status(400).json({error: 'invalid credential'})
        }

        

    }catch(err){
        console.log(err)
    }

})

//about us ka page
router.get('/about' , authenticate , (req,res)=>{
    console.log('hello my about')
    res.send(req.rootUser)
})


module.exports = router