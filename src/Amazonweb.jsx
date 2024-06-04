import React, {useEffect} from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import App from './App';
import Checkout from './Checkout';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function Amazonweb() {

  const[{}, dispatch]= useStateValue()

useEffect(()=>{

  onAuthStateChanged(auth, currentUser=>{
    console.log(`THE USER IS >>> `, currentUser);

    if(currentUser){

      //the user just logged in/ user was logged in


                                                                                //The reducer function receives the current state and the dispatched action.
                                                                                // When the action type is 'SET_USER', the reducer updates the user property in the state with action.user.
                                                                                // State Update:

                                                                                // The user property in the state is updated to either the currentUser object (if a user is signed in) or null (if no user is signed in).

      dispatch({
        type: 'SET_USER',
        user: currentUser
      })
        
      
    } else {                                                                              

      //the user is logged out

      dispatch({
        type: 'SET_USER',
        user:null
      })
    }
  })
},[])

  return (

    <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/checkout" Component={Checkout} />
        </Routes>
       
    </BrowserRouter>
  )
}

export default Amazonweb