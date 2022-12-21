import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Form() {

const [value,setValue]=useState([])
const [post,setPost]=useState([])

const naan=useNavigate()

const valueChange=(e)=>{
    setValue(e.target.value)
}

const add=(e)=>{
    e.preventDefault()
   axios.post('http://localhost:8080',{
    text:value
})
setValue('')

}


  axios.get('http://localhost:8080').then((res)=>{
      setPost(res.data) 
                  })
 

const delet=(_id)=>{
  axios.delete(`http://localhost:8080/${_id}`).then(()=>{
       getdata()     
 
})}

const getdata=()=>{
  axios.get('http://localhost:8080').then((res)=>{
    setPost(res.data)
                        
})
}


const edit=(_id,text)=>{
     localStorage.setItem('_id',_id)
     localStorage.setItem('text',text)
     
     naan('/update')
}


  return (
    <div>
        <form onSubmit={add}>
            <input type='text' value={value} onChange={valueChange}></input>
            <button>Add</button>
        </form>
        
        {post.map((dat,index)=>(
            <div><h1 key={index}> {dat.text}</h1> <button onClick={()=>delet(dat._id)}>Delete</button><button onClick={()=>edit(dat._id,dat.text)}>Update</button></div>
            
        ))}
    </div>
  )
}

export default Form