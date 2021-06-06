const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.ejs");
const app=express();
var items=["buy grocery","complete office work","cook food"];
var work=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    day=date();
    res.render('list', {listTitle: day,newlistitems:items});
});
app.post("/",function(req,res){
   let nitem= req.body.item;
    items.push(nitem);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});