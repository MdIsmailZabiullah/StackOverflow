import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/loogo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'

const Navbar = () => {

var User= null

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
           <Avatar backgroundColor='#009dff' px='5px' py='10px' borderRedius='50%' ><Link to='/User' style={{color:'white',textDecoration:'none' }}>M</Link></Avatar>
           <button className='nav-item nav-link'>Log Out</button>
           </>
        }
      </div>
    </nav>
  )
}

export default Navbar
