const express= require("express");
const app = express();
const router = express.Router();
require("dotenv").config();
const fetch =require('node-fetch');
//--------------------- this to get teams , logo and player in it --------------------------//
router.get("/getteams",async(req,res)=>{

    const url =`https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${process.env.API_KEY}`;

   try{
    await fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        for(var i in data){
            if(data[i]=="Al Ahly"){
                console.log(data[i]);
            }
        }
     res.json(data)
    })
   }catch (err){
    console.log(err)
   }

});
//--------------------- Search with players name --------------------------//
router.get("/getplayer/:name",async(req,res)=>{
const name =req.params.name;
    const url =`https://apiv3.apifootball.com/?action=get_players&player_name=${name}&APIkey=${process.env.API_KEY}`;

   try{
    await fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        
     res.json(data)
    })
   }catch (err){ 
    console.log(err)
   }

});
// -------------- get countries id ,Logo , Name ----------------------- //
router.get("/getcountryid",async(req,res)=>{
    
        const url =`https://apiv3.apifootball.com/?action=get_countries&APIkey=${process.env.API_KEY}`;
    
       try{
        await fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            
         res.json(data)
        })
       }catch (err){ 
        console.log(err)
       }
    
    });
 //https://apiv3.apifootball.com/?action=get_countries
app.use(router);
app.listen(process.env.PORT,()=>console.log(`server run on ${process.env.PORT}`))