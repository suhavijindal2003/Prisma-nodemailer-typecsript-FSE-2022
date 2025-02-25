const express=require("express");
const app=express();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// console.log(require("./routes/Blogroutes"))
app.use(express.json());
// app.get("/api/blog/:id",(req,res)=>{
//     let {id} = req.params;
//     res.send(id)
// })
app.use("/api/user",require("./routes/userroutes"))
app.use("/api/blog",require("./routes/Blogroutes"))
app.use("/api/auth",require("./routes/auth"))
app.use("/api/likes",require("./routes/likeroute"))

app.get("/verify/:token/:userid",async (req,res)=>{
    let {token,userid} = req.params;
    let isToken = await prisma.token.findFirst({
        where:{
            token:parseInt(token),
            userId:parseInt(userid)
        }
    })
    if(!isToken) return res.send("invalid ")

    else{
        let updateuserEmail=await prisma.user.update({
            where:{
                id:parseInt(userid)
            },
            data:{
                isverify:true
            }
        })
        res.send("email verified please login to continue");
    }

})
app.listen(4545,()=>{
    console.log("server started");
})