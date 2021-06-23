import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ()=>{
  const history = useHistory()
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const loginUser = async (e)=>{
    e.preventDefault();

    const res =await fetch('/signin' , {
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })

    const data = res.json()

      if(data.status ===400 || !data){
        window.alert('login failed')
      }else{
        window.alert('login successful')
      }
      history.push("/")
    
  }
    return (
        <>
        <form method = "POST">
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" autoComplete='off'
    value={email}
    onChange = {(e)=>setEmail(e.target.value)}
     placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" autoComplete="off"
    value={password}
    onChange = {(e)=>setPassword(e.target.value)}
     placeholder="Password"/>
  </div>
  <div className="form-group form-button">
    <input type="submit" className="form-submit" id="signin" name="signin"   value="register" onClick={loginUser} />
  </div>
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</form>
        </>
    )
}

export default Login