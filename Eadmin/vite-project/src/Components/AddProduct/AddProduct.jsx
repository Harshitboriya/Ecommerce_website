import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
const AddProduct = () => {
   
  const [image ,setImage] = useState(false);
  const [ProductDetails,setProductDetails] = useState({
    name : '',
    image : '',
    category : "women",
    new_Price:'',
    old_Price : '',
    
  })

  const imageHandler =(e)=>{
    setImage(e.target.files[0]);

  }

  const changeHandler =(e)=>{
    setProductDetails({...ProductDetails,[e.target.name]:e.target.value});

  }

  const Add_Product = async()=>{
    console.log(ProductDetails);
    let responseData;
    let product =ProductDetails;

    let formData = new FormData();
    formData.append("product", image);
    
    await fetch("http://localhost:4000/upload",{
      method : "POST",
      headers:{
        Accept :'application/json',
      },
      body : formData

    }) .then((res)=>res.json())
    .then((data)=>{responseData=data});

    if(responseData.success)
      {
        product.image = responseData.image_url;
        console.log(product);
        await fetch("http://localhost:4000/addproduct",{
          method : "POST",
          headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
            },
            body : JSON.stringify(product)
        }).then((res)=>res.json())
        .then((data)=>{
          data.success?alert("product add"):alert("failed");
          
        });
        
      }

  }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product titel </p>
        <input value={ProductDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here' />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={ProductDetails.old_Price} onChange={changeHandler} type="text" name='old_Price' placeholder='type here' />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            {/* <input value={ProductDetails.new_Price} onChange={changeHandler} type="text" name='new_Price' placeholder='type here' /> */}
            <input value={ProductDetails.new_Price} onChange={changeHandler} type="text" name='new_Price' placeholder='type here' />

          </div>
        </div>

        <div className="addproduct-itemfield">
          <p>Product category</p>
          <select value={ProductDetails.category} onChange={changeHandler} className='add-product-selector' name="category" id="category">
            <option value="women ">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src={image? URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
          </label>

          <input  onChange={imageHandler} type="file" name='image ' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Add</button>
       
    </div>
  )
}

export default AddProduct