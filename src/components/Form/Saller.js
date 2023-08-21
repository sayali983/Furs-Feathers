import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button'


const Saller = () => {

  const[inpval,setInpval] = useState({
    name:"",
    email:"",
    Shop:"",
    Phone:"",
    GstNo:""
    
  })

  console.log(inpval);

  const getdata = (e) =>{

    const {value,name} = e.target;
    
    setInpval(() =>{

      return{
        ...inpval,
        [name]:value
      }
      
    })
    
  }

  const addData= (e) =>{
    e.preventDefault();
    
    const {name,email,Shop,Phone,GstNo}= inpval;

    if(name === "")
    {
      alert("name field is required")
    }
    else if(email === "")
    {
      alert("email field is required")
    }else if(!email.includes("@"))
    {
      alert("please emter valid email address")
    }
    else if(GstNo === "")
    {
      alert("GstNo field is required")
    }
  }

  return (
    <div>
     <div className='container mt-3'>
      <section className='d-flex justify-content-between'>
        <div className='left_data mt-3 p-3' style={{width:"100%"}}>
          <h3 className='text-center  col-lg-6'>Seller Registration</h3>
      
    <Form>

    <Form.Group className="mb-3  col-lg-6" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' onChange={getdata} />
      </Form.Group>

      <Form.Group className="mb-3  col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email"  name='email' onChange={getdata} />
      </Form.Group>

      <Form.Group className="mb-3   col-lg-6" controlId="formBasicShop">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text"   name='Shop' onChange={getdata}  />
      </Form.Group>

      <Form.Group className="mb-3  col-lg-6" controlId="formBasicPhone">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="tel"   name='Phone' onChange={getdata}  />
      </Form.Group>

      <Form.Group className="mb-3  col-lg-6" controlId="formBasicGstNo">
        <Form.Label>GST No</Form.Label>
        <Form.Control type="number"  name='GstNo'  onChange={getdata} />
      </Form.Group>
      
      <Button variant="primary" className="col-lg-6" onClick={addData}
      style={{background:"rgb(143,0,255)"}} type="submit">
      Register
      </Button>
    </Form>
  

        </div>
        <div className='right_data mt-5'  style={{width:"100%"}}>
          <div className='sign_img mt-5'>
            <img src="./Seller.jpg" style={{height:500 ,width:400}} alt=""/>
          </div>
        </div>
      </section>
     </div>

    </div>
  )
}

export default Saller
