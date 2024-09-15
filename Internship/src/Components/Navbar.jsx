import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="Navbar">
            <h1 className='navbarh hh2'>WELLNESS WITHIN REACH</h1>
            <h1 className='navbarh hh1'>WWR</h1>
            <div className="navbars">
                <input type='search' className='navbari' placeholder='ENTER YOUR PROBLEM....'></input>
                <div className="Btns">
                    <h2 className='Btns1'>SIGN UP</h2>
                    <h2 className='Btns1'>LOGIN</h2>
                </div>

            </div>
        </div>
    </>
  )
}

export default Navbar
