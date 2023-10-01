import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Col } from 'react-bootstrap'
import Restaurents from './Restaurents'


function Home() {
    const [rest,setrest]=useState([])
    const fetchdata=async()=>{
      var result= await fetch ('/restaurants.json')
      result.json().then(data=>{
        setrest(data.restaurants);
      })
    }
    
    useEffect(()=>{
      fetchdata()
  
    },[])
    console.log(rest);
  
  return (
    <div>
        <Header></Header>
        <Restaurents Resto={rest} ></Restaurents>

    </div>
  )
}

export default Home