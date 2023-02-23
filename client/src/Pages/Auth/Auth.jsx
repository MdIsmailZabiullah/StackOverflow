import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { signup,login } from '../../actions/auth'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import './Auth.css'



const Auth = () => {

        const [isSignup, setIsSignup]= useState(true)
        const [name, setName]= useState('')
        const [email, setEmail]= useState('')
        const [password, setPassword]= useState('')

        const dispatch = useDispatch()
        const navigate = useNavigate()

        const HandleSwitch=() =>{
            setIsSignup(!isSignup)
        }

        const handleSubmit= (e) =>{
            e.preventDefault()
            if(!email && !password){
                alert("Enter email & password")
            }
            if(isSignup){
                if(!name){
                    alert("Enter name to continew..")
                }
                dispatch(signup({name, email, password}, navigate))
            }else{
                dispatch(login({email, password} , navigate))
            }
        }    
    return (
    <section className='auth-section'>
        {isSignup && <AboutAuth/>}
        <div className='auth-container'>
            { !isSignup && <img src={icon} alt='Stack Overflow' className='login-logo' />}
            <form onSubmit={handleSubmit}>
            {
                isSignup && (
                    <label htmlFor="name">
                        <h3>Display Name</h3>
                        <input type="text" name='name' id='name' onChange={(e) => {setName(e.target.value)}}/>
                    </label>        
                )
            }
                <label htmlFor="email">
                    <h3>Email</h3>
                    <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex" ,justifyContent:"space-between" }}>
                    <h3>Password</h3>
                    {!isSignup && <p style={{color:"#007ac6", fontSize:"10px"}}>Forgot password?</p>}                
                    </div>
                    <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                    {isSignup && <p style={{fontSize:"15px"}}>Password contain at least 8 charecters,<br/>including at least 1 letter and 1 number.</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor="check">
                        <input type="checkbox"  id='check'/>
                        <p style={{fontSize:"15px"}}>Opt-in to occetional, product update<br/>user research invitition, company <br/>announc and digests.</p>
                        </label>
                    )
                }
            
                <button type='submit' className='auth-btn' >{ isSignup ? 'Sign Up' : 'Log In' }</button>
                {
                    isSignup && (
                        <p style={{color:"black", fontSize:"13px"}}>
                            By clicking "Sign UP" you agree to the 
                            <span style={{color:"#007ac6"}}>Term <br/>of Condition</span>, 
                            <span style={{color:"#007ac6"}}>Privecy policy</span> and
                            <span style={{color:"#007ac6"}}> Cokies policy</span>
                        </p>
                    )
                }
            </form>        
            <p>{isSignup ? 'Already have an account?' : 'Don\'t have an account ?' } 
            <button type='button' className='handle-switch-btn' onClick={HandleSwitch}>{isSignup ? 'Log in' : 'Sign up'}</button></p>
                    
        </div>

    </section>
    )
}

export default Auth