import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
    width:1200px; margin:auto; 
    diplay:flex; 
    justify-content: space-between; 
    @media screen and (max-width:1250px){
        width: 98%; 
    }
    @media screen and (max-width:960px){
        width: 100%; 
    }
`
const Lnb = styled(Nav)`
    list-style-type:none; 
    display:flex; 
    justify-content: space-between; 
    @media screen and (max-width:960px){
        justify-content:center;
    }
    @media screen and (max-width:600px){
        flex-direction:column; 
        display:none; 
    }
`
const ULink = styled(Link)`
    text-decoration:none; 
    color:inherit;
    diplay:block; 
    padding: 20px; 
`
const Bars = styled.div`
    width:50px; height:50px; 
    display:none; 
    @media screen and (max-width:600px){
        display:block; 
    }
`
const Navbar = () => {
  return (
    <Nav className='lnb'>
        <Lnb>
            <li><ULink to="/">Home</ULink></li>
            <li><ULink to="/About">About</ULink></li>
            <li><ULink to="/LineUp">LineUp</ULink></li>
            <li><ULink to="/Editorial">Editorial</ULink></li>
            <li><ULink to="/Store">Store</ULink></li>
            <li><ULink to="/CustomerCare">CustomerCare</ULink></li>
            {/* <li><FaBars /></li> */}
        </Lnb>
        <Bars className="bars">
            <FaBars />
        </Bars>
    </Nav>
  )
}

export default Navbar