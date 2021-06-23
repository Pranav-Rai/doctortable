const mongoose = require('mongoose') 
const DB = process.env.DATABASE


mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`connection successful`)
}).catch((err)=>console.log('connection failed'))