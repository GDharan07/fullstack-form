import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Update() {
 const [id,setId]=useState(0)
 const [text,setText]=useState('') 
const naan=useNavigate()

useEffect(()=>{
 setId(localStorage.getItem('_id'))
 setText(localStorage.getItem('text'))
},[])

const valueChange=(e)=>{
  setText(e.target.value)
}


 const addd=(e)=>{
  e.preventDefault();

  axios.put(`http://localhost:8080/${id}`,{
    text:text
  }).then(()=> naan('/'))
 }


  return (
    <div>
        <form onSubmit={addd}>
            <input type='text' value={text} onChange={valueChange}></input>
            <button>Add</button>
        </form>
    </div>
  )
}

export default Update