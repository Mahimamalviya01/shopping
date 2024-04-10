import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import{useNavigate} from "react-router-dom"
function Home() {
    const [apidata,setdata]=useState([])
    const navigate=useNavigate()
  useEffect(()=>{
    getData()
  },[])
  function getId(pid)
  {
    const data={pid:pid,add:"indore"}
    navigate("/item",{state:data})
  }
  async function getData()
  {
    var result = await fetch("https://fakestoreapi.com/products")
    
    var data = await result.json()
    setdata(data)
  }
  return (
    <div>
    <br></br>
    <br></br>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    {
        apidata.map((item,i)=>
        <MDBCol key={i}>
      <MDBCard>
        <center>
        <MDBCardImage
          src={item.image} style={{width:"100px", height:"150px"}}
          alt='...'
          position='top'/></center>
        
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardTitle style={{color:"brown"}}>{item.price*5}Rs</MDBCardTitle>
          <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
          <MDBCardTitle style={{color:"blue"}}>{item.rating.rate}</MDBCardTitle>
          <MDBCardText>
            {item.description}
          </MDBCardText>
        <center><MDBBtn onClick={()=>getId(item.id)}>View Details {item.id}</MDBBtn></center>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>)
    }
    
    
    
    
  </MDBRow>
    </div>
  )
}

export default Home