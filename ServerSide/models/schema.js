const mongoose=require('mongoose')

const schema=mongoose.Schema({
    text:{
      type:String,
      required:true
    }
})

module.exports=mongoose.model('list',schema)