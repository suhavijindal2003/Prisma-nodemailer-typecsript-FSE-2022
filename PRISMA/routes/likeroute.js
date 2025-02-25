const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const isLoggedin = require("../Middleware/verifyLogin");
const prisma = new PrismaClient();
// router.post("/:blogId", isLoggedin ,async(req,res)=>{
//     const { blogId } = req.params;
//     const userId=req.user.id;
//     const addlike = await prisma.like.create({
//       data: {
//        authorId:userId,
//        blogId:parseInt(blogId)
//       },
//     })
//     let updatelikecount=await prisma.blog.update({
//         where:{
//             id:parseInt(blogId)
//         },
//         data:{
//             likecount:{
//                 increment:1
//             }
//         }
//     })
//     res.json({ message: "liked added successfully",data:updatelikecount });

// })
router.post("/:blogId", isLoggedin, async (req, res) => {
    const { blogId } = req.params;
    const userId = req.user.id;
    
    // Check if the user has already liked the blog
    const existingLike = await prisma.like.findFirst({
        where: {
            authorId: userId,
            blogId: parseInt(blogId)
        }
    });
    
    if (existingLike) {
        // If like exists, remove it (dislike)
        await prisma.like.delete({
            where: {
                id: existingLike.id
            }
        });
        
        // Decrement like count
        await prisma.blog.update({
            where: { id: parseInt(blogId) },
            data: { likecount: { decrement: 1 } }
        });
        
        return res.json({ message: "Like removed successfully" });
    } 
    
    // If no like exists, add a new like
    await prisma.like.create({
        data: {
            authorId: userId,
            blogId: parseInt(blogId)
        },
    });
    
    // Increment like count
    await prisma.blog.update({
        where: { id: parseInt(blogId) },
        data: { likecount: { increment: 1 } }
    });
    
    return res.json({ message: "Like added successfully" });
});



module.exports = router;