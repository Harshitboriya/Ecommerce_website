const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path =require("path");
const cors = require("cors");

const port =4000;


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://harshitboriya02:Harshit@123@cluster0.h1z9y7t.mongodb.net/");



app.get("/",(req,res)=>{
    res.send("express is runing");
})




// const storage = multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Data.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// //create upload endpoijnt
// app.use("/images",express.static('upload/images'));

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })

// })


// const Product =mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     },
//     category:{
//         type:String,
//         required:true

//     },
//     new_price:{
//         type:Number,
//         required:true
//     },
//     old_price:{
//         type:Number,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now()
//     },
//     avilable:{
//         type:Boolean,
//         default:true
//     },


// }) 

// app.post('/addproduct',async(req,res)=>{
//     let products =await Product.find({});
//     let id;
//     if(products.length>0)
//         {
//             let last_product_array=products.slice(-1);
//             let last_product=last_product_array[0];
//             id =last_product.id+1;

//         }
//         else{
//             id=1;
//         }
//     const product =new Product({     //created
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,

//     })
//     console.log(product);
//     await product.save()   //Save in db
//     console.log("Saved");   //mess
//     res.json({             //res
//         success :true,  
//         name:req.body.name,

//     })
// })



// app.post("/removeproduct",async(req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })


// app.get("/allproduct",async (req,res)=>{
//     let products = await Product.find({});
//     console.log("All product fetch");
//     res.send(products);
    

// })

// const Users=mongoose.model('Users',{
//     name:{type:String},
//     email:{
//         type:String,
//         unique:true
//    },
//     password:{
//         type:String
//     },
//     cartData:{
//         type:Object
//     },
//     date:{
//         type: Date,
//         default:Date.now,
//     },


// })


// app.post("/signup",async(req,res)=>{
//     let check =await Users.findOne({email:request.body.email});
//     if(check){  
//         return res.status(400).json({success:false,error :"existing user found with same emai; address"});

//         }
//         let cart ={}
//         for(let i=0;i<300;i++)
//             {
//                 cart[i]=0;

//             }
//             const user =new Users({
//                 name:req.body.name,
//                 email:req.body.email,
//                 password:req.body.password,
//                 cartData:cart

//             })
//             await user.save();
//             const data={
//                 user:{
//                     id:user.id
//                 }

//             }
//             const token = jwt.sign(data,'secret_ecom');
//             res.json({success:true,token:token})


// })


// //create endpoint for user login 
// app.post("/login",async(req,res)=>{
//     let user =await Users.findOne({email:req.body.email});
//     if(user){
//         const passCompare = req.body.password===user.passwordl
//         if(passCompare){
//             const data={
//                 user:{
//                     id:user.id
//                     }
//                 }
//                 const token =jwt.sign(data,'secret_ecom');
//                 res.json({success:true,token:token})
//             }
//             else{
//                 res.json({success:false,errors:"wrong password"});

//             }
//     }
//     else{
//         res.json({success:false,errors:"wrong email id"})
//     }
// })

 
app.listen(port,(e)=>{
    if(!e)
        {console.log(`server runin on port ${port}`) }
    else{
        console.log(e);
    }
})


