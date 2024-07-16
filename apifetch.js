///approch 1 to fech the api
// import fetch from "node-fetch";
// fetch("http://localhost:3000/emp")
// .then(function(result){
//     return result.json()
// })
// .then(function(data){
//     console.log(data)
// })

/////////////// approch 2 ///////

import fetch from "node-fetch";
async function  getapidata(){
    let html = ``;
let result= await fetch("http://localhost:3000/emp")
let data= await result.json()
// console.write(data)
data.map((item,index)=>{
    
    // console.log(item,index)
    //  console.log(index,item.name,item.age)
      //console.log(index,item.name,item.age)
    html +=   item//`<p>${item.name}</p> <p>${item.age}</p>`
    // document.write(html)
    document.getElementById("iddd").innerHTML=html;
})

}
 //getapidata();