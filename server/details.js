const express=require("express")
const router=express.Router()


var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";
var dbo=""

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    dbo=db.db("courses") //database with name courses will be created automatically

        var date = (new Date()).toISOString().split('T')[0];
        // console.log(date)
        var myquery = {startdate:{$lte:date}};

        // d=new Date()
        // yyyy=d.getFullYear()
        // MM=d.getMonth()
        // dd=d.getDate()
        // console.log(yyyy,MM,dd)
        // var myquery = {startdate:{$lte:(new Date())}};
        // db.coll.remove({date:{$lte:new Date(2012, 7, 14)}})
        // Date.now=function now() {
        //     return new Date().getDate();
        // }
        // var now = new Date();
        // var dateString = moment(now).format('YYYY-MM-DD');
        // console.log(dateString)
        // console.log(new Date())

        dbo.collection("details").deleteMany(myquery, function(err, obj) {
            if (err) throw err;
            console.log(obj.result.n + " document(s) deleted");
           
        });
});

router.post("/",function(req,res){
    cname=req.body.course
    // cpic=req.body.pic
    ctext=req.body.text
    cstartdate=req.body.startdate
    cenddate=req.body.enddate
    ctime=req.body.time
    cteacher=req.body.teacher
    cpassword=req.body.password
    clink=req.body.link

    var query={coursename:cname,Imagetext:ctext,startdate:cstartdate,enddate:cenddate,time:ctime,teacher:cteacher,password:cpassword,link:clink}
    dbo.collection("details").insertOne(query,function(err,res){
        if(err) throw(err)
        console.log("successfully inserted")
        
    });
    res.send(JSON.stringify("Okey"))
    
});



router.get("/teja",function(req,res){
    console.log('get req for all courses');
    dbo.collection("details").find({}).toArray(function(err,result){
        res.send(result)
    })
    

})

module.exports=router




