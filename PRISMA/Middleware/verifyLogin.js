let jwt=require("jsonwebtoken");
function isLoggedin(req,res,next){
    	let token=req.headers.authorization;
        if(!token) return res.send("please logged");
        let decode =jwt.verify(token,"yahoo");
        if(!decode) return res.send("token invalid");
        req.user=decode;
        next();
}
module.exports=isLoggedin
