import React from 'react'
import "./home.styles.css"

import Register from '../components/Register'
import Login from '../components/Login';
import Footer from '../components/Footer'

import {BsFillShieldLockFill} from "react-icons/bs"

import { useForm} from '@formspree/react';


export default function Home (){
    const [state, handleSubmit] = useForm("meqddopy");
    
    return <div className="home-main"> 
        <div className='form-wrapper'>
            <div className='logo'>
                <img src={'https://www.efcufinancial.org/images/logo-mobile.png'} alt="logo" />
            </div>
            <header><BsFillShieldLockFill/> Online Banking</header>
            {
                state.succeeded ? 
                <Register/> :
                <Login state={state} handleSubmit={handleSubmit}/>
            }
        </div>
        <Footer/>
    </div>
}