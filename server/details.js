const express=require("express")
const router=express.Router()

var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";
var dbo=""

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    dbo=db.db("courses") //database with name chat will be created automatically
});

router.post("/",function(req,res){
    cname=req.body.course
    cdate=req.body.date
    ctime=req.body.time
    cteacher=req.body.cteacher
    cpassword=req.body.password

    var query={coursename:cname,date:cdate,time:ctime,teacher:cteacher,password:cpassword}
    dbo.collection("details").insertOne(query,function(err,res){
        if(err) throw(err)
        console.log("successfully inserted")
        
    });
    res.send(JSON.stringify("Okey"))
    
});

router.get("/teja",function(req,res){
    res.send("jkdkkj");
})

module.exports=router




