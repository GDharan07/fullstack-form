const express=require('express')

const app=express()

const mongoose=require('mongoose')


const cors=require('cors')

const list=require('./models/schema') 

app.use(cors())

mongoose.connect('mongodb://localhost:27017/todo',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('db connected')
    }
})

app.use(express.json())



app.get('/',async (req,res)=>{
    const data=await list.find()
      res.json(data)
})
app.get('/:id', async (req,res)=>{
    const data= await list.findById(req.params.id)
})

app.post('/',async (req,res)=>{
    const data= await new list({
        text:req.body.text
    })
     
    data.save()
    res.json(data)

})

app.delete('/:id',async (req,res)=>{
    const data= await list.findByIdAndDelete(req.params.id)
})

app.put('/:id', async (req,res)=>{
    const data= await list.findByIdAndUpdate(req.params.id)
data.text=req.body.text

data.save()
res.json(data)

})

app.listen(8080,()=>{
    console.log('sever Started')
})