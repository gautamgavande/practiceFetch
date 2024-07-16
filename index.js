import express from 'express'
import cors from 'cors'
let app=express();

app.use(cors())//midleware for feating the data

let data=[{
    name:"gautam",
    age:15
},
{
    name:"gautam1",
    age:151
}]

app.get("/emp",function(req,res){
    res.send(data);
})
// app.get("/emp/:id",function(req,res){
//     res.send(req.query.id)
// })
// app.get("/emp",function(req,res){
//     let [...dataa]=[req.params.id,req.params.name]
// })
app.listen(5000,function(){
    console.log("server running")
})