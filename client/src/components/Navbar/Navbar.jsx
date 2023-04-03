import React, { useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import decode from 'jwt-decode'

import Logo from '../../assets/loogo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {

  const dispatch= useDispatch()
  const navigate = useNavigate()

  var User= useSelector((state) =>(state.currentUserReducer))
  const handlelogout = () =>{
      dispatch({type: 'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
    }
  useEffect(() => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp *  1000 < new Date().getTime()){
        handlelogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
  },[dispatch])

  

    return (
      <nav className='main-navbar'>
        <div className='navbar'>
          <Link to= '/' className='nav-item nav-logo'>
              <img src={Logo} alt="logo" />
          </Link>
          <Link to= '/' className='nav-item nav-btn'>About</Link>
          <Link to= '/' className='nav-item nav-btn'>Product</Link>
          <Link to= '/' className='nav-item nav-btn'>For Team</Link>
          <form >
              <input type="text" placeholder='Search....' />
              <img src={search} alt="search" width={20} className='search-icon'/>
          </form>
          {User === null ?
            <Link to='/Auth' className='nav-item nav-link' >Log In</Link>:
            <>
            <Avatar backgroundColor='#009dff' px='5px' py='10px' borderRedius='50%' ><Link to='/User' style={{color:'white',textDecoration:'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-link' onClick={handlelogout}>Log Out</button>
            </>
          }
        </div>
      </nav>
    )
  }

export default Navbar
