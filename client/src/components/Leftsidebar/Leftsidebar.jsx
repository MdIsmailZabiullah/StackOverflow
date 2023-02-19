import React from 'react'
import {NavLink} from 'react-router-dom'
import './Leftsidebar.css'
import Globe from '../../assets/Globe.svg'

const Leftsidebar = () => {
  return (
    <div className='left-sidebar' >
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeclassname='active'>
                <h4>Home</h4>
            </NavLink>
            <div className='side-nav-div'>
                <div>
                    <p><b>PUBLIC</b></p>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active' style={{ paddingLeft:'5px' }}>
                        <img src={Globe} alt="globe" />
                        <p style={{padding:'10px'}}>Question</p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{ paddingLeft:'40px' }} >
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active'  style={{ paddingLeft:'40px' }}>
                        <p>User</p>
                    </NavLink>
                </div>

            </div>
        </nav>
      
    </div>
  )
}

export default Leftsidebar
