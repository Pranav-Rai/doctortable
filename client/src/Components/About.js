import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import Menu from "./menu"

const About = ()=>{
    //experiment
    const [items , setItems] = useState(Menu)
    const filterItem = (e)=>{
            const updateditems = Menu.filter((currElem)=>{
                return currElem.category ===e.target.value;
            })

            setItems(updateditems)

            if(e.target.value === "All"){
                setItems(Menu)
            }
    }

    const history = useHistory()

    const callAboutPage = async ()=>{
        try{
            const res = await fetch('/about', {
                method:"GET" ,
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            })

            const data = await res.json()
            console.log(data)

            if(!res.status === 200){
                const error = new Error(res.error)
                throw error
            }

        } catch(err){
            console.log(err)
            history.push('/login')
        }
    }

    useEffect(()=>{
        callAboutPage();
    },[]);

    return (
            <>
     
       <form method = "GET">
        <select onChange = {filterItem}>
            <option > All</option>
            <option > Cardiologist</option>
            <option > Dentist</option>
            <option > Orthopaedic</option>
            <option > Gynaecologist</option>
            <option > Psychiatrist</option>
        </select>

        {
            items.map((ele)=>{
                const {id , name , category , Location} = ele;

                return(
                    
                    <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{id}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{category}</li>
                                <li className="list-group-item">{Location}</li>

                            </ul>
                            </div>
                            

                )
            })
        }

       </form>
       
        </>
    )
}

export default About