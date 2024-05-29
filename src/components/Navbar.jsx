import React from 'react'
import CartWidget from './CartWidget.jsx'

function Navbar() {
  return (
    <nav>
        <>
            <a href="#">About</a>
        </>  
        <>
            <a href="#">Services</a>
        </>
        <>
            <a href="#">Products</a>
        </>
        <>
            <CartWidget />
        </>
    </nav>
  )
}

export default Navbar