require("dotenv").config()

console.log(process.env)

const PORT= process.env.PORT  || 3003;

const express=require("express");
const app=express();

const Card=require("./db");
const cors=require("cors");
const Card_Zod_Schema=require("./schema");


app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"hi how are you "})
})

app.get("/cards", async (req,res)=>{
    try{
        const cards= await Card.find({});
        res.json(cards);
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})


app.post("/cardpost",async (req,res)=>{
    try{
        console.log(req.body)
        const card=req.body.card;
        const response=Card_Zod_Schema.safeParse(card);
       
        if(!response.success){
            return res.status(200).json({
                error:true , success: false , message:"Invalid card data "
            });
        }
        await Card.create(card);
        res.send("Created")
    }
    catch(err){
        console.log(err);
        res.sendStatus(500)
    }
})


app.listen(PORT,()=>{
    console.log(" backend is runnint at "+ PORT)
})

