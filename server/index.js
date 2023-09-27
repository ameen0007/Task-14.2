const express = require("express")
const app = express()
const cors =require("cors")
const product = require("./product.json")

app.use(cors(

  // {
  //   origin : ["https://todo-app-client-psi.vercel.app"],
  //   methods : ["GET","POST","PUT","DELETE"],
  //   credentials : true
  // }  
))
app.use(express.json())


app.get("/api/product",(req,res)=>{
  res.json(product)
})

app.get("/api/product/:id",(req,res)=>{

 const {id} = req.params
 
  const foundproduct = product.find((productid)=> productid.id == id)
  res.json(foundproduct)

})

app.get('/', (req, res) => {
    res.send('Hello')
  });

const PORT = 3000 
app.listen(PORT,(req,res)=>{
   console.log(`server started in PORT ${PORT}`)
   
})