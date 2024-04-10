import { useEffect,useState } from 'react';
import{useLocation} from 'react-router-dom';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
function Item()
{
    const location=useLocation();
    const data=location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>{

    fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
    //   console.log(result)
    result.json().then((data1)=>{
        // console.log(data1)
        setdata(data1)
    })
    
      })

    },[])

    return(

        <div>
        <br></br>
        <br></br>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{color:"brown"}}>{apidata.title}</MDBCardTitle>
        <MDBCardTitle style={{color:"green"}}>{apidata.price*5}</MDBCardTitle>
        <MDBCardTitle style={{color:"blue"}}>{apidata.category}</MDBCardTitle>
        
        <MDBCardText>
          {apidata.description}
        </MDBCardText>
        <MDBBtn href='#'>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        

        </div>
    )
}
export default Item