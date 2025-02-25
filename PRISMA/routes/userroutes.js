const express=require("express");
const router=express.Router();


const { PrismaClient } = require('@prisma/client');
const { sendMail } = require("../utils/sendmail");
const prisma = new PrismaClient();

router.get("/:email",async(req,res)=>{
  const {email}=req.params;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  res.json({user});
})

router.get("/",async(req,res)=>{
  try{
    let alluser=await prisma.user.findMany();
    console.log(alluser);
    res.json(alluser);
  }catch(error){
    res.json({error:error});
  }
})

router.post("/",async(req,res)=>{
     const {email,name,password}=req.body;
     const newuser =await  prisma.user.create({
        data: {
          email: email,
          name: name,
          password:password
        },
      })
      let token =Math.floor(Math.random()*100000);
      const newtoken =await  prisma.token.create({
        data:{
          token:token,
          userId:newuser.id,
        }
      })
    let Link=`http://localhost:4545/verify/${token}/${newuser.id}`
       await sendMail(email,"verify Email",Link)
      res.json({newuser});
})

router.delete("/:email",async(req,res)=>{
  const {email}=req.params;
  const deleteUser = await prisma.user.delete({
    where: {
      email: 'suhavijindal@gmail.com',
    },
  })
  res.json({deleteUser});
})
router.put("/update",async(req,res)=>{
  const {email,name}=req.body;
  const updateUser = await prisma.user.update({
    where: {
      email: 'suhavijindal@gmail.com',
    },
    data: {
      name: 'Suhavi Jindal',
    },
  })
  res.json({updateUser});
})
 module.exports=router
