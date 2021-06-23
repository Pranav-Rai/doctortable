import React, { useState } from 'react'
import { useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

const Signup = ()=>{
  const history = useHistory()
const [user , setUser] = useState({
    name:"" , email:"" , phone:"" , work:"", password:"", cpassword:""
})

let name,value;

const handleInput = (e)=>{
    name = e.target.name
    value = e.target.value

    setUser({...user , [name]:value})
}

const postData =async (e)=>{
  e.preventDefault();
  const {name , email , phone , work, password , cpassword} = user
   
  const res = await fetch("/register" , {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name , email , phone , work , password , cpassword
      
    })
       
  })

  const data = await res.json()
  if(data.status === 422 || !data){
    window.alert('invalid registration')
    console.log('invalid registration')
  }else{
    window.alert('successful')
    console.log('successful')

    history.push('/login')
  }
}

    return (
        <>
       <form method="POST" >
  <div className="form-group">
  <div className="form-group">
    <label for="name">name</label>
    <input type="text" className="form-control" name="name" id="name" autoComplete="off"  value={user.name} onChange={handleInput} placeholder="Enter name"/>
  </div>
    <label for="email">Email address</label>
    <input type="email" className="form-control" name="email" id="email" autoComplete="off"  value={user.email} onChange={handleInput} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="phone">Phone number</label>
    <input type="text" className="form-control" name="phone" id="phone" autoComplete="off"  value={user.phone} onChange={handleInput} placeholder="Enter phone"/>
  </div>
  <div className="form-group">
    <label for="work">work</label>
    <input type="text" className="form-control" name="work" id="work" autoComplete="off"  value={user.work} onChange={handleInput} placeholder="Enter work"/>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" autoComplete="off"  value={user.password} onChange={handleInput} placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="cpassword">CPassword</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" autoComplete="off"  value={user.cpassword} onChange={handleInput} placeholder="Confirm-Password"/>
  </div>
  <div className="form-group form-button">
    <input type="submit" className="form-submit" id="signup" name="signup"   value="register" onClick={postData} />
  </div>
  
  {/* <button className="btn btn-primary">Submit</button> */}
</form>
       
        </>
    )
}

export default Signup