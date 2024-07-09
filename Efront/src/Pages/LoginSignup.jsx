import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'

const LoginSignup = () => {

  const [state,setState]=useState("Login");
  const [formData , setFormData] = useState({
    username:"",
    password:"",
    email:"",

  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("Login Function Executed",formData)

  }
  const singup = async()=>{
    console.log("Singup Function Executed",formData)
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:"POST",
      header:{
        Accept:"application/form-data",
        'content-Type':'application/json',

      },
      body:JSON.stringify(formData),


    }).then((response)=>response.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);

      window.location.replace("/");

    }
    else{
      alert(responseData.errors);

    }
  }

  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsingup-fields">
         {state === "Sign Up"?<input type="text" name="username" value={formData.username} onChange={changeHandler}  placeholder='Name' />:<></>} 
          <input type="email" name="email" value={formData.email} onChange={changeHandler}  placeholder='email' />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder='password' />
        </div>
        <button onClick={()=>{state==="Login"?login():singup()}}>Continue</button>
        {state =="Sign Up"?
        <p className='loginsingup-login'>Already have an account ? <span  onClick={()=>{setState("Login ")}}>Loing here</span></p>
        :<p className='loginsingup-login'>Create  an account  ? <span  onClick={()=>{setState("Sign Up")}}>click  here</span></p>}

        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue , i agress to the term of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
