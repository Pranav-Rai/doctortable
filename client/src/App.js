import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = ()=>{
  return(
     <>
     <Navbar/>
     <Route exact path= "/">
     <Home/>
     </Route>

     <Route path= "/About">
     <About/>
     </Route>

     <Route path= "/Contact">
     <Contact/>
     </Route>

     <Route path= "/Login">
     <Login/>
     </Route>

     <Route path= "/Signup">
     <Signup/>
     </Route>
     </>
  )
}


export default App