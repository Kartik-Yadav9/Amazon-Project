import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth} from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

 
function Login() {

const navigate= useNavigate()
const[email,setEmail]= useState("")
const[password, setPassword]= useState("")

const signIn=(e)=>{
    e.preventDefault()

    //firebase login
    signInWithEmailAndPassword(auth, email, password)
    .then((auths)=>{
        console.log(auths)
    navigate('/')})
    .catch(error=>alert(error.message))
}


const register=(e)=>{
    e.preventDefault()

    //firebase register                                                           // When you call createUserWithEmailAndPassword, you need to pass the auth instance as the first parameter. 
                                                                                //This tells Firebase which project and authentication instance to use for the request. 

    createUserWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
        //successfully created  a new user with email & pswd
        console.log(auth)
    navigate('/')})
    .catch(error=>alert(error.message))
}



  return (
    <div className='login'>
        <Link to= '/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_Logo.syg.png'/>
        </Link>

        <div className="login_container">
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login_signInButton'>Sign in</button>
            </form>

            <p>By signing-in you agree to AMAZON Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our cookies Notice,
                our Cookies Notice and our intrest-based ads Notice.
            </p>

            <button  onClick={register} className='login_registerButton'>Create your Amazon Account</button>
        </div>

    </div>
  )
}

export default Login